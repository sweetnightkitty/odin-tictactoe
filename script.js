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
    
    const getBoard = () => board;
    const updateBoard = (row, column, marker) => {
        board[row][column] = marker
    };
    //const updateBoard, Something needs to print the board with updates.
    return { 
        getBoard,
        updateBoard
    };
}



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

    const board = () => displayBoard().getBoard();

    const switchPlayers = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const playRound = () => {
        let row = parseInt(prompt("Choose row"));
        let column = parseInt(prompt("Choose column"));
        if(board()[row][column] !=0) {
            row = parseInt(prompt("That spot is taken, choose a different row"));
            column = parseInt(prompt("Choose column")); 
        }

        board()[row][column] = activePlayer.marker;
        switchPlayers();
        console.log(board());
    }

    console.log(board());
    return playRound();


}

const game = gameController();


