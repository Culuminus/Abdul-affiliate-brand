// =====================================
// TESTIMONIAL SYSTEM (CLEAN VERSION)
// =====================================



// =====================================
// LIKE SYSTEM
// =====================================

function attachLikeEvents() {
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(btn => {
        if (btn.dataset.bound === "true") return;
        btn.dataset.bound = "true";

        btn.addEventListener("click", () => {

            if (btn.classList.contains("liked")) return;

            const span = btn.querySelector("span");
            if (!span) return;

            let count = parseInt(span.textContent || "0", 10);

            span.textContent = count + 1;

            btn.classList.add("liked");

            btn.style.background = "#dcfce7";
            btn.style.color = "#15803d";
        });
    });
}

attachLikeEvents();



// =====================================
// LOAD MORE (HIDDEN TESTIMONIALS)
// =====================================

const hiddenCards = document.querySelectorAll(".hidden-card");
const loadMoreBtn = document.querySelector(".load-more-btn");

let index = 0;
const step = 10;

// hide everything at start
hiddenCards.forEach(card => {
    card.style.display = "none";
});

function showMoreTestimonials() {

    const nextIndex = index + step;

    for (let i = index; i < nextIndex && i < hiddenCards.length; i++) {
        hiddenCards[i].style.display = "block";
    }

    index = nextIndex;

    if (index >= hiddenCards.length) {
        if (loadMoreBtn) {
            loadMoreBtn.textContent = "No more testimonials";
            loadMoreBtn.disabled = true;
        }
    }
}

// initial load (first batch)
showMoreTestimonials();

if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", showMoreTestimonials);
}



// =====================================
// OPTIONAL: SMOOTH SCROLL FIX (UX)
// =====================================

if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
        setTimeout(() => {
            loadMoreBtn.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 100);
    });
}