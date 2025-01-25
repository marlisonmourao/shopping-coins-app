import { ProfileOptionsCard } from '@/components/profile-options-card'
import { useUserStore } from '@/store/user-store'
import { colors } from '@/styles/default'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Redirect } from 'expo-router'
import { CircleUserRound, ClipboardPenLine, Landmark } from 'lucide-react-native'
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default function Profile() {
  const userStorage = useUserStore()

  function handleLogout() {
    userStorage.clear()
  }

  if (!userStorage.user?.id) {
    return <Redirect href="/" />
  }

  return (
    <SafeAreaView className="flex-1 bg-primary-violet-900">
      <View className="mt-8 w-full items-center justify-center gap-4">
        <View className='items-center justify-center'>
          <Image
            source={{
              uri: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
            }}
            className="h-24 w-24 rounded-3xl"
          />
          <View className='bg-white p-2 rounded-full -mt-4'>
            <AntDesign name='camerao' size={12} color={colors['gray-900']} />
          </View>

          <Pressable>

          </Pressable>
        </View>

        <Text
          className="font-semibold text-base text-gray-50">
          {userStorage.user.name}
        </Text>

        <TouchableOpacity className="px-6 py-2 rounded-3xl bg-gray-900 items-center justify-center">
          <Text
            className="font-semibold text-sm text-white">
            Editar Perfil

          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 bg-gray-50 mt-14 rounded-tl-3xl rounded-tr-3xl px-7">
        <View className="gap-6 mt-12">
          <ProfileOptionsCard
            title="Detalhes do Perfil"
            Icon={CircleUserRound}
          />
          <ProfileOptionsCard
            title="Detalhes da Conta"
            Icon={Landmark}
          />
          <ProfileOptionsCard
            title="Histórico"
            Icon={ClipboardPenLine}
          />
        </View>


        <TouchableOpacity
          className='w-[104px] bg-primary-violet-700 rounded-full p-3 self-center mt-14'
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <Text className="text-center text-lg text-white font-semibold">
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}