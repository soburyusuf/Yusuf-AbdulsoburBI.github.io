// Fetch all public GitHub repos for the user and render them.
// Username: soburyusuf
const username = "soburyusuf";
const projectsList = document.getElementById("projects-list");
document.getElementById("gh-link").href = `https://github.com/${username}`;

function createCard(repo){
  const card = document.createElement("article");
  card.className = "project-card";
  const desc = repo.description ? repo.description : "";
  const lang = repo.language ? repo.language : "—";
  const updated = new Date(repo.updated_at).toLocaleDateString();
  card.innerHTML = `
    <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
    <p>${desc}</p>
    <div class="meta">★ ${repo.stargazers_count} • ${lang} • Updated ${updated}</div>
  `;
  return card;
}

async function loadRepos(){
  try{
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    if(!res.ok) throw new Error('GitHub API error: ' + res.status);
    const repos = await res.json();
    if(!Array.isArray(repos)) throw new Error('Unexpected API response');
    // Show all public repos (including forks) as requested. You can filter if needed.
    repos.forEach(r => {
      projectsList.appendChild(createCard(r));
    });
  }catch(err){
    console.error(err);
    projectsList.innerHTML = '<p class="note">Could not load GitHub projects. Check API rate limits or network.</p>';
  }
}

loadRepos();
