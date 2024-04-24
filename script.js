function gameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++) {
        board[i] = [];
        for(let j = 0; j < columns; j++) {
            board[i].push(makeCell());
        }
    }
    
    markCell(board);
    return board;
}

function makeCell() {
    let value = 0;
    return value;
}


const players = [
    {
        name: "Alpha",
        marker: "O",
    },

    {
        name: "Beta",
        marker: "X",
    }
]

console.log(gameBoard());


function markCell(board) {
    const row = parseInt(prompt("Choose row"));
    const column = parseInt(prompt("Choose column"));

    board[row][column] = "O";
}

function switchPlayers() {
    activePlayer === playerOne ? playerTwo : playerOne;
}
