<div id="skills-sticky" class="card-section resume-section animated-section" data-animate="bounce-bars">
  <h4 class="mb-3">🛠️ Skills <span class="text-muted">(Rated 1–10)</span></h4>

  <?php
  $skills = [
    ['Linux (Ubuntu, Debian)', 9],
    ['Windows Server / Active Directory', 8],
    ['Networking (DNS, VPN, VLANs)', 8],
    ['AWS / Proxmox / Cloud Infra', 7],
    ['Python / Bash / Scripting', 9],
    ['MySQL / Backup & DB Ops', 7],
    ['Security+ / System Hardening', 8],
    ['Git / Docker / RClone', 8],
    ['Microsoft Office Tools', 8],
    ['Forklift / Equipment Ops', 10],
  ];
  foreach ($skills as [$label, $score]): ?>
    <div class="skill-rating mb-3">
      <div class="d-flex justify-content-between align-items-center mb-1">
        <strong><?= $label ?></strong>
        <span class="badge bg-success"><?= $score ?>/10</span>
      </div>
      <div class="progress bg-dark rounded-pill" style="height: 10px;">
        <div class="progress-bar bg-success rounded-pill" role="progressbar" style="width: <?= $score * 10 ?>%;"></div>
      </div>
    </div>
  <?php endforeach; ?>
</div>
