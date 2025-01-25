import { colors } from '@/styles/default'
import type { LucideIcon } from 'lucide-react-native'
import { TextInput, View, type TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  Icon: LucideIcon
}

export function Input({ Icon, ...rest }: InputProps) {
  return (
    <View
      className="bg-white rounded-3xl w-full h-20 flex-row items-center justify-center p-6 drop-shadow-xl elevation-sm"
    >
      <Icon size={22} color={colors['primary-violet-700']} />
      <TextInput
        className="flex-1 h-20 pl-3"
        style={{ paddingLeft: 12 }}
        placeholderTextColor={colors['gray-900']}
        {...rest}
      />
    </View>
  )
}