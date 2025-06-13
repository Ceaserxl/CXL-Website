'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/home' },
    { label: 'Resume', href: '/resume' },
    { label: 'GitHub', href: 'https://github.com/Ceaserxl', external: true },
  ];

  const [hovered, setHovered] = useState(null);
  const [logoHover, setLogoHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  // ✅ Now place conditional rendering AFTER all hooks
  if (pathname === '/') return null;

  const getLinkStyle = (isActive, isHover) => ({
    color: isActive ? '#00c6ff' : isHover ? '#ffd700' : '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: isActive ? 'bold' : 'normal',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    borderBottom: isActive ? '2px solid #00c6ff' : '2px solid transparent',
    textShadow: isHover ? '0 0 10px rgba(255, 215, 0, 0.8)' : 'none',
  });

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <div
            className={`${styles.logo} ${logoHover ? styles.logoHover : styles.logoNormal}`}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <Image src="/images/C_Logo.png" alt="Logo" width={40} height={40} style={{ borderRadius: '50%', cursor: 'pointer' }} />
          </div>
        </Link>

        {!isMobile && (
          <div className={styles.links}>
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              const isHover = hovered === idx;
              const linkProps = {
                style: getLinkStyle(isActive, isHover),
                onMouseEnter: () => setHovered(idx),
                onMouseLeave: () => setHovered(null),
              };
              if (item.external) {
                return <Link key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" {...linkProps}>{item.label}</Link>;
              }
              return <Link key={item.href} href={item.href} {...linkProps}>{item.label}</Link>;
            })}

            <div style={getLinkStyle(false, hovered === 'contact')} onMouseEnter={() => setHovered('contact')} onMouseLeave={() => setHovered(null)} onClick={() => setShowModal(true)}>Contact</div>
          </div>
        )}

        {isMobile && (
          <div className={styles.hamburger} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {[...Array(3)].map((_, i) => <div key={i} className={styles.hamburgerBar} />)}
          </div>
        )}
      </nav>

      {isMobile && (
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuVisible : styles.mobileMenuHidden}`}>
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            const isHover = hovered === idx;
            const linkProps = {
              style: getLinkStyle(isActive, isHover),
              onMouseEnter: () => setHovered(idx),
              onMouseLeave: () => setHovered(null),
              onClick: () => setIsMobileMenuOpen(false),
            };
            if (item.external) {
              return <Link key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" {...linkProps}>{item.label}</Link>;
            }
            return <Link key={item.href} href={item.href} {...linkProps}>{item.label}</Link>;
          })}

          <div style={getLinkStyle(false, hovered === 'contact')} onMouseEnter={() => setHovered('contact')} onMouseLeave={() => setHovered(null)} onClick={() => { setIsMobileMenuOpen(false); setShowModal(true); }}>Contact</div>
        </div>
      )}

      {showModal && (
        <div className={styles.contactModalOverlay}>
          <div className={styles.contactModal}>
            <h2>Contact Information</h2>
            <p>Email: ceaserxl@example.com</p>
            <p>Phone: (555) 555-5555</p>
            <button className={styles.contactButton} onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
