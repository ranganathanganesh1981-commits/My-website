// Mobile menu
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Order button
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you! Your order request has been received.");
    });
});