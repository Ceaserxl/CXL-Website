<!-- GitHub Projects -->
<div class="card-section">
  <h4 class="mb-3">GitHub Projects</h4>
  <?php
    $username = "Ceaserxl";
    $cacheFile = __DIR__ . '/cache/github_cache.html';
    $cacheTime = 3600; // 1 Hour

    if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
      echo file_get_contents($cacheFile);
    } else {
      ob_start();

      $apiUrl = "https://api.github.com/users/$username/repos?sort=updated";
      $context = stream_context_create([
        'http' => [
          'method' => 'GET',
          'header' => "User-Agent: PHP\r\n"
        ]
      ]);

      $response = @file_get_contents($apiUrl, false, $context);
      if ($response) {
        $repos = json_decode($response, true);
        $shown = 0;

        foreach ($repos as $repo) {
          if ($shown >= 5) break;

          echo "<div class='mb-4'>";
          echo "<strong><a href='" . htmlspecialchars($repo['html_url']) . "' target='_blank' class='text-white'>" . htmlspecialchars($repo['name']) . "</a></strong><br>";
          echo "<small style='color: white !important;'>" . htmlspecialchars($repo['description'] ?? 'No description') . "</small><br>";
          echo "<span class='badge bg-secondary me-1'>★ " . $repo['stargazers_count'] . "</span>";
          echo "<span class='badge bg-info text-dark'>Forks: " . $repo['forks_count'] . "</span>";
          echo "</div>";

          $shown++;
        }

        if (!is_dir(dirname($cacheFile))) {
          mkdir(dirname($cacheFile), 0755, true);
        }
        file_put_contents($cacheFile, ob_get_contents());
      } else {
        echo "<p class='text-danger'>Could not load GitHub data.</p>";
      }

      ob_end_flush();
    }
  ?>
</div>
