const counter = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")

minus.addEventListener("click", decrementCounter)
plus.addEventListener("click", incrementCounter)

function decrementCounter () {
    const currentCount = parseInt(counter.textContent, 10);
    counter.textContent = `${currentCount - 1}`;
}
function incrementCounter () {
    const currentCount = parseInt(counter.textContent, 10);
    counter.textContent = `${currentCount + 1}`;
}