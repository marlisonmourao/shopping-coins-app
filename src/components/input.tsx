import type { LucideIcon } from 'lucide-react-native'
import { TextInput, View, type TextInputProps } from 'react-native'
import { colors } from '../styles/default'

interface InputProps extends TextInputProps {
  Icon: LucideIcon
}

export function Input({ Icon, ...rest }: InputProps) {
  return (
    <View
        className="bg-white rounded-3xl w-full h-20 flex-row items-center justify-center p-6 drop-shadow-xl"
      >
        <Icon size={22} color={colors.primary_violet_700} />
        <TextInput
          className="flex-1 h-20 text-gray-900 pl-3 " 
          placeholderTextColor={colors.gray_900} 
          {...rest}
        />
    </View>
  )
}