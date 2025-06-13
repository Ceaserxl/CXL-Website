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
    }, 2500);

    const navigateTimer = setTimeout(() => {
      router.push('/home');
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [router]);

  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-logo">
        <Image
          src="/images/C_Logo.png"
          alt="Splash Avatar"
          width={220}
          height={220}
          className="splash-image"
          priority
        />
      </div>
    </div>
  );
}
