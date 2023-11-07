const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById("value");

// Utwórz zmienną przechowującą wartość licznika
let counter = 0;

const updateCounterValue = () => {
  counterValue.textContent = counter;
};

decrementButton.addEventListener("click", () => {
  counter -= 1;
  updateCounterValue();
});

incrementButton.addEventListener("click", () => {
  counter += 1;
  updateCounterValue();
});

updateCounterValue();
