/* 
FUNCTION NAMES AND USES

    gameboard(): creates the new board and prints in window
        newGame(): clears old board adds 9 empty divs
        printboard(): prints in 3x3 format

    player(): creates new player with name, pieces, and score starting at 0

    playGame(): begins new game
        - creates new gameboard
        nameInput(): creates new player


    
*/

let htmlBoard = document.querySelector('.board');

const gameBoard = () => {

    let board = []
    const newGame = () => {
        board = []
        while (board.length < 9) {
            board.push(' ')
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

    return {score, piece, name};
}

const playGame = () => {
    let g = gameBoard();
    g.printBoard();

    let winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

    let nameInput = (n) => {
        let p = prompt(`Player ${n}, insert your name`, '')
        console.log(typeof p)
        return p;
    };

    let turnSwitch = (p) => {
        return `${p}, it's your turn! Click on an empty space in the grid to place your piece.`;
    };

    let p1 = player();
    p1.piece = 'x';
    p1.name = nameInput(1);
    document.getElementById("player1").innerHTML = p1.name;
    let p2 = player()
    p2.piece = 'o';
    p2.name = nameInput(2);
    document.getElementById("player2").innerHTML = p2.name;


    let beginRound = (playerA, playerB) => {
         turnSwitch(playerA.name);
         turnSwitch(playerB.name)
    }

    playRound(p1, p2);
};

let ng = playGame()

ng