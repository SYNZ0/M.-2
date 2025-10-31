// Scroll-based fading animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Message form submission (stores in localStorage for demo)
document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const messagesList = document.getElementById('messages-list');
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>${name}:</strong> ${message}`;
    messagesList.appendChild(newMessage);
    // In a real app, send to server; here, just display
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});