const cells = document.querySelectorAll('.cell');
const statusDiv = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
};

const handleClick = (index) => {
    if (gameBoard[index] || !gameActive) return;
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        gameActive = false;
        statusDiv.textContent = `${winner} gana!`;
    } else if (gameBoard.every(cell => cell !== '')) {
        gameActive = false;
        statusDiv.textContent = '¡Empate!';
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDiv.textContent = `Turno de ${currentPlayer}`;
    }
};

const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    statusDiv.textContent = `Turno de ${currentPlayer}`;
    cells.forEach(cell => cell.textContent = '');
};

cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        handleClick(index);
    });
});

resetButton.addEventListener('click', resetGame);

statusDiv.textContent = `Turno de ${currentPlayer}`;
