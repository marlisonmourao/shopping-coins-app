import { Badge } from '@/components/badge'
import { CardProductItem } from '@/components/card-item'
import { usePurchase } from '@/hook/use-product-purchase'
import { getProducts, type ProductResponse } from '@/http/get-products'
import { useUserStore } from '@/store/user-store'
import { colors } from '@/styles/default'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { clsx } from 'clsx'

import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import {
  Alert,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default function Home() {
  const { user } = useUserStore()
  const [products, setProducts] = useState<ProductResponse[]>([])

  const {
    disabledProducts,
    loadingProducts,
    handlePurchase
  } = usePurchase()

  async function fetchProducts() {
    try {
      const newProducts = await getProducts(1, 2)
      setProducts(newProducts)


    } catch (error) {
      Alert.alert('Error', 'Erro ao buscar produtos!')
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <SafeAreaView className="flex-1 bg-primary-violet-900">
      <View className={clsx('px-8', Platform.OS === 'ios' ? 'mt-10' : 'mt-20')}>
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center justify-between"
          onPress={() => router.push('/(tabs)/profile')}
        >
          <Image
            source={{ uri: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y' }}
            className="h-10 w-10 rounded-full"
          />
          <View className="p-2 bg-gray-900 rounded-lg">
            <Text className="font-semibold text-sm text-white">
              Shopping Coins
            </Text>
          </View>
        </TouchableOpacity>

        <View className="mt-4 flex-row items-center justify-between">
          <Text className="text-white text-sm font-regular">
            Olá, <Text className="text-white font-semibold text-base">{user?.name}</Text>
          </Text>
          <MaterialCommunityIcons name="bell" color={colors.white} size={18} />
        </View>
      </View>

      <View className="flex-1 bg-gray-50 mt-20 rounded-tl-3xl rounded-tr-3xl">
        <View className="w-full items-center justify-center -mt-7 px-7">
          <Badge />
        </View>

        <View className="w-full items-center justify-center mt-9 px-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={require('../../assets/banner.png')}
              className="w-[298px] h-28"
            />
            <Image
              source={require('../../assets/banner.png')}
              className="w-[298px] h-28 -ml-3"
            />
          </ScrollView>
        </View>

        <View className="mt-10 px-7 flex-row gap-6">
          <FlatList
            data={products}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({ item }) => (
              <CardProductItem
                product={item}
                onPress={() => handlePurchase(item.id, item.price)}
                disabled={disabledProducts.has(item.id)}
                isLoading={loadingProducts.has(item.id)}
                isPurchased={disabledProducts.has(item.id)}
              />
            )}
            contentContainerStyle={{ gap: 20 }}
          />
        </View>

        <View className="w-full items-center justify-center mt-9">
          <TouchableOpacity
            className="bg-primary-violet-700 rounded-3xl w-[231px] py-3 px-6 items-center justify-center"
            onPress={() => router.push('/(tabs)/shop')}
          >
            <Text className="font-semibold text-base text-white">
              Ver todos os produtos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
