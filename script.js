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
            board.push('')
        };
    };

    const printBoard = () => {
        while (htmlBoard.firstChild) htmlBoard.removeChild(htmlBoard.firstChild)  //clears board

        i = 0;
        board.forEach((square) => {
            var btn = document.createElement('button')
            btn.classList.add('default-btns')
            btn.innerHTML = square
            btn.dataset.index = i
            htmlBoard.appendChild(btn)
            i++
        });

    }

    newGame();
    return { board, newGame, printBoard };
};

const player = () => {
    score = 0;
    piece = '';
    name = '';

    return {score, piece, name};
}

const playGame = () => {
    let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    let gBoard = gameBoard();
    gBoard.printBoard();
    let btns = document.querySelectorAll('.default-btns');
    

    let nameInput = (n) => {
        let p = prompt(`Player ${n}, insert your name`, '')
        return p;
    };

    let beginTurn = (p, s) => {
        let turnAlert = `${p}, it's your turn! Click on an empty space in the grid to place the ${s}.`;
        document.getElementById("game-prompt").innerHTML = turnAlert;
    };

    let firstMove = () => {
        (p1.score + p2.score) % 2 == 0 ? goFirst = p1 : goFirst = p2;
    };

    let p1 = player();
    p1.piece = 'x';
    p1.name = nameInput(1);
    document.getElementById("player1").innerHTML = p1.name;
    
    let p2 = player()
    p2.piece = 'o';
    p2.name = nameInput(2);
    document.getElementById("player2").innerHTML = p2.name;
    
    let currentUser = p1;
    let goFirst = p1;

    let updateScores = () => {
        document.getElementById("player1-score").innerHTML = p1.score;
        document.getElementById("player2-score").innerHTML = p1.score;
    };
    
    updateScores();
    beginTurn(currentUser.name, currentUser.piece)

    let winCheck = (b, p) => {
        win = false;
        console.log(currentUser)

        for (let i = 0; i < winConditions.length; i++) {
            count3 = 0;
            winConditions[i];
            for(let j = 0; j < winConditions[i].length; j++) {
                if(b[winConditions[i][j]] == p) {
                    count3 += 1;
                    console.log(b[winConditions[i][j]] + ' is ' + count3)
                    console.log(winConditions[i])
                    console.log(b)
                };
            };
            console.log(count3)
            if(count3 == 3) {
                win = true;
                console.log('yes')
            } else {
                count3 = 0;
            };
        };
        console.log(win);
        return win;
    };

    let changePiece = (e) => {
        btn = e.target 
        i = e.target.dataset.index
        firstMove();
        if (!btn.innerHTML) {
            btn.innerHTML = currentUser.piece;
            gBoard.board[i] = currentUser.piece;
        } else {
            alert('This spot is already taken!')
        }
        winCheck(gBoard.board, currentUser.piece)
        currentUser == p1 ? currentUser = p2 : currentUser = p1;
        beginTurn(currentUser.name, currentUser.piece)
    }

    function playerMove() {
        btns.forEach(btn => {
            btn.addEventListener('click', changePiece);
        });

    };

    let playStart = () => {
        playerMove();
    }

    playStart();

};

let newGame = playGame()
newGame