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

    const playRound = (selectedButton) => {
       let row;
       let column;

       //assigns row based on the button clicked
        if(selectedButton < 4) {
            row = 0;
        } else if(selectedButton > 3 && selectedButton < 7) {
            row = 1;
        } else if(selectedButton > 6) {
            row = 2;
        }

        //asigns column value based on button clicked
        if(selectedButton == 1 || selectedButton == 4 || selectedButton == 7) {
            column = 0;
        } else if(selectedButton == 2 || selectedButton == 5 || selectedButton == 8) {
            column = 1;
        } else if(selectedButton == 3 || selectedButton == 6 || selectedButton == 9) {
            column = 2;
        }

        //updates value in 2d array to represent player selection
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

        //Creates gameboard on screen
        let cellId = 0;
        board.forEach(row => {
            row.forEach(cell => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");

                //dataset will identify each specific button
                cellId+= 1;
                cellButton.dataset.number = cellId;
                boardDiv.appendChild(cellButton);
            })
        })
    };

    function clickBoard(e) {
        const selectedButton = e.target.dataset.number;
        const activePlayer = game.getActivePlayer().marker;
        const button = e.target;
        console.log(button.textContent);


        //ensures you don't click the gap
        if(!selectedButton) return;

        game.playRound(selectedButton);

        //player 1 is Alpha / player 2 is Beta
        if(activePlayer == 1) {
            button.textContent = "O";
        } else if(activePlayer == 2) {
            button.textContent = "X";
        }

        console.log(button.textContent);




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

screenController();