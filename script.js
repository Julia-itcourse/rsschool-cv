// const burger = document.getElementById("burger");
// const navigationList = document.getElementById("navigation-list");

// burger.addEventListener("click", () => {
//   navigationList.classList.toggle("navigation-list--open");
//   burger.classList.toggle("burger--close");
// });

// const navItems = document.querySelectorAll(".navigation__link");
// console.log(navItems);

// navItems.forEach((el) => {
//   el.addEventListener("click", () => {
//     navigationList.classList.remove("navigation-list--open");
//   });
// });

const refs = {
  burger: document.getElementById("hamburger"),
  menuWrap: document.getElementById("menu-wrap"),
  navItems: document.querySelectorAll(".navigation-menu__link"),
  menu: document.querySelector(".menu"),
};

const changeClass = (action, el, className) => {
  if (action === "toggle") {
    el.classList.toggle(className);
  }
  if (action === "remove") {
    el.classList.remove(className);
  }
  if (action === "add") {
    el.classList.add(className);
  }
};

const openBurger = () => {
  changeClass("toggle", refs.burger, "is-active");
  changeClass("toggle", refs.menuWrap, "is-open");

  refs.navItems.forEach((el) => {
    el.addEventListener("click", () => {
      changeClass("remove", refs.menuWrap, "is-open");
      changeClass("remove", refs.burger, "is-active");
    });
  });
};

refs.burger.addEventListener("click", () => openBurger());

scrollBtn = document.getElementById("scroll-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
