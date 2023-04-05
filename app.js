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
  return { getName, getSymbol, getStatus };
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
      if (player1.getStatus === true) {
        tile.textContent = player1.getSymbol();
        Gameboard.tile[idx] = player1.getSymbol();
        player1.getStatus = false;
        turn.textContent = `${player2.getName()}'s turn`;
        tile.removeEventListener("click", hello);
      } else {
        tile.textContent = player2.getSymbol();
        Gameboard.tile[idx] = player2.getSymbol();
        player1.getStatus = true;
        turn.textContent = `${player1.getName()}'s turn`;
        tile.removeEventListener("click", hello);
      }
    });
  });
})();

//* starts the game
//TODO gameflow sequence
//TODO starts the game when start button is clicked
const game = (() => {
  display;
})();
