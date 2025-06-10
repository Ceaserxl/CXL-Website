<!-- discord.php -->
<div class="card-section text-white">
  <?php
    $json = @file_get_contents("https://discord.com/api/guilds/328980623492644864/widget.json");

    if ($json) {
      $data = json_decode($json, true);
      $ceaser = null;

      foreach ($data['members'] as $member) {
        if (strtolower($member['username']) === 'ceaser') {
          $ceaser = $member;
          break;
        }
      }

      $iconUrl = "images/WGG_Logo.png";
      $inviteLink = htmlspecialchars($data['instant_invite']);
      $guildName = htmlspecialchars($data['name']);

      // Centered Logo + Name
      echo "<div class='d-flex justify-content-center mb-3'>";
      echo   "<a href='$inviteLink' target='_blank' class='discord-link d-flex align-items-center text-decoration-none'>";
      echo     "<img src='$iconUrl' style='width:40px;height:40px;border-radius:10px;margin-right:10px;'>";
      echo     "<h5 class='mb-0'>$guildName</h5>";
      echo   "</a>";
      echo "</div>";

      // Ceaser status: left/right
      $avatar = $ceaser['avatar_url'] ?? 'images/default_avatar.png';
      $username = htmlspecialchars($ceaser['username'] ?? 'Ceaser');
      $status = $ceaser ? 'Online' : 'Offline';
      $badge = $ceaser ? 'bg-success' : 'bg-danger';

      echo "<div class='d-flex align-items-center'>";
      echo   "<div class='d-flex align-items-center'>";
      echo     "<img src='" . htmlspecialchars($avatar) . "' width='40' height='40' class='rounded-circle me-2'>";
      echo     "<strong>$username</strong>";
      echo   "</div>";
      echo   "<span class='badge $badge ms-auto'>$status</span>";
      echo "</div>";

    } else {
      echo "<p class='text-danger'>Unable to load Discord info.</p>";
    }
  ?>
</div>
