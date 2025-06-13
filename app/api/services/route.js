import net from 'net';

const services = [
  { name: 'Plex', icon: 'plex.svg', host: 'ceaserxl.betty.bysh.me', port: 6088 },
  { name: 'Discord Bot', icon: 'discord.svg', host: 'ceaserxl.betty.bysh.me', port: 6088 },
  { name: 'Deluge', icon: 'deluge.svg', host: 'ceaserxl.betty.bysh.me', port: 6950 },
  { name: 'Radarr', icon: 'radarr.svg', host: 'ceaserxl.betty.bysh.me', port: 10421 },
  { name: 'Sonarr', icon: 'sonarr.svg', host: 'ceaserxl.betty.bysh.me', port: 14391 },
];

function checkPort(host, port, timeout = 1000) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let status = 'Offline';

    socket.setTimeout(timeout);
    socket.on('connect', () => {
      status = 'Online';
      socket.destroy();
    });
    socket.on('timeout', () => socket.destroy());
    socket.on('error', () => {});
    socket.on('close', () => resolve(status));

    socket.connect(port, host);
  });
}

export async function GET() {
  const results = await Promise.all(
    services.map(async (service) => ({
      ...service,
      status: await checkPort(service.host, service.port),
    }))
  );

  return Response.json(results);
}
