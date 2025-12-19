// projects.js: Dynamically load projects from JSON and render cards

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.getElementById('projectsGrid');
  fetch('data/projects.json')
    .then(res => res.json())
    .then(projects => {
      grid.innerHTML = '';
      projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'projects__card fade-in';
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title} screenshot">
          <div class="projects__card-label">Practice Project</div>
          <div class="projects__card-title">${project.title}</div>
          <div class="projects__card-problem"><strong>Problem:</strong> ${project.problem}</div>
          <div class="projects__card-tools"><strong>Tools:</strong> ${project.tools}</div>
          <div class="projects__card-learnings"><strong>Key Learnings:</strong> ${project.learnings}</div>
          ${project.link ? `<div class="projects__card-link"><a href="${project.link}" target="_blank" rel="noopener">View Project</a></div>` : ''}
        `;
        grid.appendChild(card);
      });
    })
    .catch(() => {
      grid.innerHTML = '<p style="color:var(--color-accent);text-align:center;">No projects found.</p>';
    });
});
