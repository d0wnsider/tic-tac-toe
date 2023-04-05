// * module(IIFE) for for single purpose functions/ factories for multiples like players
//* gameboard
//TODO
const gameboard = (() => {
  const tile = ["", "", "", "", "", "", "", "", ""];
  return { tile };
})();

//* players
// what should players do?
const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

//TODO
const display = (() => {
  // adding event listener
  const tile = document.querySelectorAll(".tile");
  tile.forEach((tile, idx) => {
    tile.addEventListener("click", (e) => {
      tile.textContent = player1.getSymbol();
      gameboard.tile[idx] = player1.getSymbol();
    });
  });
  return {};
})();

//TODO gameflow sequence
const game = (() => {
  display;
  return { display };
})();

//* starts the game
//TODO starts the game when start button is clicked
game;
