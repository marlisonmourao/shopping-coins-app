import { BASE_URL_API_FAKE } from '.'

export interface UserResponse {
  id: string
  name: string
  email: string
  password: string
  balance: number
  created_at: string
}

export async function getUsers() {
  const response = await fetch(`${BASE_URL_API_FAKE}/users`)

  const users: UserResponse[] = await response.json()
  return { users }
}
