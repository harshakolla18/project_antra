const view = {
    updateScore(score) {
      document.getElementById('score').textContent = score;
    },
  
    updateTime(time) {
      document.getElementById('timeLeft').textContent = time;
    },
  
    clearBoard() {
      document.querySelectorAll('.block').forEach(block => {
        block.classList.remove('active');
      });
    },
  
    showMole(index) {
      document.querySelector(`.block[data-index="${index}"]`).classList.add('active');
    },
  
    hideMole(index) {
      document.querySelector(`.block[data-index="${index}"]`).classList.remove('active');
    },
  
    alertGameOver() {
      alert("Time is Over!");
    }
  };
  