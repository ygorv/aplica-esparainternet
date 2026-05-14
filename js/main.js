const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const header = document.querySelector(".header");

menuToggle.addEventListener("click", () => {

  menu.classList.toggle("active");

  const expanded =
    menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute(
    "aria-expanded",
    !expanded
  );

});

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    menu.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      false
    );

  }

});

document.querySelectorAll(".navbar__list a")
  .forEach(link => {

    link.addEventListener("click", () => {

      menu.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        false
      );

    });

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
