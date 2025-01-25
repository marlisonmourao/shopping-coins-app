
import { createPurchases } from '@/http/create-purchase'
import { useUserStore } from '@/store/user-store'
import { useState } from 'react'
import { Alert } from 'react-native'

export function usePurchase() {
  const [disabledProducts, setDisabledProducts] = useState<Set<string>>(new Set())
  const [loadingProducts, setLoadingProducts] = useState<Set<string>>(new Set())

  const { user } = useUserStore()

  async function handlePurchase(productId: string, productPrice: number) {
    if (!user) {
      Alert.alert('Error', 'Usuário não encontrado!')
      return
    }

    setLoadingProducts(prev => new Set(prev.add(productId)))

    await new Promise((resolve) => setTimeout(resolve, 300))


    try {
      const newPurchase = {
        user_id: user.id,
        product_id: productId,
        quantity: 1,
        total_paid: productPrice,
        purchase_date: new Date(),
      }

      await createPurchases(newPurchase)
      Alert.alert('Sucesso', 'Compra realizada com sucesso!')

      setDisabledProducts(prev => new Set(prev.add(productId)))
    } catch (error) {
      Alert.alert('Error', 'Erro ao realizar a compra!')
    } finally {
      setLoadingProducts(prev => {
        const updated = new Set(prev)
        updated.delete(productId)
        return updated
      })
    }
  }

  return { disabledProducts, loadingProducts, handlePurchase }
}
