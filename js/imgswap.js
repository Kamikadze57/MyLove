const heart = document.querySelector('[data-love-heart]');
const loveText = document.querySelector('[data-love-text]');

heart.addEventListener('click', () => {
  heart.setAttribute('href', './images/icons.svg#clicked-heart'); 
  loveText.textContent = 'Я тебя люблю 💖';
});