import { ButtonGoBack } from '@/components/button-go-back'
import { CardProductItem } from '@/components/card-item'
import { usePurchase } from '@/hook/use-product-purchase'
import { getProducts, type ProductResponse } from '@/http/get-products'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, SafeAreaView, Text, View } from 'react-native'

type Product = ProductResponse

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const LIMIT = 10

  const { disabledProducts, loadingProducts, handlePurchase } = usePurchase()

  async function fetchProducts() {
    try {
      setLoading(true)

      const newProducts = await getProducts(1, LIMIT)

      setProducts(newProducts)
    } catch (error) {
      Alert.alert('Error', 'Erro ao buscar produtos!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const refreshProducts = async () => {
    try {
      setLoading(true)
      const refreshedProducts = await getProducts(1, LIMIT)
      setProducts(refreshedProducts)
    } catch (error) {
      console.error('Error refreshing products:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-primary-violet-700">
      <View className="px-8 mt-4">
        <ButtonGoBack onPress={() => router.push('/(tabs)/home')} />
      </View>

      <View className="flex-1 bg-gray-50 mt-6 rounded-tl-3xl rounded-tr-3xl px-8">
        <Text className="font-semibold text-2xl text-gray-900 mt-6 mb-4">
          Shop
        </Text>

        {loading ? (
          <ActivityIndicator size={20} className='text-primary-violet-700' />
        ) : (
          <FlatList
            data={products}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={{ paddingBottom: 16 }}
            showsVerticalScrollIndicator={false}
            refreshing={loading}
            onRefresh={refreshProducts}
            renderItem={({ item }) => (
              <View style={{ flex: 1, margin: 8 }}>
                <CardProductItem
                  product={item}
                  disabled={disabledProducts.has(item.id)}
                  isLoading={loadingProducts.has(item.id)}
                  isPurchased={disabledProducts.has(item.id)}
                  onPress={() => handlePurchase(item.id, item.price)}
                />
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  )
}
