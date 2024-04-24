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
    
    const row = parseInt(prompt("Choose row"));
    const column = parseInt(prompt("Choose column"));

    board[row][column] = "marked";

    return board;
}

function makeCell(location) {
    let value = 0;
    return value;
}

function createPlayers(name, marker) {
    this.name = name;
    this.marker = marker;
    return {name, marker};
}

const playerOne = createPlayers("Alpha", "O");
const playerTwo = createPlayers("Beta", "X");

console.log(gameBoard());

function selectCell(location) {

} 