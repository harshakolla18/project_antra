document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startGame").addEventListener("click", () => controller.startGame());
  
    document.querySelectorAll('.block').forEach(block => {
      block.addEventListener('click', controller.handleBlockClick);
    });
  });
  