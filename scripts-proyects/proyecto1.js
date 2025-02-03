document.addEventListener("DOMContentLoaded", () => {
    // 1. URL base de tu bucket S3 (asegúrate de que los archivos sean públicos)
    const s3BaseUrl = "https://aaarchdesign.s3.us-east-2.amazonaws.com/CasaHab-Roel&Laura";

    // 2. Lista manual de nombres de archivo (jpg, png, etc.)
    const imagePaths = [
      "alberca.jpg",
      "alberca1.png",
      "alberca2.jpg",
      "areasocial.png",
      "bajoescalera.png",
      "cocina.jpg",
      "lavanderia.png",
      "REC 2.jpg",
      "REC PRINC.jpg",
      "rec1.jpg",
      "RECAMARA PRIN OK.jpg",
      "RECAMARA PRIN OK.png",
      "RECAMARA PRINCIPAL 2.png",
      "RECAMARA PRINCIPAL.jpg",
      "RENDER ALBERCA 1.jpg",
      "render alberca 1.png",
      "RENDER AREA ALBERCA1.jpg",
      "RENDER AREA SOCIAL 1.jpg",
      "RENDER AREA SOCIAL 2.jpg",
      "RENDER AREA SOCIAL 3.jpg",
      "RENDER AREA TERRAZA .jpg",
      "SALA 2.jpg",
      "SALA.jpg",
    ];

    // 3. Selecciona la sección donde se inyectarán las imágenes
    const gallerySection = document.querySelector(".image-gallery");

    // 4. Crear y agregar cada imagen al DOM
    imagePaths.forEach((fileName) => {
      const img = document.createElement("img");
      img.src = `${s3BaseUrl}/${fileName}`;

      // Lazy loading nativo (HTML5)
      img.loading = "lazy";

      // Medidas iniciales (opcional) si quieres un tamaño fijo:
      img.width = 400;
      img.height = 225;

      // Al hacer clic, alternar entre fullscreen y estado normal
      img.addEventListener("click", () => {
        img.classList.toggle("fullscreen");
      });

      gallerySection.appendChild(img);
    });
  });