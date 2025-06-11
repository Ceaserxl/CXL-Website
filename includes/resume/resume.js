document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.animated-section');

  sections.forEach((el) => {
    const animateType = el.dataset.animate || 'fade';
    let delay = 0;

    if (el.id === 'skills-sticky' || el.closest('#skills-sticky')) {
      delay = 600;
    }

    setTimeout(() => {
      el.classList.add('visible');

      anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutSine'
      });

      if (el.id === 'skills-sticky') {
        const bars = el.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
          const score = parseInt(bar.dataset.score);
          bar.style.width = '0%';
          anime({
            targets: bar,
            width: `${score * 10}%`,
            duration: 1000,
            easing: 'easeOutQuart'
          });
        });
      }
    }, delay);
  });
});
