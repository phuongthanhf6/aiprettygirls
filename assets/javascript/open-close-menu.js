function toggleMenu() {
    const menu = document.querySelector(".menu");
    const menuToggle = document.querySelector(".menu-toggle");

    menu.classList.toggle("show"); // Toggle menu display
    menuToggle.classList.toggle("active"); // Toggle active class for animation
}
