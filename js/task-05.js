const inputRef = document.querySelector("#name-input");
const outRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  outRef.textContent = event.target.value;
  if (event.currentTarget.value === "") {
    outRef.textContent = "незнакомец";
  }
}
