document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');

  if (splash) {
    setTimeout(() => {
      splash.style.transition = 'opacity 0.8s ease-out';
      splash.style.opacity = '0';

      setTimeout(() => {
        splash.style.display = 'none';
      }, 800);
    }, 1000);
  }
});
