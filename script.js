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
    
    return board;
}

function makeCell() {
    let value = 0;
    return value;
}


const players = [
    {
        name: "Alpha",
        marker: "alpha",
    },

    {
        name: "Beta",
        marker: "beta",
    }
]

console.log(gameBoard());


function markCell(board) {
    const row = parseInt(prompt("Choose row"));
    const column = parseInt(prompt("Choose column"));

    board[row][column] = "tree";
}

function switchPlayers(activePlayer) {
    return activePlayer === players[0] ? players[1] : players[0];
}

function playRound() {
    let activePlayer = players[0];
    let marker = activePlayer.marker;
    const row = parseInt(prompt("Choose row"));
    const column = parseInt(prompt("Choose column"));
    console.log(marker);
    // board[row][column] = "hi";

    activePlayer = switchPlayers(activePlayer);
    marker = activePlayer.marker;
    console.log(activePlayer);
    console.log(marker);
}

playRound();