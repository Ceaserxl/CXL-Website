'use client';

import { useEffect, useState } from 'react';

export default function GitHubWidget() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('/api/github');
        const data = await res.json();

        if (data?.error === 'Failed Rate Limited') {
          setError('GitHub Rate Limited.');
        } else if (data?.error) {
          setError('Failed to load GitHub data.');
        } else {
          setRepos(data);
        }
      } catch {
        setError('Failed to load GitHub data.');
      }
    }

    fetchRepos();
  }, []);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h4 style={{ marginBottom: '1.5rem', color: '#00c6ff', textAlign: 'center' }}>GitHub Projects</h4>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {!error && repos.length === 0 && (
        <p style={{ color: '#cccccc', textAlign: 'center' }}>No repositories found.</p>
      )}

      {!error && repos.map((repo, index) => (
        <div key={repo.name} style={{ marginBottom: index === repos.length - 1 ? '0' : '2rem' }}>
          <h5 style={{ margin: '0 0 0.5rem 0' }}>
            <a href={repo.html_url} target="_blank" style={{ color: '#ffffff', textDecoration: 'underline' }}>
              {repo.name}
            </a>
          </h5>

          <p style={{ margin: '0 0 1rem 0', color: '#cccccc', lineHeight: '1.5', fontSize: '0.95rem' }}>
            {repo.description || 'No description provided.'}
          </p>

          {repo.commit && (
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ margin: '0 0 0.3rem 0', color: '#aaaaaa', fontSize: '0.9rem', lineHeight: '1.4' }}>
                Latest commit:&nbsp;
                <a href={repo.commit.url} target="_blank" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                  {repo.commit.message}
                </a>
              </p>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#888888' }}>
                on {repo.commit.date}
              </p>
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span style={{
              padding: '0.3rem 0.6rem',
              backgroundColor: '#333',
              borderRadius: '5px',
              fontSize: '0.85rem',
              color: '#ffffff'
            }}>★ {repo.stars}</span>

            <span style={{
              padding: '0.3rem 0.6rem',
              backgroundColor: '#00c6ff',
              borderRadius: '5px',
              fontSize: '0.85rem',
              color: '#111111'
            }}>Forks: {repo.forks}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
