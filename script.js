function gameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++) {
        board[i] = [];
        for(let j = 0; j < columns; j++) {
            board[i].push(getCell());
        }
    }

    const playerOne = createPlayer("Alpha", "O");
    const playerTwo = createPlayer("Beta", "X");

    return {board, playerOne, playerTwo};
}

function getCell() {
    let value = 0;
    return value;
}

function createPlayer(name, marker) {
    this.name = name;
    this.marker = marker;
    return {name, marker};
}

console.log(gameBoard());