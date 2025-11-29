/* ------------------------------
   1. Typing Animation
------------------------------ */
const text = "Web Developer | Designer | Creator";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;

/* ------------------------------
   2. Scroll Animations
------------------------------ */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

/* ------------------------------
   3. Smooth Scrolling for Navbar
------------------------------ */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

/* ------------------------------
   4. Back-to-Top Button
------------------------------ */
const topBtn = document.createElement("div");
topBtn.innerHTML = "↑";
topBtn.id = "backToTop";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topBtn.style.opacity = 1;
        topBtn.style.pointerEvents = "all";
    } else {
        topBtn.style.opacity = 0;
        topBtn.style.pointerEvents = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ------------------------------
   5. Neon Glow Hover (Cards)
------------------------------ */
document.querySelectorAll(".project-card, .cert-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });
});

/* ------------------------------
   6. Mobile Menu Toggle
------------------------------ */
const menuBtn = document.createElement("div");
menuBtn.id = "menuBtn";
menuBtn.innerHTML = "☰";
document.querySelector("header").appendChild(menuBtn);

const nav = document.querySelector("header nav");

menuBtn.onclick = () => {
    nav.classList.toggle("open");
};
