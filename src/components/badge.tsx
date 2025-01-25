import { colors } from '@/styles/default'
import { Wallet } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

import { useUserStore } from '@/store/user-store'
import Feather from '@expo/vector-icons/Feather'
import { router } from 'expo-router'

export function Badge() {
  const { user } = useUserStore()

  return (
    <View className="p-4 bg-white w-full
     rounded-2xl drop-shadow-lg elevation-md">
      <View className='flex-row items-center justify-center'>
        <View className="flex-1">
          <View className="flex-row gap-2">
            <Wallet color={colors['primary-violet-700']} size={20} />
            <Text className="text-base font-regular text-gray-900">
              Lc <Text className="text-lg font-semibold">
                {user?.balance.toLocaleString('BRL', { style: 'currency', currency: 'BRL' })}
              </Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className='flex-row gap-2 items-center justify-center'
          onPress={() => router.push('/(tabs)/shop')}
        >
          <Feather name='shopping-bag' size={20} color={colors['primary-violet-700']} />
          <Text className='text-lg font-medium text-gray-950'>Shop</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}