<!-- includes/nav.php -->
<link rel="stylesheet" href="/global/nav/style.css" />

<nav class="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="images/default_avatar.png" alt="Avatar" />
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto mb-2 mb-xl-0">
        <?php
          $currentPage = $_GET['page'] ?? 'home';
          $navItems = [
            ['label' => 'Home', 'page' => 'home', 'url' => '/index.php?page=home', 'external' => false],
            ['label' => 'Resume', 'page' => 'resume', 'url' => '/index.php?page=resume', 'external' => false],
            ['label' => 'GitHub', 'page' => '', 'url' => 'https://github.com/Ceaserxl', 'external' => true],
            ['label' => 'Contact', 'page' => '', 'url' => '#', 'external' => false, 'modal' => '#contactModal'],
          ];
          foreach ($navItems as $item):
            $isActive = (!$item['external'] && $item['page'] === $currentPage) ? 'active' : '';
        ?>
        <li class="nav-item">
          <a class="nav-link <?= $isActive ?>" href="<?= htmlspecialchars($item['url']) ?>"<?= !empty($item['external']) ? ' target="_blank" rel="noopener noreferrer"' : '' ?><?= !empty($item['modal']) ? ' data-bs-toggle="modal" data-bs-target="' . htmlspecialchars($item['modal']) . '"' : '' ?>><?= htmlspecialchars($item['label']) ?></a>
        </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</nav>

<!-- Contact Modal -->
<div class="modal" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true" data-bs-keyboard="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-dark text-light" style="opacity: 1; pointer-events: auto;">
      <div class="modal-header border-0">
        <h5 class="modal-title" id="contactModalLabel">📬 Contact</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Email:</strong> <a href="mailto:jeremy.voegele@gmail.com" class="text-light">jeremy.voegele@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Ceaserxl" target="_blank" rel="noopener noreferrer" class="text-light">github.com/Ceaserxl</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jeremy-voegele-5062951b7/" target="_blank" rel="noopener noreferrer" class="text-light">linkedin.com/in/jeremy-voegele</a></p>
        <p><strong>Location:</strong> San Diego, CA</p>
      </div>
    </div>
  </div>
</div>
