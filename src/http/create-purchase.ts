import { BASE_URL_API_FAKE } from "."

export interface CreateNewPurchaseRequest {
  user_id: string
  product_id: string
  quantity: number
  total_paid: number
  purchase_date: Date
}

export async function createPurchases({
  user_id,
  product_id,
  quantity,
  total_paid,
  purchase_date
}: CreateNewPurchaseRequest) {
  const response = await fetch(`${BASE_URL_API_FAKE}/purchases`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id,
      product_id,
      quantity,
      total_paid,
      purchase_date,
    }),
  })

  if (!response.ok) {
    throw new Error('Erro ao criar a compra')
  }

  const data = await response.json()
  return data
}
