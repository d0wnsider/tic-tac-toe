const Gameboard = { gameboard: ["X", "O", "X", "O", "X", "O"] };

function displayController() {
  const boardDisplay = document.querySelector(".gameboard");

  boardDisplay.textContent = Gameboard.gameboard;
  
}
