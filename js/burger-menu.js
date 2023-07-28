document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".hamburger-menu");
  const layersContainer = document.querySelector(".layers__container");
  const htmlBody = document.querySelector("html, body");

  burgerMenu.addEventListener("click", function () {
    layersContainer.classList.toggle("menu-open");

    // Add or remove overflow: hidden; based on the menu state
    if (layersContainer.classList.contains("menu-open")) {
      htmlBody.style.overflow = "hidden";
    } else {
      htmlBody.style.overflow = "auto";
    }
  });
});
