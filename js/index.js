// кнопки
const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const serviceBtn = document.getElementById("serviceBtn");
const blogBtn = document.getElementById("blogBtn");
const contactUsBtn = document.querySelector(".header__contact-btn");

// секции
const headerElement = document.querySelector(".header");
const aboutElement = document.querySelector(".about");
const serviceElement = document.querySelector(".services");
const blogElement = document.querySelector(".facts");
const contactUsElement = document.querySelector(".contactUs");

// слушатели
homeBtn.addEventListener("click", () =>
  window.scrollTo({ behavior: "smooth", top: 0 })
);

aboutBtn.addEventListener("click", () =>
  aboutElement.scrollIntoView({ behavior: "smooth" })
);

serviceBtn.addEventListener("click", () =>
  serviceElement.scrollIntoView({ behavior: "smooth" })
);

blogBtn.addEventListener("click", () =>
  blogElement.scrollIntoView({ behavior: "smooth" })
);

contactUsBtn.addEventListener("click", () =>
  contactUsElement.scrollIntoView({ behavior: "smooth" })
);

window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? headerElement.classList.add("header_background")
    : headerElement.classList.remove("header_background");
});
