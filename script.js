let htmlBoard = document.querySelector('.board');

const gameBoard = () => {

    let board = []
    const newGame = () => {
        board = []
        while (board.length < 9) {
            board.push('s')
        };
        console.log(board)
    };

    const printBoard = () => {
        while (htmlBoard.firstChild) htmlBoard.removeChild(htmlBoard.firstChild)  //clears board

        board.forEach((square) => {
            var node = document.createElement('span')
            node.innerHTML = square
            htmlBoard.appendChild(node)
        });

    }

    newGame();
    return { newGame, printBoard };
    
};

const player = (piece, name) => {
    piece = this.piece;
    name = this.name;
}

const playGame = () => {
    let g = gameBoard();
    g.printBoard();

    let name = (n) => {
        prompt(`Player ${n}, insert your name`, '')
    };
    let p1 = player('x', name(1));
    let p2 = player('o', name(2));

};