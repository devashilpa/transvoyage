document.addEventListener("DOMContentLoaded", function () {

    // Counter Animation
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const updateCounter = () => {

            const increment = target / 50;

            count += increment;

            if (count < target) {

                counter.innerText = Math.ceil(count) + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }
        };

        updateCounter();
    });


    // Navbar Background on Scroll
    window.addEventListener("scroll", function () {

        const navbar = document.querySelector(".navbar");

        if (window.scrollY > 50) {

            navbar.style.background = "#0A2540";

        } else {

            navbar.style.background = "rgba(10,37,64,.95)";
        }

    });


    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

        });

    });

});