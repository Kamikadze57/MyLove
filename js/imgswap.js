const heartImage = document.getElementById('heart');
const textElement = document.getElementById('text');

heartImage.addEventListener('click', () => {
    heartImage.src = 'images/heart2.svg';
    textElement.textContent = 'Я тебя люблю 💖';
});