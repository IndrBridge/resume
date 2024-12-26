// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Calculate and update age
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// Update age in the DOM
function updateAge() {
    const birthDate = '1997-02-24'; // Your birthday in YYYY-MM-DD format
    const ageElement = document.getElementById('age');
    if (ageElement) {
        ageElement.textContent = calculateAge(birthDate);
    }
}

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize age on page load
document.addEventListener('DOMContentLoaded', updateAge);

// Mobile Navigation
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

function toggleMobileNav() {
    body.classList.toggle('nav-open');
    navLinks.classList.toggle('active');
    const isOpen = body.classList.contains('nav-open');
    mobileNavToggle.setAttribute('aria-expanded', isOpen);
}

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('nav-open');
        navLinks.classList.remove('active');
    });
});

mobileNavToggle.addEventListener('click', toggleMobileNav);

// Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
    if (body.classList.contains('nav-open') && 
        !e.target.closest('.nav-links') && 
        !e.target.closest('.mobile-nav-toggle')) {
        toggleMobileNav();
    }
});