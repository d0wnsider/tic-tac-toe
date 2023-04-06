const startGame = () => {
  const gameboard = document.querySelector(".gameboard");
  const turn = document.querySelector(".turn");
  const restart = document.querySelector(".restart");
  const start = document.querySelector(".start");
  gameboard.style.display = "grid";
  turn.style.display = "block";
  restart.style.display = "block";
  start.style.display = "none";
};

//* starts the game
const startG = document.querySelector(".start");
startG.addEventListener("click", (e) => {
  startGame();
});
//*gameboard
const Gameboard = (() => {
  const tile = ["", "", "", "", "", "", "", "", ""];
  return { tile };
})();

//* players
const Player = (name, symbol, status) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const getStatus = status;
  const getWin = "";
  return { getName, getSymbol, getStatus, getWin };
};
const player1 = Player("Player 1", "X", true);
const player2 = Player("Player 2", "O", false);

const draw = () => {
  const isFull = Gameboard.tile.every((tile) => Boolean(tile));
  if (isFull) {
    display.turn.textContent = `It's a draw!`;
  }
};

const display = (() => {
  // adding event listener
  const tile = document.querySelectorAll(".tile");
  const turn = document.querySelector(".turn");

  tile.forEach((tile, idx) => {
    tile.addEventListener("click", function hello(e) {
      // how to move in a function?
      if (player1.getWin === "win") {
        tile.textContent = "";
      } else if (player2.getWin === "win") {
        tile.textContent = "";
      } else if (player1.getStatus === true && player1.getWin !== "win") {
        tile.classList.add("x");
        Gameboard.tile[idx] = player1.getSymbol();
        player1.getStatus = false;
        turn.textContent = `${player2.getName()}'s turn`;
      } else {
        tile.classList.add("o");
        Gameboard.tile[idx] = player2.getSymbol();
        player1.getStatus = true;
        turn.textContent = `${player1.getName()}'s turn`;
      }

      checkWinner();
    });
  });
  //* restart button
  const restart = document.querySelector(".restart");
  restart.addEventListener("click", () => {
    const tile = document.querySelectorAll(".tile");
    const turn = document.querySelector(".turn");
    // clear
    tile.forEach((tile, idx) => {
      tile.classList.remove("x");
      tile.classList.remove("o");
      Gameboard.tile[idx] = "";
      player1.getStatus = true;
      player2.getStatus = false;
      player1.getWin = false;
      player2.getWin = false;
      turn.textContent = `${player1.getName()}'s turn`;
    });
  });
  return { turn };
})();

const checkWinner = () => {
  if (
    (Gameboard.tile[0] === "X" &&
      Gameboard.tile[1] === "X" &&
      Gameboard.tile[2] === "X") ||
    (Gameboard.tile[0] === "X" &&
      Gameboard.tile[3] === "X" &&
      Gameboard.tile[6] === "X") ||
    (Gameboard.tile[0] === "X" &&
      Gameboard.tile[4] === "X" &&
      Gameboard.tile[8] === "X") ||
    (Gameboard.tile[3] === "X" &&
      Gameboard.tile[4] === "X" &&
      Gameboard.tile[5] === "X") ||
    (Gameboard.tile[1] === "X" &&
      Gameboard.tile[4] === "X" &&
      Gameboard.tile[7] === "X") ||
    (Gameboard.tile[2] === "X" &&
      Gameboard.tile[4] === "X" &&
      Gameboard.tile[6] === "X") ||
    (Gameboard.tile[6] === "X" &&
      Gameboard.tile[7] === "X" &&
      Gameboard.tile[8] === "X") ||
    (Gameboard.tile[2] === "X" &&
      Gameboard.tile[5] === "X" &&
      Gameboard.tile[8] === "X")
  ) {
    display.turn.textContent = `Player 1 has won!`;
    player1.getWin = "win";
  }
  if (
    (Gameboard.tile[0] === "O" &&
      Gameboard.tile[1] === "O" &&
      Gameboard.tile[2] === "O") ||
    (Gameboard.tile[0] === "O" &&
      Gameboard.tile[3] === "O" &&
      Gameboard.tile[6] === "O") ||
    (Gameboard.tile[0] === "O" &&
      Gameboard.tile[4] === "O" &&
      Gameboard.tile[8] === "O") ||
    (Gameboard.tile[3] === "O" &&
      Gameboard.tile[4] === "O" &&
      Gameboard.tile[5] === "O") ||
    (Gameboard.tile[1] === "O" &&
      Gameboard.tile[4] === "O" &&
      Gameboard.tile[7] === "O") ||
    (Gameboard.tile[2] === "O" &&
      Gameboard.tile[4] === "O" &&
      Gameboard.tile[6] === "O") ||
    (Gameboard.tile[6] === "O" &&
      Gameboard.tile[7] === "O" &&
      Gameboard.tile[8] === "O") ||
    (Gameboard.tile[2] === "O" &&
      Gameboard.tile[5] === "O" &&
      Gameboard.tile[8] === "O")
  ) {
    display.turn.textContent = `Player 2 has won!`;
    player2.getWin = "win";
  }
  draw();
};
