document.addEventListener('DOMContentLoaded', actualizarClasesProgressBar);
loadProjectsFromGitHub();

function actualizarClasesProgressBar() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const value = parseFloat(bar.value);
    bar.classList.remove('low', 'medium', 'high');
    if (value < 30) {
      bar.classList.add('low');
    } else if (value < 70) {
      bar.classList.add('medium');
    } else {
      bar.classList.add('high');
    }
  });
}

function mostrarVista(id) {
  document.querySelectorAll(".vista").forEach(div => {
    div.classList.remove("activa");
  });
  document.getElementById(id).classList.add("activa");
}

async function loadProjectsFromGitHub() {
  const response = await fetch("https://api.github.com/users/EnemyCode/repos");
  const repos = await response.json();

  const projectList = document.getElementById("projects-layout");
  repos.forEach(repo => {
    if (!repo.fork) {
      const imagePath = `resources/${repo.name}.jpg`;
      const card = document.createElement("a");
      card.className = "project";
      card.href = repo.html_url;
      card.target = "_blank";
      card.innerHTML = `
        <img src="${imagePath}" alt="${repo.name}" onerror="this.style.display='none'">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available."}</p>
      `;
      projectList.appendChild(card);
    }
  });
}