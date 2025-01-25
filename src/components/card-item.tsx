import type { ProductResponse } from '@/http/get-products';
import { colors } from '@/styles/default';
import { CheckCircle, ShoppingCart } from 'lucide-react-native';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View, type TouchableOpacityProps
} from 'react-native';

type CardProductItemProps = TouchableOpacityProps & {
  product: ProductResponse
  disabled: boolean
  isLoading: boolean
  isPurchased: boolean // Adiciona a propriedade isPurchased
}

export function CardProductItem({ product, disabled, isLoading, isPurchased, ...rest }: CardProductItemProps) {
  return (
    <View className="rounded-3xl w-[157px] overflow-hidden drop-shadow-xl elevation-sm">
      <Image
        source={{ uri: product.image }}
        style={{
          width: '100%',
          height: 111,
        }}
      />
      <View className="bg-white p-2">
        <View className="space-y-1">
          <Text className="font-semibold text-label text-base" numberOfLines={1}>{product.name}</Text>
          <Text className="text-[10px] text-label">
            {product.quantity === 1 ? `${product.quantity} unidade`
              : `${product.quantity} unidades`
            }
          </Text>
        </View>

        <View className="mt-4 px-2 items-center justify-between flex-row pb-3">
          <View>
            <Text className="text-xs font-regular text-primary-violet-700">Lc</Text>
            <Text className="text-base font-semibold text-primary-violet-700">
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className='w-9 h-9 bg-primary-violet-900 rounded-xl items-center justify-center'
            disabled={disabled || isLoading}
            {...rest}
          >
            {isLoading ? (
              <ActivityIndicator color={colors.white} />
            ) : isPurchased ? (
              <CheckCircle size={20} color={colors.primary} strokeWidth={3} />
            ) : (
              <ShoppingCart size={16} color={colors.white} strokeWidth={3} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
