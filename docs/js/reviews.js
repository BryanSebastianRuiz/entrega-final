// js/reviews.js
const urlParams = new URLSearchParams(window.location.search)
const movieId = urlParams.get('id')

window.addEventListener('DOMContentLoaded', async () => {
  const { data, error } = await supabase.from('reviews').select('*').eq('movie_id', movieId)
  const list = document.getElementById('review-list')
  if (!error) {
    list.innerHTML = data.map(r => `<p>${r.content}</p>`).join('')
  }
})

document.getElementById('review-form')?.addEventListener('submit', async e => {
  e.preventDefault()
  const content = e.target[0].value
  const { error } = await supabase.from('reviews').insert([{ movie_id: movieId, content }])
  if (error) alert('Error al enviar reseña')
  else window.location.reload()
})