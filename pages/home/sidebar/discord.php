<div class="card-section text-white">
  <?php
    $json = @file_get_contents("https://discord.com/api/guilds/328980623492644864/widget.json");

    if ($json) {
      $data       = json_decode($json, true);
      $ceaser     = null;
      $inviteLink = htmlspecialchars($data['instant_invite'], ENT_QUOTES);
      $guildName  = htmlspecialchars($data['name'], ENT_QUOTES);
      $iconUrl    = "images/WGG_Logo.png";

      // find Ceaser
      foreach ($data['members'] as $member) {
        if (strtolower($member['username']) === 'ceaser') {
          $ceaser = $member;
          break;
        }
      }

      // header: logo + guild name
      echo '<div class="d-flex justify-content-center mb-3">';
      echo   '<a href="' . $inviteLink . '" target="_blank" class="d-flex align-items-center text-decoration-none">';
      echo     '<img src="' . $iconUrl . '" alt="Guild Logo" class="rounded" width="40" height="40">';
      echo     '<h5 class="mb-0 ms-2 text-white">' . $guildName . '</h5>';
      echo   '</a>';
      echo '</div>';

      // Ceaser status
      $avatar     = htmlspecialchars($ceaser['avatar_url'] ?? 'images/default_avatar.png', ENT_QUOTES);
      $username   = htmlspecialchars($ceaser['username'] ?? 'Ceaser', ENT_QUOTES);
      $isOnline   = (bool) $ceaser;
      $statusText = $isOnline ? 'Online' : 'Offline';
      $badgeClass = $isOnline ? 'bg-success' : 'bg-danger';

      echo '<div class="d-flex align-items-center">';
      echo   '<div class="d-flex align-items-center">';
      echo     '<img src="' . $avatar . '" alt="User Avatar" class="rounded-circle me-2" width="40" height="40">';
      echo     '<strong>' . $username . '</strong>';
      echo   '</div>';
      echo   '<span class="badge ' . $badgeClass . ' ms-auto">' . $statusText . '</span>';
      echo '</div>';

    } else {
      echo '<p class="text-danger">Unable to load Discord info.</p>';
    }
  ?>
</div>
