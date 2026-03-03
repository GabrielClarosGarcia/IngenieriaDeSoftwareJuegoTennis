import Tennis from "./tennis.js";

const tennis = new Tennis(); // ✅ SOLO UNA VEZ

const resultadoDiv = document.querySelector("#resultado-div");
const player1Button = document.querySelector("#player1-button");
const player2Button = document.querySelector("#player2-button");

player1Button.addEventListener("click", () => {
  tennis.player1Scores();
  resultadoDiv.textContent = tennis.score();
});

player2Button.addEventListener("click", () => {
  tennis.player2Scores();
  resultadoDiv.textContent = tennis.score();
});ç