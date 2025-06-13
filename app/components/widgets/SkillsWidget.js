'use client';

import { useEffect, useState } from 'react';

export default function SkillsWidget() {
  const skills = [
    ['Linux (Ubuntu, Debian)', 9],
    ['Windows Server / Active Directory', 8],
    ['Networking', 8],
    ['AWS / Cloud', 7],
    ['Python / Bash / Scripting', 9],
    ['SQL / DB Ops', 7],
    ['Security+ / System Hardening', 8],
    ['Git / Docker / RClone', 8],
    ['Microsoft Office Tools', 8],
    ['Forklift / Equipment Ops', 10],
    ['Schematic / Diagram Reading', 9],
    ['Team Work / Project Management', 8],
    ['Communication / Documentation', 9],
    ['Problem Solving / Troubleshooting', 9],
    ['Adaptability / Learning', 10],
    ['Customer Service', 8],
    ['Time Management', 9],
    ['Attention to Detail', 9],
    ['Leadership / Mentoring', 8]
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000); // small delay so it doesn't instant-fire before mount

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h3 style={{
        marginBottom: '1rem',
        textAlign: 'center',
        color: '#00c6ff'
      }}>🛠️ Skills</h3>

      {skills.map(([label, score], index) => {
        const width = animate ? score * 10 : 0;
        return (
          <div key={index} style={{
            position: 'relative',
            marginBottom: '0.5rem',
            backgroundColor: '#1a1a1a',
            borderRadius: '5px',
            overflow: 'hidden',
            height: '24px',
            boxShadow: '0 0 8px rgba(0, 198, 255, 0.2)'
          }}>
            <div style={{
              height: '100%',
              width: `${width}%`,
              background: 'linear-gradient(90deg, #00c6ff, #007acc)',
              boxShadow: '0 0 8px rgba(0, 198, 255, 0.4)',
              transition: 'width 1s ease'
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: '10px',
              right: '10px',
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#ffffff'
            }}>
              <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
              <span style={{ fontWeight: 'bold', color: '#00c6ff' }}>{score}/10</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
