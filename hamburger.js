  const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.buttons');
const body = document.body;


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // X animation
  menu.classList.toggle('show');        // open/close menu
  body.classList.toggle('menu-open');   // prevent background scroll
});

// prevent scrolling the body when touching outside the slider
document.addEventListener('touchmove', function(e) {
  if (!menu.contains(e.target) && body.classList.contains('menu-open')) {
    e.preventDefault();
  }
}, { passive: false });