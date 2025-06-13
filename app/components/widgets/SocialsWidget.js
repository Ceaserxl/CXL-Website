'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SocialsWidget() {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const socials = [
    { href: 'https://discord.gg/NRmeVVb6gU', img: '/images/icons/discord.svg', label: 'Discord' },
    { href: 'https://www.facebook.com/fkinggoogleit/', img: '/images/icons/facebook.svg', label: 'Facebook' },
    { href: 'https://www.instagram.com/jeremyvoegele/', img: '/images/icons/instagram.svg', label: 'Instagram' },
    { href: 'https://www.tiktok.com/@ceaserxl', img: '/images/icons/tiktok.svg', label: 'TikTok' },
    { href: 'https://x.com/theceaserxl', img: '/images/icons/x.svg', label: 'Twitter / X' },
    { href: 'https://www.youtube.com/@ceaserxl-jv', img: '/images/icons/youtube.svg', label: 'YouTube' }
  ];

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999
    }}>
      {isMobile && (
        <button
          onClick={() => setActive(!active)}
          style={{
            position: 'absolute',
            bottom: '-10px',
            right: '-5px',
            background: 'rgba(0, 0, 0, 0.6)',
            border: 'none',
            color: '#ffffff',
            padding: '8px 8px',
            borderRadius: '40px',
            boxShadow: '0 0 4px rgba(0, 198, 255, 0.8)',
            fontSize: '1.1rem',
            zIndex: 10000,
            transition: 'transform 0.3s ease'
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          🔗
        </button>
      )}

      <div style={{
        position: 'absolute',
        bottom: isMobile ? '-10px' : '-15px',
        right: isMobile ? (active ? '55px' : '0') : '105px',
        background: 'rgba(17, 17, 17, 0.9)',
        padding: isMobile ? '3px 12px' : '5px 15px',
        borderRadius: '40px',
        boxShadow: '0 0 5px rgba(0, 198, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        gap: '12px',
        overflow: 'hidden',
        maxWidth: isMobile ? (active ? '400px' : '0') : 'unset',
        opacity: isMobile ? (active ? 1 : 0) : 1,
        transition: 'all 0.4s ease'
      }}>
        {socials.map(({ href, img, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{ display: 'block' }}
          >
            <Image
              src={img}
              alt={label}
              width={isMobile ? 24 : 30}
              height={isMobile ? 24 : 30}
              style={{
                filter: 'drop-shadow(0 0 2px rgba(0,198,255,0.8))',
                transition: 'transform 0.4s ease, filter 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2) rotate(8deg)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 2px gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 2px rgba(0,198,255,0.8))';
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
