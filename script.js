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
    return { getBoard };
}


function switchPlayers(activePlayer) {
    return activePlayer === players[0] ? players[1] : players[0];
}

function playRound() {
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
    let marker = activePlayer.marker;
    const board = displayBoard().getBoard();

    const switchPlayers = (activePlayer) => {
        return activePlayer === players[0] ? players[1] : players[0];
    }

    let i = 0;

    while( i < 3/* To prevent infinite loop until condition to end game is coded */) {
        let row = parseInt(prompt("Choose row"));
        let column = parseInt(prompt("Choose column"));
        
        if(board[row][column] !=0) {
            row = parseInt(prompt("That spot is taken, choose a different row"));
            column = parseInt(prompt("Choose column")); 
        }

        board[row][column] = marker;
        activePlayer = switchPlayers(activePlayer);
        marker = activePlayer.marker;
        i++;
    }

    //Needs updating
    function checkGameOver(board) {
        const spaceTaken = (currentValue) => currentValue > 0;
        return board.every(spaceTaken) ? true : false;
    }


    console.log(board);
}

playRound()
