// Initialize Lucide Icons
lucide.createIcons();// css 

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Effects (Fade in elements as they enter viewport)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all elements that need to fade in
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Ensure immediate visibility for above-the-fold content
    // We add a tiny delay to allow CSS to load cleanly
    setTimeout(() => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // If the element is within the viewport on load
            if (rect.top <= window.innerHeight) {
                el.classList.add('visible');
            } else {
                observer.observe(el);
            }
        });
    }, 100);
});
