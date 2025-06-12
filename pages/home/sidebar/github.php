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

        echo "<ul class='list-unstyled'>";

        foreach ($repos as $repo) {
          if ($shown >= 5) break;

          $name = htmlspecialchars($repo['name']);
          $url = htmlspecialchars($repo['html_url']);
          $desc = htmlspecialchars($repo['description'] ?? 'No description');
          $stars = (int)$repo['stargazers_count'];
          $forks = (int)$repo['forks_count'];

          echo "<li class='mb-3'>";
          echo "<strong><a href='{$url}' target='_blank' class='text-white'>{$name}</a></strong><br>";
          echo "<small class='text-muted'>{$desc}</small><br>";
          echo "<span class='badge bg-secondary me-2'>★ {$stars}</span>";
          echo "<span class='badge bg-info text-dark'>Forks: {$forks}</span>";
          echo "</li>";

          $shown++;
        }

        echo "</ul>";

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
