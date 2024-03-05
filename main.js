var results = ["rock", "paper", "scissors"];

var optionRoll = function () {
  return results[Math.floor(Math.random() * 3)];
};

var play = function () {
  var computerResult = optionRoll();
  var userResult = optionRoll();

  if (computerResult === userResult) {
    console.log("It is a tie. Play again");
  } else if (
    (computerResult === "rock" && userResult === "scissors") ||
    (computerResult === "paper" && userResult === "rock") ||
    (computerResult === "scissors" && userResult === "paper")
  ) {
    console.log("Computer wins.");
  } else {
    console.log("User wins.");
  }
};

play();
