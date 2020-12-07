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
            var btn = document.createElement('button')
            btn.classList.add('default-buttons')
            btn.innerHTML = square
            htmlBoard.appendChild(btn)
        });

    }

    newGame();
    return { newGame, printBoard };
};

const player = () => {
    score = 0;
    piece = '';
    name = '';

    return {piece, name};
}

const playGame = () => {
    let g = gameBoard();
    g.printBoard();

    let nameInput = (n) => {
        let p = prompt(`Player ${n}, insert your name`, '')
        console.log(typeof p)
        return p;
    };

    let p1 = player();
    p1.piece = 'x';
    p1.name = nameInput(1);
    document.getElementById("player1").innerHTML = p1.name
    let p2 = player()
    p2.piece = 'o';
    p2.name = nameInput(2);
    document.getElementById("player2").innerHTML = p2.name
    
    console.log(p1)

};

let ng = playGame()

ng