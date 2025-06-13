'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DiscordWidget() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDiscord() {
      try {
        const res = await fetch('https://discord.com/api/guilds/328980623492644864/widget.json');
        const result = await res.json();

        if (result?.code) {
          setError('Unable to load Discord info.');
        } else {
          setData(result);
        }
      } catch {
        setError('Unable to load Discord info.');
      }
    }

    fetchDiscord();
  }, []);

  if (error) {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1.5rem', color: '#00c6ff', textAlign: 'center' }}>Discord Status</h4>
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1.5rem', color: '#00c6ff', textAlign: 'center' }}>Discord Status</h4>
        <p style={{ color: '#cccccc', textAlign: 'center' }}>Loading...</p>
      </div>
    );
  }

  const inviteLink = data.instant_invite;
  const guildName = data.name;
  const iconUrl = '/images/WGG_Logo.png';

  const ceaser = data.members.find(
    (member) => member.username.toLowerCase() === 'ceaser'
  );

  const avatar = ceaser?.avatar_url ?? '/images/default_avatar.png';
  const username = ceaser?.username ?? 'Ceaser';
  const isOnline = Boolean(ceaser);
  const statusText = isOnline ? 'Online' : 'Offline';
  const badgeColor = isOnline ? '#00c6ff' : '#ff4d4d';
  const badgeGlow = isOnline ? '0 0 10px rgba(0,198,255,0.8)' : '0 0 10px rgba(255,77,77,0.8)';

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h4 style={{ marginBottom: '1.5rem', color: '#00c6ff', textAlign: 'center' }}>Discord Status</h4>

      {/* Server Header - CENTERED */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
        gap: '0.75rem'
      }}>
        <Image src={iconUrl} alt="Guild Logo" width={40} height={40} style={{ borderRadius: '8px' }} />
        <a href={inviteLink} target="_blank" style={{ textDecoration: 'none' }}>
          <h5 style={{ margin: 0, color: '#ffffff', fontSize: '1.1rem' }}>{guildName}</h5>
        </a>
      </div>

      {/* User Status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={avatar} alt="User Avatar" width={40} height={40} style={{ borderRadius: '50%', marginRight: '0.75rem' }} />
          <strong style={{ color: '#ffffff' }}>{username}</strong>
        </div>

        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.15rem 0.5rem',
        backgroundColor: badgeColor,
        borderRadius: '6px',
        fontSize: '0.75rem',
        color: '#111111',
        boxShadow: badgeGlow,
        fontWeight: 'bold',
        minWidth: '60px',
        height: '22px',
        transition: 'all 0.3s ease'
        }}>
        {statusText}
        </div>
      </div>
    </div>
  );
}
