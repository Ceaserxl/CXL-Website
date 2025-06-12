'use client';

import Nav from './components/nav';
//import Socials from './components/Socials/Socials';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Nav />

      {showSplash && (
        <div id="splash-screen">
          <Image src="/images/C_Logo.png" alt="Splash Avatar" width={200} height={200} />
        </div>
      )}

      <div id="page-wrapper">
        <h1>Welcome to the Home Page!</h1>
      </div>

      {/* <Socials /> */}

      <footer className="mt-5 py-4 text-center">
        <small>&copy; {new Date().getFullYear()} Jeremy Voegele. All Rights Reserved.</small>
      </footer>

      {/* External Scripts */}
      <Script src="/assets/popper.min.js" strategy="beforeInteractive" />
      <Script src="/assets/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/anime.min.js" strategy="beforeInteractive" />
      <Script src="/assets/script.js" strategy="afterInteractive" />
    </>
  );
}
