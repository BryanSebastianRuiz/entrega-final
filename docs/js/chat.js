// chat.js

import { supabase } from './supabase.js'

// Reemplaza con tu ID de película o algo único si lo usas en más páginas
const movieId = 'interstellar'

const messagesContainer = document.getElementById('messages')
const messageForm = document.getElementById('message-form')
const messageInput = document.getElementById('message')

async function loadMessages() {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('movie_id', movieId)
    .order('created_at', { ascending: true })

  if (data) {
    messagesContainer.innerHTML = ''
    data.forEach(msg => {
      const el = document.createElement('div')
      el.className = 'message'
      el.innerHTML = `<strong>${msg.username}</strong>: ${msg.content}`
      messagesContainer.appendChild(el)
    })
  }
}

messageForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const content = messageInput.value.trim()
  if (!content) return

  const user = supabase.auth.user()
  const username = user?.email || 'Anónimo'

  const { error } = await supabase.from('messages').insert([
    {
      username,
      content,
      movie_id: movieId
    }
  ])

  messageInput.value = ''
  loadMessages()
})

loadMessages()
