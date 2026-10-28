// Interacciones sencillas de la portada.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Aviso útil si las fotos aún no se han agregado al repositorio.
  document.querySelectorAll(".photo-card img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      const placeholder = img.nextElementSibling;
      if (placeholder) placeholder.style.display = "grid";
    });
  });
});
