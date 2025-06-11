<?php
$isRoot = isset($_SERVER['SCRIPT_NAME']) && basename($_SERVER['SCRIPT_NAME']) === 'index.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Jeremy Voegele Portfolio</title>

  <!-- Stylesheets -->
  <link rel="stylesheet" href="assets/bootstrap.min.css" />
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" href="images/default_avatar.png" type="image/x-icon" />
</head>
<body>

<?php if ($isRoot): ?>
  <div id="splash-screen">
    <img id="splash-avatar" src="images/C_Logo.png" alt="Splash Avatar">
  </div>
<?php endif; ?>

<?php include './includes/nav.php'; ?>

<div id="mainContent" class="container my-5" style="opacity: 0;">
  <div class="row">
    <!-- Main Column -->
    <div class="col-md-8">
      <div class="card-section">
        <div class="hero-container">
          <img src="images/profile_pic.jpg" alt="Profile Picture" class="hero-img">
          <div class="hero-text">
            <h2 class="mb-0">Jeremy Voegele</h2>
            <p class="text-muted mb-0">IT Specialist | Developer | Veteran</p>
          </div>
        </div>
        <p>Welcome to my personal portfolio. I'm a U.S. Navy veteran and IT specialist with a passion for Linux systems, cloud infrastructure, and full-stack development. Here you'll find my work, projects, and technical journey as I transition from military service to the tech industry.</p>
      </div>

      <!-- Optional Future Timeline Section -->
      <!--
      <div class="card-section mt-4">
        <?php include './includes/timeline/timeline.php'; ?>
      </div>
      -->
    </div>

    <!-- Sidebar -->
    <div class="col-md-4">
      <?php include './includes/github.php'; ?>
      <?php include './includes/discord.php'; ?>
      <?php include './includes/status/status.php'; ?>
    </div>
  </div>
</div>

<?php include './includes/socials.php'; ?>
<?php include './includes/footer.php'; ?>

<!-- Scripts -->
<script src="assets/bootstrap.bundle.min.js"></script>
<script>
  window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('mainContent');

    if (splash && mainContent) {
      // Wait for pulse animation (~3s for 2 cycles of 1.5s each)
      setTimeout(() => {
        splash.style.transition = 'opacity 0.8s ease-out';
        splash.style.opacity = '0';

        setTimeout(() => {
          splash.style.display = 'none';
          mainContent.style.transition = 'opacity 0.8s ease-in';
          mainContent.style.opacity = '1';
        }, 800);
      }, 3000);
    }
  });
</script>

</body>
</html>
