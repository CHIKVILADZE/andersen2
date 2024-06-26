document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("randomButton");
  const container = document.querySelector(".container");

  button.addEventListener("mouseover", function () {
    if (Math.random() < 0.5) {
      moveButton();
    }
  });

  button.addEventListener("click", function () {
    moveButton();
  });

  function moveButton() {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }
});
