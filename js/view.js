const view = {
  updateScore(score) {
    document.getElementById("score").textContent = score;
  },

  updateTime(time) {
    document.getElementById("timeLeft").textContent = time;
  },

  clearBoard() {
    document.querySelectorAll(".block").forEach((block) => {
      const moleImg = block.querySelector(".mole");
      const snakeImg = block.querySelector(".snake");
      moleImg.classList.remove("active");
      snakeImg.classList.remove("active");
    });
  },

  showMole(index) {
    const block = document.querySelector(`.block[data-index="${index}"]`);
    const moleImg = block.querySelector(".mole");
    const snakeImg = block.querySelector(".snake");
    snakeImg.classList.remove("active");
    moleImg.classList.add("active");
  },

  hideMole(index) {
    const block = document.querySelector(`.block[data-index="${index}"]`);
    const moleImg = block.querySelector(".mole");
    moleImg.classList.remove("active");
  },

  showSnake(index) {
    const block = document.querySelector(`.block[data-index="${index}"]`);
    const moleImg = block.querySelector(".mole");
    const snakeImg = block.querySelector(".snake");
    moleImg.classList.remove("active");
    snakeImg.classList.add("active");
  },

  hideSnake(index) {
    const block = document.querySelector(`.block[data-index="${index}"]`);
    const snakeImg = block.querySelector(".snake");
    snakeImg.classList.remove("active");
  },

  alertGameOver(message) {
    alert(message);
  },
};
