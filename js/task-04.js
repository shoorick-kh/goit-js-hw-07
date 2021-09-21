const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const countRef = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  countRef.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  countRef.textContent = counterValue;
});
