const header = document.getElementById('header');
const videoSection = document.getElementById('video');

window.addEventListener('scroll', () => {
  const videoTop = videoSection.offsetTop;
  const scrollPos = window.scrollY;

  if (scrollPos >= videoTop - 100) {
    header.classList.add('show-logo');
  } else {
    header.classList.remove('show-logo');
  }
});




