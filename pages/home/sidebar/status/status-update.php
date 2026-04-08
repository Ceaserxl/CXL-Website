<?php
header('Content-Type: application/json');

$services = [
  ['name' => 'Plex',        'icon' => 'plex.svg',     'host' => '192.168.0.246', 'port' => 32400],
  ['name' => 'Seer',        'icon' => 'plex.svg',     'host' => '192.168.0.246', 'port' => 5055],
  ['name' => 'Radarr',      'icon' => 'radarr.svg',   'host' => '192.168.0.246', 'port' => 7878],
  ['name' => 'Sonarr',      'icon' => 'sonarr.svg',   'host' => '192.168.0.246', 'port' => 8989],
  ['name' => 'Deluge',      'icon' => 'deluge.svg',   'host' => '192.168.0.246', 'port' => 8112],
  ['name' => 'Discord Bot', 'icon' => 'discord.svg',  'host' => '192.168.0.246', 'port' => 32400],
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

?>