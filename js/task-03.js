const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
    outputRef.textContent = event.currentTarget.value.trim()
    ? event.currentTarget.value 
    : `Anonymous`;
});