const hamburger = document.getElementById('hamburger');
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');
const dropdown = document.querySelector('.mobile-link.dropdown')

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle('show');
    const isOpen = mobileMenu.classList.contains('show');
    hamburgerIcon.src = isOpen ? "assets/cross-icon.png" : "assets/hamburger-icon.png";
});

dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
});
