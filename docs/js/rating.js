document.addEventListener('DOMContentLoaded', function () {
  const contenedoresEstrellas = document.querySelectorAll('.estrellas');

  contenedoresEstrellas.forEach(contenedor => {
    const estrellas = contenedor.querySelectorAll('.estrella');
    
    estrellas.forEach((estrella, index) => {
      estrella.addEventListener('click', () => {
        const valorSeleccionado = parseInt(estrella.getAttribute('data-valor'));
        actualizarEstrellas(estrellas, valorSeleccionado);

        // Puedes guardar la calificación aquí si tienes backend
        const pelicula = contenedor.getAttribute('data-pelicula');
        console.log(`Calificaste "${pelicula}" con ${valorSeleccionado} estrellas.`);
      });
    });
  });

  function actualizarEstrellas(estrellas, valor) {
    estrellas.forEach((estrella, i) => {
      estrella.classList.toggle('activa', i < valor);
      estrella.textContent = i < valor ? '★' : '☆';
    });
  }
});
