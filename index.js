const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (let input of inputs) {
        if (!input.value) {
            input.parentElement.classList.add("error");
        } else {
            input.parentElement.classList.remove("error");
        }
          input.value = "";
    }
  
});