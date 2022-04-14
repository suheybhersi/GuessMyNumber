let number = Math.floor(Math.random() * 20) + 1;
console.log(`The number: ${number}`);
let prevScore = parseInt(document.querySelector(".currentScore").textContent);

function process() {
  let guess = document.querySelector("#number").value;
  if (guess != number) {
    prevScore--;
    document.querySelector(".currentScore").textContent = prevScore;
    if (guess > number) {
      document.querySelector(".status").textContent = "📈 Too high!";
    } else {
      document.querySelector(".status").textContent = "📉 Too low!";
    }
  } else {
    let highScore = parseInt(document.querySelector(".highScore").textContent);
    prevScore > highScore ? (highScore = prevScore) : null;
    document.querySelector(".highScore").textContent = highScore;
    document.querySelector(".status").textContent = "Correct number!";
    document.querySelector("#num").textContent = number;
    document.body.style.backgroundColor = "#60b347";
    document.querySelector("#number").style.backgroundColor = "#60b347";
  }
}

document.querySelector(".check").addEventListener("click", () => {
  process();
});

function restart() {
  document.body.style.backgroundColor = "#222";
  document.querySelector("#number").style.backgroundColor = "#222";
  document.querySelector("#number").value = "";
  prevScore = 20;
  document.querySelector("#num").textContent = "?";
  document.querySelector(".status").textContent = "Start guessing...";
  document.querySelector(".currentScore").textContent = 20;
  number = Math.floor(Math.random() * 20) + 1;
  console.log(`The number: ${number}`);
}

function getValue() {
  if (event.keyCode === 13) {
    event.preventDefault();
    process();
  }
}
