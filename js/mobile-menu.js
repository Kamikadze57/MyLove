(() => {
  const mobileMenu = document.querySelector("[data-mobile]");
  const openMenuBtn = document.querySelector("[data-open-mobile]");
  const closeMenuBtn = document.querySelector("[data-close-mobile]");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    document.body.style.overflow = "auto";
  });
})();
