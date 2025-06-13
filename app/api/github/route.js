let cachedData = null;
let cachedTimestamp = 0;
const CACHE_DURATION = 3600 * 1000; // 1 hour in ms

export async function GET() {
  const now = Date.now();

  if (cachedData && (now - cachedTimestamp) < CACHE_DURATION) {
    return Response.json(cachedData);
  }

  const username = 'Ceaserxl';
  const headers = { 'User-Agent': 'Next.js' };

  try {
    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`, { headers });
    const repos = await repoRes.json();

    if (repos?.message?.includes('API rate limit exceeded')) {
      return Response.json({ error: 'Failed Rate Limited' }, { status: 500 });
    }

    if (!Array.isArray(repos)) {
      return Response.json({ error: 'Failed to fetch GitHub data.' }, { status: 500 });
    }

    const result = await Promise.all(repos.map(async (repo) => {
      let commit = null;
      try {
        const commitRes = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`, { headers });
        const commits = await commitRes.json();
        if (Array.isArray(commits) && commits.length > 0) {
          commit = {
            message: commits[0].commit.message,
            date: commits[0].commit.committer.date,
            url: commits[0].html_url
          };
        }
      } catch {}

      return {
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        commit
      };
    }));

    cachedData = result;
    cachedTimestamp = now;

    return Response.json(result);
  } catch (err) {
    return Response.json({ error: 'Failed to fetch GitHub data.' }, { status: 500 });
  }
}
