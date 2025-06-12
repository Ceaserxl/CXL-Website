<!-- GitHub Projects -->
<div class="card-section">
  <h4 class="mb-3">GitHub Projects</h4>
  <?php
    $username = "Ceaserxl";
    $cacheFile = __DIR__ . '/cache/github_cache.html';
    $cacheTime = 3600; // 1 hour

    if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
      echo file_get_contents($cacheFile);
    } else {
      ob_start();

      $apiUrl = "https://api.github.com/users/$username/repos?sort=updated&per_page=3";
      $context = stream_context_create([
        'http' => [
          'method' => 'GET',
          'header' => "User-Agent: PHP\r\n"
        ]
      ]);

      $response = @file_get_contents($apiUrl, false, $context);
      if ($response) {
        $repos = json_decode($response, true);
        $total = count($repos);

        foreach ($repos as $index => $repo) {
          $marginClass = ($index == $total - 1) ? 'mb-0' : 'mb-4';

          echo "<div class='{$marginClass}'>";
          echo "<h5><a href='" . htmlspecialchars($repo['html_url']) . "' target='_blank' class='text-white text-decoration-underline'>" . htmlspecialchars($repo['name']) . "</a></h5>";
          echo "<p class='mb-1 text-white'>" . htmlspecialchars($repo['description'] ?? 'No description provided') . "</p>";

          // Get latest commit (included in repo object to avoid extra requests if using GraphQL or GitHub API v4)
          $commitsUrl = "https://api.github.com/repos/$username/" . $repo['name'] . "/commits?per_page=1";
          $commitResp = @file_get_contents($commitsUrl, false, $context);
          
          if ($commitResp) {
            $commits = json_decode($commitResp, true);
            if (!empty($commits)) {
              $commit = $commits[0];
              $commitMsg = htmlspecialchars($commit['commit']['message']);
              $commitDate = date('Y-m-d H:i', strtotime($commit['commit']['committer']['date']));
              $commitUrl = htmlspecialchars($commit['html_url']);

              echo "<p class='mb-2 text-white small'>Latest commit: <a href='{$commitUrl}' target='_blank' class='text-white text-decoration-underline'>{$commitMsg}</a> on {$commitDate}</p>";
            } else {
              echo "<p class='mb-2 text-white small'>No recent commits found.</p>";
            }
          } else {
            echo "<p class='mb-2 text-white small'>Could not load commits.</p>";
          }

          // Stars & Forks
          echo "<div>";
          echo "<span class='badge bg-secondary me-2'>★ {$repo['stargazers_count']}</span>";
          echo "<span class='badge bg-info text-dark'>Forks: {$repo['forks_count']}</span>";
          echo "</div>";

          echo "</div>";
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
