import { Lock, User } from 'lucide-react-native'

import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Input } from '../components/input'

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 bg-primary_violet_700">
      <View className="w-full items-center justify-center mt-12">
        <Image source={require("../assets/logo.png")} />
      </View>

      <View className="mt-12 bg-gray-50 flex-1 rounded-l-3xl rounded-r-3xl">
        <Text className="text-center text-2xl font-medium mt-5">Login</Text>


        <View className="px-6">
          <View className='mt-8 gap-6'>
            <Input Icon={User} placeholder="E-mail" />
            <Input Icon={Lock} placeholder="Senha" />
          </View>

          <View className='w-full items-center justify-center mt-8'> 
            <TouchableOpacity className='w-[104px] bg-primary_violet_700 rounded-full p-3' activeOpacity={0.7}>
              <Text className="text-center text-lg text-white font-semibold">
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}