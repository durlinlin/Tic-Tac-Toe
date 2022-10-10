const statusDisplay = document.querySelector('.game-status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn!`;
const winningMessage = () => `Player ${currentPlayer} has won`;
const drawMessage = () => `Its a tie`;

statusDisplay.innerText = currentPlayerTurn();

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

function handleCellPlayed(clickedCell, i) {
  gameState[i] = currentPlayer;
  clickedCell.innerText = currentPlayer;
}
function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"
  // currentPlayer === "X" ? true : false
  // if current player is x and is true change to o, if false change to x
  statusDisplay.innerText = currentPlayerTurn();
}
function handleResultValidation() {
  let roundWon = false;
  
  for (let i = 0; i < winningConditions.length; i++){
    const winningCondition = winningConditions[i] 
    let a = gameState[winningCondition[0]]
    let b = gameState[winningCondition[1]]
    let c = gameState[winningCondition[2]]
    
    if (a === "" || b === "" || c === "") {
      continue; //continues the loop add break if you want to break the loop
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusDisplay.innerText = winningMessage();
    gameActive = false;
    return;
  }
  
  let roundDraw = !gameState.includes("") //if gamestate has empty string would return true, round
  if (roundDraw) {
    statusDisplay.innerText = drawMessage();
    gameActive = false;
    return;
  }
  
  handlePlayerChange();
}

function handleCellClick(event) {
  const clickedCell = event.target
  const index = parseInt(clickedCell.dataset.index)
  
  if (gameState[index] !== "" || !gameActive) {
    return
  }
  handleCellPlayed(clickedCell, index)
  handleResultValidation();
}
function handleRestartGame() {
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerText = currentPlayerTurn();
  document.querySelectorAll('.cell').forEach((cell) => (cell.innerText = ""));
}
document.querySelector(".game-restart").addEventListener("click", handleRestartGame);
document.querySelectorAll(".cell").forEach((cell) => cell.addEventListener("click", handleCellClick));

