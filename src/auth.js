const { API_URL = 'http://localhost:5050' } = process.env

export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ username, password }),
    credentials: 'include'
  })

  if (res.status !== 200)
    return res.json().then(res => Promise.reject(res.message))

  return await res.json()
}

export async function logout() {
  const res = await fetch(`${API_URL}/logout`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    credentials: 'include'
  })

  if (res.status !== 200)
    return res.json().then(res => Promise.reject(res.message))

  return res.json()
}

export async function logged() {
  const res = await fetch(`${API_URL}/logged`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    credentials: 'include'
  })

  if (res.status !== 200)
    return res.json().then(res => Promise.reject(res.message))

  return res.json()
}
