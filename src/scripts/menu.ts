const hamburger = document.querySelector(".hamburger") as HTMLDivElement;
const navLinks = document.querySelector(".nav-links") as HTMLDivElement;

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("expanded");
});
