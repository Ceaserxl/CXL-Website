<?php
$isRoot = isset($_SERVER['SCRIPT_NAME']) && basename($_SERVER['SCRIPT_NAME']) === 'resume.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Jeremy Voegele Resume</title>

  <!-- Stylesheets -->
  <link rel="stylesheet" href="assets/bootstrap.min.css"/>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="includes/resume/resume.css" />
  <link rel="icon" href="images/default_avatar.png" type="image/x-icon" />
</head>
<body>

  <?php include './includes/nav.php'; ?>

  <main id="mainContent" class="container my-5">
    <div class="row">
      <div class="col-lg-8">
        <?php include './includes/resume/main.php'; ?>
      </div>
      <div class="col-lg-4">
        <?php include './includes/resume/sidebar.php'; ?>
      </div>
    </div>
  </main>

  <?php include './includes/socials.php'; ?>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
  <script src="includes/resume/resume.js"></script>

</body>
</html>
