const galleryItems = {
  minecraft: [
    { preview: "./images/gallery/minecraft/territory.png", description: "Наш участок 🏡" },
    { preview: "./images/gallery/minecraft/home.png", description: "Вид на домик 🏠" },
    { preview: "./images/gallery/minecraft/heart.png", description: "Сердечко 💗" },
    { preview: "./images/gallery/minecraft/kitchen.png", description: "Хозяюшка на кухне 👀" },
  ],
  gta: [
    { preview: "./images/gallery/gta/relaxation.png", description: "Вечерний отдых ✨" },
    { preview: "./images/gallery/gta/photoshoot.png", description: "Фотосессия с любимой 📸" },
    { preview: "./images/gallery/gta/striptease.png", description: "Развлекаемся 🤫" },
    { preview: "./images/gallery/gta/yacht.png", description: "Кораблик 🚢" },
  ],
};

const galleries = {
  minecraft: document.querySelector("[galleryMinecraft]"),
  gta: document.querySelector("[galleryGta]"),
};

const lightbox = document.querySelector("[lightbox]");
const galleryImage = document.querySelector("[galleryImage]");
const lightboxClose = () => lightbox.classList.remove("is-open");

const renderGallery = (gallery, items) => {
  gallery.innerHTML = items
    .map(
      (item, index) => `
          <li class="gallery__item">
            <img src="${item.preview}" alt="${item.description}" class="gallery__img" data-index="${index}"/>
            <h6 class="gallery-item__title">${item.description}</h6>
          </li>
        `
    )
    .join("");
};

Object.entries(galleries).forEach(([key, gallery]) => {
  renderGallery(gallery, galleryItems[key]);
  gallery.addEventListener("click", (e) => {
    const img = e.target.closest(".gallery__img");
    if (img) openLightbox(galleryItems[key], parseInt(img.dataset.index));
  });
});

let currentItems, currentIndex;

const openLightbox = (items, index) => {
  if (window.innerWidth < 480) return;
  if (!items[index]) return console.error("Index not found!");
  currentItems = items;
  currentIndex = index;
  galleryImage.src = currentItems[index].preview;
  lightbox.classList.add("is-open");
};

galleryImage.addEventListener("click", lightboxClose);
document.querySelector("[galleryCloseBtn]").addEventListener("click", lightboxClose);
document.querySelector("[lightboxOverlay]").addEventListener("click", lightboxClose);

window.addEventListener("resize", () => {
  if (lightbox.classList.contains("is-open") && window.innerWidth < 480) lightboxClose();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") lightboxClose();
  else if (e.key === "ArrowRight" && currentIndex < currentItems.length - 1) galleryImage.src = currentItems[++currentIndex].preview;
  else if (e.key === "ArrowLeft" && currentIndex > 0) galleryImage.src = currentItems[--currentIndex].preview;
});
