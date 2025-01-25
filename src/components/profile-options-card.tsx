import { colors } from '@/styles/default'
import { ChevronRight, type LucideIcon } from 'lucide-react-native'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

interface ProfileOptionsCardProps extends TouchableOpacityProps {
  Icon: LucideIcon
  title: string
}

export function ProfileOptionsCard({ Icon, title, ...rest }: ProfileOptionsCardProps) {
  return (
    <TouchableOpacity
      className="bg-white rounded-3xl px-6 py-5 items-center justify-between flex-row drop-shadow-md elevation-md"
      activeOpacity={0.7}
      {...rest}
    >
      <View className='items-center gap-4 flex-row'>
        <Icon size={28} color={colors['primary-violet-700']} />
        <Text className='font-semibold text-lg text-gray-900'>{title}</Text>
      </View>
      <ChevronRight color="#545454" />
    </TouchableOpacity>
  )
}