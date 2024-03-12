
/* like button */
const heartIcon = document.querySelector(".like-button .heart-icon");
const likesAmountLabel = document.querySelector(".like-button .likes-amount");

let likesAmount = parseInt(localStorage.getItem("likesAmount")) || 0;

// Update the likes 
likesAmountLabel.innerHTML = likesAmount;

heartIcon.addEventListener("click", () => {
  if (event.detail === 2) { 
    likesAmount = 0;       // Reset likes to 0
    heartIcon.classList.remove("liked");
  } else {
    heartIcon.classList.toggle("liked");
    if (heartIcon.classList.contains("liked")) {
      likesAmount++;
    } else {
      likesAmount--;
    }
  }

  likesAmountLabel.innerHTML = likesAmount;

  // Storing likes
  localStorage.setItem("likesAmount", likesAmount.toString());
});
