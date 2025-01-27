// Selecciona los elementos del carrusel
const carrusel = document.getElementById('carrusel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let indiceSlide = 0;

function mostrarSlide(index) {
  // Asegurar que el índice sea válido (recorrido circular)
  if (index < 0) {
    indiceSlide = slides.length - 1;
  } else if (index >= slides.length) {
    indiceSlide = 0;
  } else {
    indiceSlide = index;
  }

  const offset = -(indiceSlide * 100) + '%';
  carrusel.style.transform = `translateX(${offset})`;
}

prevBtn.addEventListener('click', () => {
  mostrarSlide(indiceSlide - 1);
});

nextBtn.addEventListener('click', () => {
  mostrarSlide(indiceSlide + 1);
});
