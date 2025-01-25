import { BASE_URL_API_FAKE } from "."

export interface ProductResponse {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
  category: string
  created_at: string
}

export async function getProducts(page: number, limit: number) {
  const response = await fetch(`${BASE_URL_API_FAKE}/products?_page=${page}&_limit=${limit}`)

  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }

  const products: ProductResponse[] = await response.json()
  return products
}
