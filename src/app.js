const dots = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("nav li");

dots.addEventListener("click", () => {
  nav.classList.toggle("active");
  console.log("works");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
