<link rel="stylesheet" href="/global/social/style.css" />
<div class="socials-wrapper">
  <button id="socialToggle" class="social-toggle-btn d-md-none">🔗</button>

  <div class="socials-bar">
    <a href="https://discord.gg/NRmeVVb6gU" target="_blank" rel="noopener noreferrer" aria-label="Discord">
      <img src="images/discord.svg" alt="Discord">
    </a>
    <a href="https://www.facebook.com/fkinggoogleit/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <img src="images/facebook.svg" alt="Facebook">
    </a>
    <a href="https://www.instagram.com/jeremyvoegele/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <img src="images/instagram.svg" alt="Instagram">
    </a>
    <a href="https://www.tiktok.com/@ceaserxl" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      <img src="images/tiktok.svg" alt="TikTok">
    </a>
    <a href="https://x.com/theceaserxl" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
      <img src="images/x.svg" alt="Twitter / X">
    </a>
    <a href="https://www.youtube.com/@ceaserxl-jv" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <img src="images/youtube.svg" alt="YouTube">
    </a>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('socialToggle');
  const socialsBar = document.querySelector('.socials-bar');

  toggleBtn.addEventListener('click', () => {
    socialsBar.classList.toggle('active');
  });
});
</script>
