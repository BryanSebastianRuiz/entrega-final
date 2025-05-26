// js/movies.js

import { supabase } from './supabase.js';

// Contenedor donde se mostrarán las películas
const grid = document.querySelector('.peliculas-grid');

async function cargarPeliculas() {
  const { data: peliculas, error } = await supabase
    .from('peliculas')
    .select('*');

  if (error) {
    console.error('Error al cargar películas:', error);
    grid.innerHTML = '<p>Error al cargar películas.</p>';
    return;
  }

  grid.innerHTML = '';

  peliculas.forEach(pelicula => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => {
      window.location.href = `movie.html?id=${pelicula.id}`;
    };

    card.innerHTML = `
      <img src="${pelicula.poster_url}" alt="${pelicula.titulo}">
      <div class="card-content">
        <h3>${pelicula.titulo}</h3>
        <p>${pelicula.descripcion.substring(0, 100)}...</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', cargarPeliculas);
