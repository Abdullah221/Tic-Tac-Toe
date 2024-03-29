const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';

function placeMarker(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        renderBoard();
        if (checkWin(currentPlayer)) {
            alert(`Player ${currentPlayer} wins!`);
            resetBoard();
        } else if (checkDraw()) {
            alert('It\'s a draw!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        cell.textContent = board[row][col];
    });
}

function checkWin(player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true; // horizontal win
        }
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true; // vertical win
        }
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true; // diagonal win
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true; // diagonal win
    }
    return false;
}

function checkDraw() {
    for (let row of board) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    return true;
}

function resetBoard() {
    board.forEach(row => row.fill(''));
    renderBoard();
    currentPlayer = 'X';
}

renderBoard();