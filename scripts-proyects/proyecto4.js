document.addEventListener("DOMContentLoaded", () => {
    // 1. URL base de tu bucket S3 (asegúrate de que los archivos sean públicos)
    const s3BaseUrl = "https://aaarchdesign.s3.us-east-2.amazonaws.com/Argentina/";

    // 2. Lista manual de nombres de archivo (jpg, png, etc.)
    const imagePaths = [
      "ESCALERA 1.png",
      "ESCALERA 2.png",
      "PROPUESTA 1 INTERIOR.jpg",
      "PROPUESTA 1.jpg",
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