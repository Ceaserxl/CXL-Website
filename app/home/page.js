'use client';

import { useRouter } from 'next/navigation';
import FadeWrapper from '../components/FadeWrapper';

export default function Home() {
  const router = useRouter();

  const goBackToSplash = () => {
    router.push('/');
  };

  return (
    <FadeWrapper>
      <main
        style={{
          minHeight: '100vh',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <h1>Home Page</h1>

        <button
          onClick={goBackToSplash}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.25rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            boxShadow: '0 0 10px rgba(0, 123, 255, 0.7)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Show Splash
        </button>
      </main>
    </FadeWrapper>
  );
}
