'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Splash() {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2500); // One full pulse cycle

    const navigateTimer = setTimeout(() => {
      router.push('/home');
    }, 3000); // After fade

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [router]);

  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      <div
        style={{
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 0 30px rgba(0, 198, 255, 0.8), 0 0 60px rgba(0, 198, 255, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'pulseGlow 1.5s ease-in-out infinite',
        }}
      >
        <Image
          src="/images/C_Logo.png"
          alt="Splash Avatar"
          width={220}
          height={220}
          style={{
            objectFit: 'cover',
            borderRadius: '50%',
          }}
          priority
        />
      </div>

      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 30px rgba(0, 198, 255, 0.8), 0 0 60px rgba(0, 198, 255, 0.5);
          }
          50% {
            transform: scale(1.07);
            box-shadow: 0 0 45px rgba(0, 198, 255, 1), 0 0 85px rgba(0, 198, 255, 0.6);
          }
        }
      `}</style>
    </div>
  );
}
