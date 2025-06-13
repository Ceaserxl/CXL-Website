'use client';

import { useState, useEffect } from 'react';

export default function FadeWrapper({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}
