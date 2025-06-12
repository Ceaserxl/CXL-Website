<?php
// Detect AJAX request
$isAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH'])
          && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';

$page = $_GET['page'] ?? 'home';
$allowedPages = ['home', 'resume'];

if (!in_array($page, $allowedPages)) {
    $page = 'home';
}

if ($isAjax) {
    include "./pages/{$page}/index.php";
    exit;
}

$isRoot = !isset($_GET['page']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Jeremy Voegele Portfolio</title>

  <link rel="stylesheet" href="assets/bootstrap.min.css"/>
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" href="images/default_avatar.png" type="image/x-icon" />
</head>
<body>
  <?php include './global/nav/nav.php'; ?>

  <?php if ($isRoot): ?>
    <div id="splash-screen">
      <img id="splash-avatar" src="images/C_Logo.png" alt="Splash Avatar" />
    </div>
  <?php endif; ?>

  <div id="page-wrapper">
    <?php include "./pages/{$page}/index.php"; ?>
  </div>

  <?php include './global/social/socials.php'; ?>

  <footer class="mt-5 py-4 text-center">
    <small>&copy; <?php echo date("Y"); ?> Jeremy Voegele. All Rights Reserved.</small>
  </footer>
  
  <script src="./assets/popper.min.js"></script>
  <script src="./assets/bootstrap.bundle.min.js"></script>
  <script src="./assets/anime.min.js"></script>
  <script src="./assets/script.js"></script>
  
</body>
</html>
