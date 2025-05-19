// js/auth.js
document.getElementById('login-form')?.addEventListener('submit', async e => {
  e.preventDefault()
  const email = e.target[0].value
  const password = e.target[1].value
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) alert(error.message)
  else window.location.href = 'index.html'
})

document.getElementById('register-form')?.addEventListener('submit', async e => {
  e.preventDefault()
  const email = e.target[0].value
  const password = e.target[1].value
  const { error } = await supabase.auth.signUp({ email, password })
  if (error) alert(error.message)
  else window.location.href = 'login.html'
})