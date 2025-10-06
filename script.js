console.log("Amélie Atelier — inicio cargado correctamente");

//para lo del control del sonido del vidoe 
const video = document.getElementById('heroVideo');
const soundBtn = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');

soundBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  soundIcon.textContent = video.muted ? '🔇' : '🔊';
});

// para el menu desplegable 
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Cerrar menú si se toca el overlay
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});












