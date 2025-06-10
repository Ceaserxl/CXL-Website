<?php
$isRoot = isset($_SERVER['SCRIPT_NAME']) && basename($_SERVER['SCRIPT_NAME']) === 'index.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Jeremy Voegele Portfolio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" href="images/default_avatar.png" type="image/x-icon" />
</head>
<body>

<?php if ($isRoot): ?>
  <div id="splash-screen">
    <img id="splash-avatar" src="images/default_avatar.png" alt="Splash Avatar">
  </div>
<?php endif; ?>

<?php include './includes/nav.php'; ?>

<div id="mainContent" style="display: none;" class="container my-5">
  <div class="row">
    <!-- Main Column -->
    <div class="col-md-8">
      <!-- Hero Section -->
      <div class="card-section">
        <div class="hero-container">
          <img src="images/profile_pic.jpg" alt="Profile Picture" class="hero-img">
          <div class="hero-text">
            <h2 class="mb-0">Jeremy Voegele</h2>
            <p class="text-muted mb-0">IT Specialist | Developer | Veteran</p>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>Sed ut perspiciatis unde omnis iste natus error...</p>
        <p>Integer facilisis, justo nec ullamcorper pulvinar...</p>
      </div>

      <!-- Timeline Section -->
      <!-- <div class="card-section mt-4">
        <?php include './includes/timeline/timeline.php'; ?>
      </div> -->
    </div>

    <!-- Sidebar -->
    <div class="col-md-4">
      <?php include './includes/github.php'; ?>
      <?php include './includes/discord.php'; ?>
      <?php include './includes/status/status.php'; ?>
    </div>
  </div>
</div>

<!-- Socials Bar (Horizontal) -->
<?php include './includes/socials.php'; ?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
  window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      setTimeout(() => {
        splash.style.transition = 'opacity 0.8s ease-out';
        splash.style.opacity = '0';
        setTimeout(() => {
          splash.style.display = 'none';
          document.getElementById('mainContent')?.style?.removeProperty('display');
        }, 800);
      }, 3000);
    }
  });
</script>
</body>
</html>
