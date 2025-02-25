document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  function mostrarSlides() {
      slides.forEach(slide => slide.style.display = "none"); // Oculta todas las imágenes

      // Detectar si la pantalla es menor o igual a 768px
      let isMobile = window.matchMedia("(max-width: 768px)").matches;
      let cantidadImagenes = isMobile ? 1 : 3; // 1 imagen en móvil, 3 en desktop

      let indices = [];
      for (let i = 0; i < cantidadImagenes; i++) {
          indices.push((currentIndex + i) % totalSlides);
      }

      indices.forEach(index => {
          slides[index].style.display = "block";
      });
  }

  prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      mostrarSlides();
  });

  nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % totalSlides;
      mostrarSlides();
  });

  // Escuchar cambios en el tamaño de la ventana para actualizar el carrusel dinámicamente
  window.addEventListener("resize", mostrarSlides);

  // Mostrar las imágenes al cargar la página
  mostrarSlides();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleImages = document.querySelectorAll('.toggle-size');
  
    toggleImages.forEach(img => {
      img.addEventListener('click', () => {
        // Si la imagen está a 100% la regresamos a 400px; de lo contrario la ponemos a 100%.
        if (img.style.maxWidth === '100%') {
          img.style.maxWidth = '400px';
        } else {
          img.style.maxWidth = '100%';
        }
      });
    });
  });
document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location = this.href;
                }, 500); // Coincide con la duración en CSS
            });
        });
    });  
