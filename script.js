// ==========================================
// Typing Effect for Hero Tagline
// ==========================================

const typedTextElement = document.getElementById("typedText");
const phrases = [
    "Python Developer",
    "Full-Stack Engineer",
    "Arduino Enthusiast",
    "Problem Solver",
    "Creative Coder",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    if (!typedTextElement) return;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // Remove characters
        typedTextElement.textContent = currentPhrase.substring(
            0,
            charIndex - 1
        );
        charIndex--;
        typingSpeed = 50;
    } else {
        // Add characters
        typedTextElement.textContent = currentPhrase.substring(
            0,
            charIndex + 1
        );
        charIndex++;
        typingSpeed = 100;
    }

    // When word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of word
        typingSpeed = 2000;
        isDeleting = true;
    }
    // When word is fully deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect after page loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

// ==========================================
// GitHub Stats
// ==========================================

const githubStats = document.querySelector(".github-stats");

const githubReadmeStats = document.createElement("img");
githubReadmeStats.src =
    "https://github-readme-stats.vercel.app/api?username=HimC29&show_icons=true&hide_border=true&bg_color=0a0b0d&title_color=22d3ee&icon_color=22d3ee&text_color=f0f2f5";
githubReadmeStats.onload = () => githubStats.appendChild(githubReadmeStats);
githubReadmeStats.onerror = () =>
    console.error("Failed to load Github README stats.");

const githubStreakStats = document.createElement("img");
githubStreakStats.src =
    "https://nirzak-streak-stats.vercel.app/?user=HimC29&hide_border=true&background=0a0b0d&ring=22d3ee&fire=22d3ee&currStreakLabel=22d3ee&sideLabels=22d3ee&currStreakNum=f0f2f5&sideNums=f0f2f5";
githubStreakStats.onload = () => githubStats.appendChild(githubStreakStats);
githubStreakStats.onerror = () =>
    console.error("Failed to load Github Streak stats.");

// ==========================================
// Scroll Animations (Fade In on Scroll)
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));
});

// ==========================================
// Smooth Scroll & Active Nav Links
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    // Set home as active on page load
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) {
        homeLink.classList.add("active");
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Update active nav link on scroll
    const sections = document.querySelectorAll("#home, #skills, #projects");

    window.addEventListener("scroll", () => {
        let current = "home"; // Default to home

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Changed from -100 to -300 so nav highlights sooner
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

// ==========================================
// Navbar Scroll Effect
// ==========================================

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // Add background when scrolled
    if (currentScroll > 50) {
        navbar.style.background = "rgba(10, 11, 13, 0.95)";
        navbar.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.3)";
    } else {
        navbar.style.background = "rgba(10, 11, 13, 0.85)";
        navbar.style.boxShadow = "none";
    }

    lastScroll = currentScroll;
});
