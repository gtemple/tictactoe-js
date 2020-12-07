const gameBoard = () => {
    let board = []
    const newGame = () => {
        board = []
        while (board.length < 9) {
            board.push('')
        };
        console.log(board)
    };
    console.log(board)
    return { newGame };
    
};