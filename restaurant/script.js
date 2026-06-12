/* =========================
   AURUM DINING - SCRIPT.JS
   ========================= */

/* ========== REVEAL ON SCROLL ========== */

const revealElements = document.querySelectorAll('.section, .dish-card, .feature-card, .testimonial, .gallery-grid img');

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ========== NAV ACTIVE ON SCROLL ========== */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* ========== SMOOTH SCROLL FIX ========== */

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {
            e.preventDefault();

            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ========== NAVBAR SCROLL EFFECT ========== */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(10,10,10,0.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "rgba(10,10,10,0.55)";
        header.style.boxShadow = "none";
    }
});

/* ========== FORM SUBMIT (FAKE RESERVATION) ========== */

const form = document.querySelector('.reservation-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const button = this.querySelector('button');
    const originalText = button.textContent;

    button.textContent = "Booking...";
    button.disabled = true;

    setTimeout(() => {
        button.textContent = "Confirmed ✔";

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            form.reset();
        }, 2000);

    }, 1500);
});

/* ========== OPTIONAL: GLASS PARALLAX LIGHT EFFECT ========== */

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glass');

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    cards.forEach(card => {
        card.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
});

/* ================= CUSTOM CURSOR ================= */

const isDesktop =
window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if(isDesktop){

    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');

    window.addEventListener('mousemove',(e)=>{

        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';

        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';

    });

}

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    dot.style.left = x + 'px';
    dot.style.top = y + 'px';

    ring.style.left = x + 'px';
    ring.style.top = y + 'px';
});

/* hover effect on interactive elements */

const hoverTargets = document.querySelectorAll('a, button, .dish-card, .feature-card');

hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.classList.add('cursor-hover');
    });

    el.addEventListener('mouseleave', () => {
        ring.classList.remove('cursor-hover');
    });
});

/* ========== MOBILE MENU ========== */

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

/* close menu after click */

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});