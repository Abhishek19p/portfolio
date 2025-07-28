// scripts.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Message sent!");
});
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 60 },
    size: { value: 2 },
    move: { enable: true, speed: 1 },
    opacity: { value: 0.3 },
    color: { value: "#ffffff" },
    links: {
      enable: true,
      color: "#cccccc",
      distance: 100,
      opacity: 0.2
    }
  }
});
