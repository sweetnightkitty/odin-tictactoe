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

    return board;
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


function switchPlayers(activePlayer) {
    return activePlayer === players[0] ? players[1] : players[0];
}

function playRound() {
    let activePlayer = players[0];
    let marker = activePlayer.marker;
    const board = displayBoard();
    let i = 0;

    while(i < 5 /* To prevent infinite loop until condition to end game is coded */) {
        const row = parseInt(prompt("Choose row"));
        const column = parseInt(prompt("Choose column"));
        board[row][column] = marker;
        activePlayer = switchPlayers(activePlayer);
        marker = activePlayer.marker;
        i++;
    }


    console.log(board);
}

playRound()
