document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            if (this.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Smooth animation for Explore button
    const exploreBtn = document.getElementById('explore-btn');
    exploreBtn.addEventListener('click', function () {
        document.querySelector('#categories-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Additional animation effect for buttons
    const animatedButtons = document.querySelectorAll('#explore-btn, .nav-link');
    animatedButtons.forEach(btn => {
        btn.addEventListener('mouseover', function () {
            this.classList.add('animated');
        });
        btn.addEventListener('mouseout', function () {
            this.classList.remove('animated');
        });
    });
});
