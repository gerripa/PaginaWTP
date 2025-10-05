const vestidos = [
  { id: 1, nombre: "Adele", imagen: "https://images.unsplash.com/photo-1520962918287-7448c2878f65" },
  { id: 2, nombre: "Isabella", imagen: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
  { id: 3, nombre: "Valentina", imagen: "https://images.unsplash.com/photo-1520975661595-6453be3f7070" }
];

const container = document.getElementById('vestidos-container');

vestidos.forEach(v => {
  const card = document.createElement('div');
  card.classList.add('vestido');
  card.innerHTML = `
    <img src="${v.imagen}" alt="${v.nombre}">
    <h3>${v.nombre}</h3>
  `;
  container.appendChild(card);
});

const form = document.getElementById('form-cita');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;
  alert(`¡Gracias ${nombre}! Tu cita fue solicitada para el ${fecha}.`);
  form.reset();
});

// <!-- prueba -->

