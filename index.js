document.addEventListener("keydown", function(event) {
  pressP(event.key)
});

function pressP(key) {

  if (key === "p") {

    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    if (randomNumber1 > randomNumber2) {

      document.querySelector("h2").textContent = "🚩 Player 1 wins!";
      restore();
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h2").textContent = "Player 2 wins! 🚩";
      restore();
    } else {
      document.querySelector("h2").textContent = "Draw!";
      restore();
    }

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  }
}

function restore() {

  setTimeout(function() {
    document.querySelector("h2").textContent = "Press [P] to Play!";
  }, 2700);

}
