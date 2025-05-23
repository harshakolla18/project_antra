const controller = {
    startGame() {
      model.score = 0;
      model.timeLeft = 30;
      model.blocks.forEach(b => b.hasMole = false);
      view.clearBoard();
      view.updateScore(model.score);
      view.updateTime(model.timeLeft);
  
      if (model.intervalId) clearInterval(model.intervalId);
      if (model.moleIntervalId) clearInterval(model.moleIntervalId);
  
      model.intervalId = setInterval(this.countDown, 1000);
      model.moleIntervalId = setInterval(this.generateMoles, 1000);
    },
  
    countDown() {
      model.timeLeft--;
      view.updateTime(model.timeLeft);
      if (model.timeLeft <= 0) {
        clearInterval(model.intervalId);
        clearInterval(model.moleIntervalId);
        view.alertGameOver();
      }
    },
  
    generateMoles() {
      const activeMoles = model.blocks.filter(b => b.hasMole).length;
      if (activeMoles >= 3) return;
  
      const emptyBlocks = model.blocks.filter(b => !b.hasMole);
      if (emptyBlocks.length === 0) return;
  
      const randomBlock = emptyBlocks[Math.floor(Math.random() * emptyBlocks.length)];
      randomBlock.hasMole = true;
      view.showMole(randomBlock.id);
  
      // Auto-hide mole after 1.5s
      setTimeout(() => {
        randomBlock.hasMole = false;
        view.hideMole(randomBlock.id);
      }, 1500);
    },
  
    handleBlockClick(event) {
      const block = event.currentTarget;
      const index = parseInt(block.dataset.index);
      if (model.blocks[index].hasMole) {
        model.score++;
        view.updateScore(model.score);
        model.blocks[index].hasMole = false;
        view.hideMole(index);
      }
    }
  };
  