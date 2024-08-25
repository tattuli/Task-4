document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  burgerMenu.addEventListener("click", () => {
    mobileNav.style.display =
      mobileNav.style.display === "none" || !mobileNav.style.display
        ? "block"
        : "none";
  });
});
