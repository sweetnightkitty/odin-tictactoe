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

    //Not needed after UI added
    console.log(board);
 
    const switchPlayers = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => activePlayer;

    const playRound = () => {
        let row = parseInt(prompt(activePlayer.name + "'s turn! Choose row"));
        let column = parseInt(prompt(activePlayer.name + " choose column"));
        
        while (board[row][column] !=0) {
            row = parseInt(prompt("That spot is taken, try again! Choose row"));
            column = parseInt(prompt("Choose column")); 
        };

        board[row][column] = activePlayer.marker;

        //Checks for a winner but cannot discern between a draw or unfinished game
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

            // check for draw
            let tempArray = [];
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    if (board[i][j] != 0) {
                        tempArray.push(1);
                    } 
                }
            }
            if (tempArray.length === 9) {
                return 3;
            }
        
            return 0
        };

        //announces winner or draw
        if(isGameOver() === 1) {
            alert("Alpha wins!")
        } else if(isGameOver() === 2) {
            alert("Beta wins!");
        } else if(isGameOver() === 3) {
            alert("It's a draw!");
        }

        switchPlayers();

        //Logs updated board
        console.log(board);
    }


    return {
        playRound,
        getActivePlayer,
        getBoard: board
    }


}

function screenController() {
    const game = gameController();
    const playerTurnDiv = document.querySelector(".turn");
    const boardDiv = document.querySelector(".game-board")

    const updateScreen = () => {
        //clear the board
        boardDiv.textContent = "";

        //new version of board
        const board = game.getBoard;
        const activePlayer = game.getActivePlayer();

        //Display player's turn
        playerTurnDiv.textContent = `${activePlayer.name}'s turn!`;

        let cellId = 0;
        board.forEach(row => {
            row.forEach(cell => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");

                //dataset will identify each specific button
                cellId+= 1;
                cellButton.dataset.number = cellId;
                cellButton.textContent = cellId;
                boardDiv.appendChild(cellButton);
            })
        })
    };

    function clickBoard(e) {
        const selectedButton = e.target.dataset.number;

        //ensures you don't click the gap
        if(!selectedButton) return;

        game.playRound(selectedButton);
        updateScreen();
    }
    boardDiv.addEventListener("click", clickBoard);

    //initial render
    updateScreen();
};



const start = document.querySelector(".btn-start");
const reset = document.querySelector(".btn-reset");

//toggles start or reset game buttons
start.addEventListener("click", () => {
    const gameBoard = document.querySelector(".game-board");
    gameBoard.style.display = "grid";
    start.style.display = "none";
    reset.style.display = "block";
})
