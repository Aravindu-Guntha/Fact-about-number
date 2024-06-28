let userInput = document.getElementById("userInput");
let fat = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function telsuko(event) {
    if (event.key === "Enter") {
        if (userInput.value === "") {
            alert("Enter a Number");
            return;
        }
    }
    let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput.value;
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    fat.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            fat.classList.remove("d-none");
            fat.textContent = jsonData.fact;
        });
}
userInput.addEventListener("keyup", telsuko);