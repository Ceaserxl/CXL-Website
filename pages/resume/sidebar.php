<div id="skills-sticky" class="card-section animated-section" data-animate="bounce-bars">
  <h4 class="mb-3 text-center">🛠️ Skills</h4>
  
  <?php
  $skills = [
    ['Linux (Ubuntu, Debian)', 9],
    ['Windows Server / Active Directory', 8],
    ['Networking', 8],
    ['AWS / Cloud', 7],
    ['Python / Bash / Scripting', 9],
    ['SQL / DB Ops', 7],
    ['Security+ / System Hardening', 8],
    ['Git / Docker / RClone', 8],
    ['Microsoft Office Tools', 8],
    ['Forklift / Equipment Ops', 10],
    ['Schematic / Diagram Reading', 9],
    ['Team Work / Project Management', 8],
    ['Communication / Documentation', 9],
    ['Problem Solving / Troubleshooting', 9],
    ['Adaptability / Learning', 10],
    ['Customer Service', 8],
    ['Time Management', 9],
    ['Attention to Detail', 9],
    ['Leadership / Mentoring', 8]
  ];

  foreach ($skills as [$label, $score]):
    $width = $score * 10;
  ?>
    <div class="xp-bar mb-2 position-relative">
      <div class="xp-fill" style="--target-width: <?= $width ?>%;"></div>
      <div class="xp-text">
        <span class="xp-label"><?= htmlspecialchars($label) ?></span>
        <span class="xp-score"><?= $score ?>/10</span>
      </div>
    </div>
  <?php endforeach; ?>
</div>
