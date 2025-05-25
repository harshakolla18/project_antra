const controller = {
  startGame() {
    model.score = 0;
    model.timeLeft = 30;
    model.blocks.forEach((b) => {
      b.hasMole = false;
      b.hasSnake = false;
    });
    view.clearBoard();
    view.updateScore(model.score);
    view.updateTime(model.timeLeft);

    if (model.intervalId) clearInterval(model.intervalId);
    if (model.moleIntervalId) clearInterval(model.moleIntervalId);
    if (model.snakeIntervalId) clearInterval(model.snakeIntervalId);

    model.intervalId = setInterval(() => this.countDown(), 1000);
    model.moleIntervalId = setInterval(() => this.generateMoles(), 1000);
    model.snakeIntervalId = setInterval(() => this.generateSnake(), 2000);
  },

  countDown() {
    model.timeLeft--;
    view.updateTime(model.timeLeft);
    if (model.timeLeft <= 0) {
      this.endGame();
      view.alertGameOver("Time's Up! Game Over!");
    }
  },

  generateMoles() {
    const activeMoles = model.blocks.filter((b) => b.hasMole).length;
    if (activeMoles >= 3) return;

    const emptyBlocks = model.blocks.filter((b) => !b.hasMole && !b.hasSnake);
    if (emptyBlocks.length === 0) return;

    const randomBlock =
      emptyBlocks[Math.floor(Math.random() * emptyBlocks.length)];
    randomBlock.hasMole = true;
    view.showMole(randomBlock.id);

    setTimeout(() => {
      if (randomBlock.hasMole) {
        randomBlock.hasMole = false;
        view.hideMole(randomBlock.id);
      }
    }, 2000);
  },

  generateSnake() {
    if (model.currentSnakeBlock !== null) {
      model.currentSnakeBlock.hasSnake = false;
      view.hideSnake(model.currentSnakeBlock.id);
    }

    const randomBlock =
      model.blocks[Math.floor(Math.random() * model.blocks.length)];
    randomBlock.hasSnake = true;
    model.currentSnakeBlock = randomBlock;
    view.showSnake(randomBlock.id);
  },

  showAllSnakes() {
    model.blocks.forEach((block) => {
      block.hasSnake = true;
      block.hasMole = false;
      view.showSnake(block.id);
    });
  },

  endGame() {
    clearInterval(model.intervalId);
    clearInterval(model.moleIntervalId);
    clearInterval(model.snakeIntervalId);
  },

  handleBlockClick(event) {
    const block = event.currentTarget;
    const index = parseInt(block.dataset.index);

    if (model.blocks[index].hasMole) {
      model.score++;
      view.updateScore(model.score);
      model.blocks[index].hasMole = false;
      view.hideMole(index);
    } else if (model.blocks[index].hasSnake) {
      this.showAllSnakes();
      this.endGame();
    }
  },
};
