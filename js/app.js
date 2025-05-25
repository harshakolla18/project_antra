document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("startGame")
    .addEventListener("click", () => controller.startGame());

  document.querySelectorAll(".block").forEach((block) => {
    block.addEventListener("click", (event) =>
      controller.handleBlockClick.call(controller, event)
    );
  });
});
