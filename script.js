const burger = document.getElementById("burger");
const navigationList = document.getElementById("navigation-list");

burger.addEventListener("click", () => {
  navigationList.classList.toggle("navigation-list--open");
  burger.classList.toggle("burger--close");
});

const navItems = document.querySelectorAll(".navigation__link");
console.log(navItems);

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    navigationList.classList.remove("navigation-list--open");
  });
});

scrollBtn = document.getElementById("scroll-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}