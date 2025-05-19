// js/movies.js
window.addEventListener('DOMContentLoaded', async () => {
  const { data, error } = await supabase.from('movies').select('*')
  const container = document.getElementById('movie-list')
  if (error) {
    container.innerHTML = '<p>Error al cargar películas</p>'
    return
  }
  data.forEach(movie => {
    const div = document.createElement('div')
    div.innerHTML = `<img src="assets/posters/${movie.poster}" alt="${movie.title}" /><h3>${movie.title}</h3>`
    div.onclick = () => (window.location.href = `movie.html?id=${movie.id}`)
    container.appendChild(div)
  })
})