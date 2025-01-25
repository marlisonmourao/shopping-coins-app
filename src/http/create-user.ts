import { BASE_URL_API_FAKE } from ".";

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  balance: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  created_at: string;
}

export async function createUser({
  name,
  email,
  password,
  balance,
}: CreateUserRequest): Promise<User> {
  try {
    const response = await fetch(`${BASE_URL_API_FAKE}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        balance,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Erro ao criar usuário: ${errorData.message || "Erro desconhecido"}`
      );
    }

    const data: User = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(
      `Erro na requisição ao criar usuário: ${error.message || "Erro desconhecido"}`
    );
  }
}
