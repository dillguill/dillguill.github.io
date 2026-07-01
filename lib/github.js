const GITHUB_USER = 'dillguill';
const FEATURED_TOPIC = 'portfolio';

function parseTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

export async function getFeaturedRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?type=public&per_page=100`,
    { headers: { Accept: 'application/vnd.github+json' } }
  );
  if (!res.ok) throw new Error(`GitHub repos fetch failed: ${res.status}`);
  const repos = await res.json();

  const featured = repos.filter(r => r.topics?.includes(FEATURED_TOPIC));

  return Promise.all(
    featured.map(async repo => {
      const readme = await getRepoReadme(repo.name);
      const title = parseTitle(readme) ?? repo.name;
      const tech = (repo.topics ?? []).filter(t => t !== FEATURED_TOPIC);

      return {
        id: repo.name,
        title,
        description: repo.description ?? '',
        tech,
        github: repo.html_url,
        live: repo.homepage || null,
      };
    })
  );
}

export async function getRepoReadme(repoName) {
  const branches = ['main', 'master'];
  for (const branch of branches) {
    const res = await fetch(
      `https://raw.githubusercontent.com/${GITHUB_USER}/${repoName}/${branch}/README.md`
    );
    if (res.ok) return res.text();
  }
  return '';
}
