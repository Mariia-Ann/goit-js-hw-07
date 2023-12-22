const boxesRef = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const startSize = 30;
    const sizeIncrement = 10;
    let size = startSize + sizeIncrement * i;
    const divBox = document.createElement('div');
    divBox.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    boxesRef.insertAdjacentElement('beforeend', divBox);
  }
  inputRef.value = '';
}



btnCreate.addEventListener("click", () => {
  if (1 <= inputRef.value && inputRef.value <= 100) {
    createBoxes(inputRef.value);
  }
});
btnDestroy.addEventListener("click", destroyBoxes);
