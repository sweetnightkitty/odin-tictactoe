function displayBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++) {
        board[i] = [];
        for(let j = 0; j < columns; j++) {
            board[i].push(0);
        }
    }
    
    return board
    };




function gameController() {
    const players = [
        {
            name: "Alpha",
            marker: 1,
        },
    
        {
            name: "Beta",
            marker: 2,
        }
    ]

    let activePlayer = players[0];

    const board = displayBoard();
    console.log(board);
 
    const switchPlayers = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const playRound = () => {
        let row = parseInt(prompt(activePlayer.name + "'s turn! Choose row"));
        let column = parseInt(prompt(activePlayer.name + " choose column"));
        
        while (board[row][column] !=0) {
            row = parseInt(prompt("That spot is taken, try again! Choose row"));
            column = parseInt(prompt("Choose column")); 
        };

        board[row][column] = activePlayer.marker;

        //This is where the logic to check for a winner will go
        const isGameOver = () => {
            // check upper row
            if (board[0][1] == board[0][0] && board[0][1] == board[0][2] && board[0][1] != 0) {
                return board[0][1]
                }
                // check lower row
                if (board[2][1] == board[2][0] && board[2][1] == board[2][2] && board[2][1] != 0) {
                return board[2][1]
                }
                // check left column
                if (board[1][0] == board[0][0] && board[1][0] == board[2][0] && board[1][0] != 0) {
                return board[1][0]
                }
                // check right column
                if (board[1][2] == board[0][2] && board[1][2] == board[2][2] && board[1][2] != 0) {
                return board[1][2]
                }
                // check center row, column, and diagonals
                if (
                board[1][1] != 0 &&
                ((board[1][1] == board[1][0] && board[1][1] == board[1][2]) ||
                    (board[1][1] == board[0][1] && board[1][1] == board[2][1]) ||
                    (board[1][1] == board[0][0] && board[1][1] == board[2][2]) ||
                    (board[1][1] == board[2][0] && board[1][1] == board[0][2]))
                ) {
                return board[1][1]
                }
            
                return 0
        };

        console.log(isGameOver());
        switchPlayers();
        console.log(board);
    }


    return {
        playRound,
    }


}



const game = gameController();


// Addition of UI//
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        game.playRound();
    })
})

const start = document.querySelector(".btn-start");
start.addEventListener("click", () => {
    const gameBoard = document.querySelector(".game-board");
    const reset = document.querySelector(".btn-reset");
    gameBoard.style.display = "grid";
    start.style.display = "none";
    reset.style.display = "block";
})
