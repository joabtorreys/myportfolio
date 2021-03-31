const burger = document.querySelector("#burger");
const headernav = document.querySelector(".header-nav");
burger.addEventListener("click", () => {
  headernav.classList.toggle("active");
});
