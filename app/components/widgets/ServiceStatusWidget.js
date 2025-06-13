'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ServiceStatusWidget() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch('/api/services');
        const data = await res.json();
        setServices(data);
      } catch {
        setError('Failed to load service statuses.');
      }
    }

    fetchStatus();
  }, []);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h4 style={{ marginBottom: '1.5rem', color: '#00c6ff', textAlign: 'center' }}>Service Status</h4>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {!error && services.map((service) => {
        const badgeColor = service.status === 'Online' ? '#00c6ff' : '#ff4d4d';
        const badgeGlow = service.status === 'Online'
          ? '0 0 10px rgba(0,198,255,0.8)'
          : '0 0 10px rgba(255,77,77,0.8)';

        return (
          <div key={service.name} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={`/images/icons/${service.icon}`}
                alt={`${service.name} icon`}
                width={30}
                height={30}
                style={{ borderRadius: '6px', marginRight: '0.75rem' }}
              />
              <strong style={{ color: '#ffffff' }}>{service.name}</strong>
            </div>

            <div style={{
              padding: '0.15rem 0.5rem',
              backgroundColor: badgeColor,
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: '#111111',
              boxShadow: badgeGlow,
              fontWeight: 'bold',
              minWidth: '60px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}>
              {service.status}
            </div>
          </div>
        );
      })}
    </div>
  );
}
