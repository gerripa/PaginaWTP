console.log("Amélie Atelier — inicio cargado correctamente");

const video = document.getElementById('heroVideo');
const soundBtn = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');

soundBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  soundIcon.textContent = video.muted ? '🔇' : '🔊';
});






