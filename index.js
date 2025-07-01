// DOM Elements
// const contactBtn = document.getElementById('btn contact');
// const contactModal = document.getElementById('contactModal');
// const closeModal = document.getElementById('closeModal');
// const contactForm = document.getElementById('contactForm');

// Show modal
// contactBtn.addEventListener('click', () => {
//     contactModal.classList.add('active');
//     document.body.style.overflow = 'hidden'; // Prevent scrolling
// });

// Close modal
// closeModal.addEventListener('click', () => {
//     contactModal.classList.remove('active');
//     document.body.style.overflow = 'auto';
// });

// Close modal when clicking outside content
// contactModal.addEventListener('click', (e) => {
//     if (e.target === contactModal) {
//         contactModal.classList.remove('active');
//         document.body.style.overflow = 'auto';
//     }
// });

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);

    // Show confirmation (in real app you'd use AJAX)
    alert('Message sent successfully!');

    // Reset form and close modal
    contactForm.reset();
    contactModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

