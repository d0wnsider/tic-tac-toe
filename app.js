// * module(IIFE) for for single purpose functions/ factories for multiples like players
//* gameboard
//TODO
const Gameboard = (() => {
  const tile = ["", "", "", "", "", "", "", "", ""];
  return { tile };
})();

//* players
// what should players do?
const Player = (name, symbol, status) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const getStatus = status;
  const getWin = "";
  return { getName, getSymbol, getStatus, getWin };
};
// how to remove in global declaration?
const player1 = Player("Player 1", "X", true);
const player2 = Player("Player 2", "O", false);

//TODO
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
        tile.removeEventListener("click", hello);
      } else {
        tile.classList.add("o");
        Gameboard.tile[idx] = player2.getSymbol();
        player1.getStatus = true;
        turn.textContent = `${player1.getName()}'s turn`;
        tile.removeEventListener("click", hello);
      }

      checkWinner();
    });
  });

  return { turn };
})();

//* check's the winner or draw
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
    // then game is over!
    // remove listener for the whole gameboard? then display
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

const draw = () => {
  const isFull = Gameboard.tile.every((tile) => Boolean(tile));
  if (isFull) {
    display.turn.textContent = `It's a draw!`;
  }
};
//* starts the game
//TODO gameflow sequence
//TODO starts the game when start button is clicked
const game = (() => {
  display;
})();
