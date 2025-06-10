<div id="splash-screen">
  <img id="splash-avatar" src="images/default_avatar.png" alt="Splash Avatar">
</div>

<script>
  window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    splash.style.transition = 'opacity 0.8s ease-out';
    splash.style.opacity = '0';
    setTimeout(() => splash.style.display = 'none', 800);
    document.getElementById('mainContent')?.style?.removeProperty('display');
  });
</script>
