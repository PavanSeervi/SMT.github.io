document.addEventListener("DOMContentLoaded", function () {
    // Scroll to the product section when "Explore Now" button is clicked
    const exploreBtn = document.getElementById("explore-btn");
    const categoriesSection = document.getElementById("categories-section");

    if (exploreBtn && categoriesSection) {
        exploreBtn.addEventListener("click", function () {
            categoriesSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Smooth scroll for the "Product" link
    const productCategoriesLink = document.getElementById("product-categories-link");
    if (productCategoriesLink && categoriesSection) {
        productCategoriesLink.addEventListener("click", function (event) {
            event.preventDefault();
            categoriesSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Smooth scroll for the "Cart" link
    const cartLink = document.getElementById("cart-link");
    const cartSection = document.getElementById("cart");

    if (cartLink && cartSection) {
        cartLink.addEventListener("click", function (event) {
            event.preventDefault();
            cartSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Smooth scroll for the "Contact" link with a slower transition
    const contactLink = document.getElementById("contact-link");
    const contactSection = document.getElementById("contact-section");

    if (contactLink && contactSection) {
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            setTimeout(function () {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }, 100); // 100ms delay to slow down the transition
        });
    }

    // Smooth scroll for the "About Us" link with a slower transition
    const aboutLink = document.getElementById("about-link");
    const aboutSection = document.getElementById("about-section");

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault();
            setTimeout(function () {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }, 100); // Adjust delay here to match the speed
        });
    }

    // Implement left and right arrow functionality for product slider
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const categoriesGrid = document.querySelector(".categories-grid");

    let currentScrollPosition = 0;
    const scrollAmount = 300; // Adjust the scroll amount as needed

    function scrollToNext() {
        currentScrollPosition += scrollAmount;
        if (currentScrollPosition > categoriesGrid.scrollWidth - categoriesGrid.clientWidth) {
            currentScrollPosition = categoriesGrid.scrollWidth - categoriesGrid.clientWidth;
        }
        categoriesGrid.scrollTo({
            left: currentScrollPosition,
            behavior: "smooth"
        });
    }

    function scrollToPrevious() {
        currentScrollPosition -= scrollAmount;
        if (currentScrollPosition < 0) {
            currentScrollPosition = 0;
        }
        categoriesGrid.scrollTo({
            left: currentScrollPosition,
            behavior: "smooth"
        });
    }

    if (leftArrow && rightArrow && categoriesGrid) {
        rightArrow.addEventListener("click", scrollToNext);
        leftArrow.addEventListener("click", scrollToPrevious);
    }
});
