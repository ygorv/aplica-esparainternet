const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const header = document.querySelector(".header");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    menu.classList.remove("active");
  }

});

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }

});

document.getElementById("year").textContent =
  new Date().getFullYear();