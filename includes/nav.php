<!-- includes/nav.php -->
<nav class="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="images/default_avatar.png" alt="Avatar" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; margin-right: 10px;">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto mb-2 mb-xl-0">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/Ceaserxl">GitHub</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/resume">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#contactModal">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Contact Modal -->
<div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-dark text-light">
      <div class="modal-header border-0">
        <h5 class="modal-title" id="contactModalLabel">📬 Contact</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Email:</strong> jeremy.voegele@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Ceaserxl" target="_blank" class="text-light">github.com/Ceaserxl</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jeremy-voegele-5062951b7/" target="_blank" class="text-light">linkedin.com/in/jeremy-voegele</a></p>
        <p><strong>Location:</strong> San Diego, CA</p>
      </div>
    </div>
  </div>
</div>
