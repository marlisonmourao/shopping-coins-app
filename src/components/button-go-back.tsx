import { colors } from '@/styles/default'
import { ArrowLeft } from 'lucide-react-native'
import { Text, TouchableOpacity, View, type TouchableOpacityProps } from 'react-native'

export function ButtonGoBack({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity className="flex-row items-center gap-3" {...rest}>
      <View className="bg-white rounded-lg p-1 self-start">
        <ArrowLeft size={24} color={colors["primary-violet-700"]} strokeWidth={3} />
      </View>

      <Text className="text-white text-base font-semibold">Voltar</Text>
    </TouchableOpacity>
  )
}