const counter = document.querySelector("#counter")
const plus = document.querySelector("#plus")

plus.addEventListener("click", incrementCounter)

function incrementCounter () {
    const currentCount = parseInt(counter.textContent, 10);
    console.log(currentCount + 1);
}