<link rel="stylesheet" href="./pages/home/style.css" />
<div id="page-wrapper">
  <div id="mainContent" class="container my-5">
    <div class="row">
      <!-- Main Column -->
      <div class="col-md-8">
        <div class="card-section animated-section">
          <div class="hero-container animated-section">
            <img src="images/profile_pic.jpg" alt="Profile Picture" class="hero-img">
            <div class="hero-text">
              <h2 class="mb-0">Jeremy Voegele</h2>
              <p class="mb-0">IT Specialist | Developer | Veteran</p>
            </div>
          </div>
          <p>
            Welcome to my personal portfolio. I'm a U.S. Navy veteran and IT specialist with a passion for Linux systems, cloud infrastructure, and full-stack development.
            Here you'll find my work, projects, and technical journey as I transition from military service to the tech industry.
          </p>
        </div>

        <div class="card-section mt-4 animated-section">
          <?php include __DIR__ . '/timeline/timeline.php'; ?>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-md-4 animated-section">
          <?php include __DIR__ . '/sidebar/github.php'; ?>
          <?php include __DIR__ . '/sidebar/discord.php'; ?>
          <?php include __DIR__ . '/sidebar/status/status.php'; ?>
      </div>
    </div>
  </div>
</div>
