const heart = document.querySelector("[loveHeart]");
const loveText = document.querySelector("[loveText]");

heart.addEventListener("click", () => {
  heart.setAttribute("href", "./images/icons.svg#clicked-heart");
  loveText.textContent = "Я тебя люблю 💖";
});
