document.addEventListener("DOMContentLoaded", () => {
    // 1. URL base de tu bucket S3 (asegúrate de que los archivos sean públicos)
    const s3BaseUrl = "https://aaarchdesign.s3.us-east-2.amazonaws.com/CasaHab-EspanaInglaterra";

    // 2. Lista manual de nombres de archivo (jpg, png, etc.)
    const imagePaths = [
      "PROP 1 - VOLUMEN.jpg",
      "PROP 1 - VOLUMENFB.jpg",
      "PROP 1.1  - VOLUMEN.jpg",
      "RENDER 1 TERRAZA.jpg",
      "RENDER 1.jpg",
      "RENDER 2.jpg",
      "RENDER 5.png",
      "RENDER FINAL 1.png",
      "RENDER FINAL 2.png",
      "RENDER FINAL FACHADA 2.jpg",
      "RENDER FINAL FACHADA.jpg",
      "RENDER OFICIAL FACHADA OK 281222.jpg",
      "RENDER OFICIAL FACHADA.jpg",
      "RENDER OFICINAL FACHADA.png",
      "RENDER TERRAZA 1.0.jpg",
      "RENDER TERRAZA.png",
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