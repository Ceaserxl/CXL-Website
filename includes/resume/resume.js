document.addEventListener('DOMContentLoaded', () => {
  const sections = Array.from(document.querySelectorAll('.animated-section'));

  sections.forEach((el, i) => {
    const delay = i * 300;

    setTimeout(() => {
      el.classList.add('visible');

      anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutSine'
      });
    }, delay);
  });
});
