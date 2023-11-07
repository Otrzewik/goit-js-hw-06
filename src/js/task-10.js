function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const boxSize = initialSize + i * 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

controls.addEventListener("click", function (event) {
  if (event.target.dataset.create) {
    const amount = document.querySelector("input").value;
    createBoxes(amount);
  }

  if (event.target.dataset.destroy) {
    destroyBoxes();
  }
});
