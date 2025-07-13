// Loader Animation
document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader');

    setTimeout(function () {
        loader.classList.add('hidden');
        setTimeout(function () {
            loader.remove();
        }, 500);
    }, 1500);
});
// Farmer & Consumer Modal
document.querySelector('.primary-btn').addEventListener('click', () => {
    showModal('farmerModal');
});

document.querySelector('.secondary-btn').addEventListener('click', () => {
    showModal('consumerModal');
});


// Header Scroll Effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    nav.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('nav a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (revealTop < windowHeight - 100) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initialize on load

// Contact Form with Fake Redirect
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('button');
    const inputs = this.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (!isValid) {
        alert('कृपया सभी फ़ील्ड भरें');
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        this.reset();

        setTimeout(() => {
            window.location.href = "#home"; // Or use "#dashboard" if you add one
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            alert('Message sent! You’ll be redirected to your dashboard.');
        }, 2000);
    }, 1500);
});

// Button Hover Effects
document.querySelectorAll('.primary-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.style.boxShadow = '0 5px 15px rgba(76, 175, 80, 0.4)';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.boxShadow = 'none';
    });
});

// Active Nav Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Set Current Year in Footer
document.getElementById('current-year').textContent = new Date().getFullYear();


// ✅ Login/Signup Modal Logic
function showModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

document.querySelector('.login-btn').addEventListener('click', () => {
    showModal('loginModal');
});

document.querySelector('.signup-btn').addEventListener('click', () => {
    showModal('signupModal');
});

// ✅ Fake Cart Popup on Order Now
document.querySelector('.secondary-btn').addEventListener('click', () => {
    const popup = document.getElementById('cart-popup');
    popup.style.display = 'block';
});
