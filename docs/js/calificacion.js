document.addEventListener("DOMContentLoaded", () => {
  const tarjetasPeliculas = document.querySelectorAll(".card");

  tarjetasPeliculas.forEach((tarjeta, index) => {
    const estrellasContainer = tarjeta.querySelector(".estrellas");
    if (!estrellasContainer) return;

    const idPelicula = tarjeta.dataset.id || `pelicula_${index}`;
    const calificacionInicial = parseInt(tarjeta.dataset.rating || "0", 10);
    const estrellas = estrellasContainer.querySelectorAll(".estrella");

    // Ver si hay una calificación guardada en localStorage
    const calificacionGuardada = localStorage.getItem(idPelicula);

    // Usar la calificación guardada, o si no, la del atributo data-rating
    const calificacion = calificacionGuardada ? parseInt(calificacionGuardada) : calificacionInicial;
    activarEstrellas(estrellas, calificacion);

    // Guardar la calificación inicial si no existía
    if (!calificacionGuardada && calificacionInicial > 0) {
      localStorage.setItem(idPelicula, calificacionInicial);
    }

    // Permitir que el usuario cambie la calificación
    estrellas.forEach((estrella, i) => {
      estrella.addEventListener("click", () => {
        localStorage.setItem(idPelicula, i + 1);
        activarEstrellas(estrellas, i + 1);
      });
    });
  });

  function activarEstrellas(estrellas, cantidad) {
    estrellas.forEach((estrella, index) => {
      estrella.classList.toggle("activa", index < cantidad);
    });
  }
});
