const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
    outputRef.textContent = event.currentTarget.value.trim();
    if (inputRef.value.trim() === "") {
        outputRef.textContent = `Anonymous`;
    }
});