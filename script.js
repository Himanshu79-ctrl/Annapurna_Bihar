// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission (replace with actual API call)
    console.log('Form Submitted:', { name, email, message });
    alert('धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।');
    this.reset();
});

// Login/Signup button functionality (demo)
document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Login functionality will be implemented in the full version.');
});

document.querySelector('.signup-btn').addEventListener('click', () => {
    alert('Signup functionality will be implemented in the full version.');
});

// Dynamic year in footer
document.querySelector('.footer-bottom p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Annapurna Bihar. All Rights Reserved.`;