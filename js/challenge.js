const counter = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const likes = document.querySelector(".likes")
const comments = document.querySelector("#list")
const commentForm = document.querySelector("#comment-form")
// const commentInput = document.querySelector("#comment-input")


minus.addEventListener("click", decrementCounter);
plus.addEventListener("click", incrementCounter);
heart.addEventListener("click", addLike);
commentForm.addEventListener("submit", displayComment);
// commentInput.addEventListener("input", handleInput);

function decrementCounter () {
    const currentCount = parseInt(counter.textContent, 10);
    if (currentCount > 0)
    counter.textContent = `${currentCount - 1}`;
}

function incrementCounter () {
    const currentCount = parseInt(counter.textContent, 10);
    counter.textContent = `${currentCount + 1}`;
}

function addLike () {
    const currentCount = parseInt(counter.textContent, 10);

    // const previousLikes = document.querySelectorAll(".likes > li");
    const previousLikes = Array.from(likes.children)
    previousLikes.find(previousLikes => {
        const previousLikeCount = previousLikes.textContent.slice(0, 1)
        // str.slice(beginIndex[, endIndex])
    })

    console.log(previousLikeCount)

    // const previousLike = currentCount already exists
     
    const newLike = document.createElement("li");
    newLike.textContent = `${currentCount} has been liked 1 time`;
    likes.append(newLike);
}

function displayComment (event) {
    event.preventDefault();
    // console.log("form listener", event.target);

    const commentFormData = new FormData(event.target);
    const commentText = commentFormData.get("comment");

    const comment = document.createElement("p");
    comment.textContent = commentText;
    comments.append(comment);

    event.target.reset();

    // console.log("comment text", commentText);
}

// function handleInput(event) {
//     console.log("input listener", event.target); 
//     const h3 = document.querySelector("#test");
//     h3.textContent = event.target.value;
// }

