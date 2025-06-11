<?php
// Check if on the root page (no ?page parameter)
$isRoot = !isset($_GET['page']);

// Determine which page to load, default to 'home'
$page = $_GET['page'] ?? 'home';

// Whitelist of allowed pages
$allowedPages = ['home', 'resume'];

// Validate requested page, fallback to 'home' if invalid
if (!in_array($page, $allowedPages)) {
    $page = 'home';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Jeremy Voegele Portfolio</title>

  <!-- Stylesheets -->
  <link rel="stylesheet" href="assets/bootstrap.min.css"/>
  <link rel="stylesheet" href="/style.css" />
  <link rel="icon" href="images/default_avatar.png" type="image/x-icon" />
</head>
<body>

  <div id="page-wrapper">
    <?php include './global/nav/nav.php'; ?>
    <?php if ($isRoot): ?>
      <div id="splash-screen">
        <img id="splash-avatar" src="images/C_Logo.png" alt="Splash Avatar">
      </div>
    <?php endif; ?>

    <?php include "./pages/{$page}/index.php"; ?>
    <?php include './global/social/socials.php'; ?>
  </div>

  <footer class="mt-5 py-4 text-center">
    <small>&copy; <?php echo date("Y"); ?> Jeremy Voegele. All Rights Reserved.</small>
  </footer>

  <!-- Scripts at end of body for better loading -->
  <script src="./assets/popper.min.js"></script>
  <script src="./assets/bootstrap.bundle.min.js"></script>
  <script src="./assets/anime.min.js"></script>
  <script src="./assets/script.js"></script>
</body>
</html>