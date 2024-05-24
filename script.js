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


        switchPlayers();
        console.log(board);
    }


    return {
        playRound,
    }


}

const game = gameController();




