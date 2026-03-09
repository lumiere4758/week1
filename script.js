document.addEventListener("DOMContentLoaded", () => {
    // so umm i wnat it to work as if she scrolls and her art comes out one by one
    // dont wanna add too much animations js a simple fade???
    const cards = document.querySelectorAll(".card");


    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // only open the card once its taking most of the screen 
            if (entry.isIntersecting) {
                const cover = entry.target.querySelector(".cover-image");
                if (cover) {
                    cover.classList.add("revealed");

                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        root: null,

        rootMargin: "-20% 0px -40% 0px",
        threshold: 0
    });

    cards.forEach(card => revealObserver.observe(card));
});