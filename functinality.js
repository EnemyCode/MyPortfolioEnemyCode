document.addEventListener('DOMContentLoaded', actualizarClasesProgressBar);

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