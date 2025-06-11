<?php
header('Content-Type: application/json');

$services = [
  ['name' => 'Plex',        'icon' => 'plex.svg',     'host' => 'ceaserxl.betty.bysh.me', 'port' => 6088],
  ['name' => 'Discord Bot', 'icon' => 'discord.svg',  'host' => 'ceaserxl.betty.bysh.me', 'port' => 6088],
  ['name' => 'Deluge',      'icon' => 'deluge.svg',   'host' => 'ceaserxl.betty.bysh.me', 'port' => 6950],
  ['name' => 'Radarr',      'icon' => 'radarr.svg',   'host' => 'ceaserxl.betty.bysh.me', 'port' => 10421],
  ['name' => 'Sonarr',      'icon' => 'sonarr.svg',   'host' => 'ceaserxl.betty.bysh.me', 'port' => 14391],
];

function isOnline($host, $port, $timeout = 1) {
  $conn = @fsockopen($host, $port, $errno, $errstr, $timeout);
  if ($conn) { fclose($conn); return true; }
  return false;
}

foreach ($services as &$service) {
  $service['status'] = isOnline($service['host'], $service['port']) ? 'online' : 'offline';
}

echo json_encode($services);
