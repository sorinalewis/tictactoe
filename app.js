const gameState = {
  board: [null, null, null, null, null, null, null, null, null],
  currentPlayer: "X",
};

let gameActive = true;

function makeMove(clickedCellID) {
  if (gameState.board[clickedCellID] === null && gameActive) {
    gameState.board[clickedCellID] = gameState.currentPlayer;
    document.getElementsByClassName("cell")[clickedCellID].innerText = gameState.currentPlayer;
    console.log(gameState.board);
    const winner = checkWin();
    if (winner) {
      gameActive = false;
      console.log("Player", winner, "wins!");
    } else {
      togglePlayer();
    }
  }
}

function checkWin() {
  const winCombinations = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winCombinations) {
    const [a, b, c] = combination;
    if (
      gameState.board[a] &&
      gameState.board[a] === gameState.board[b] &&
      gameState.board[b] === gameState.board[c]
    ) {
      return gameState.board[a]; 
    }
  }

  return null; 
}

function togglePlayer() {
  gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
}

function resetGame() {
  gameState.board = [null, null, null, null, null, null, null, null, null];
  gameState.currentPlayer = "X";
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  gameActive = true;
  console.log("Game reset");
}
