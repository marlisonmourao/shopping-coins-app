import { Link, Redirect, router } from 'expo-router'
import { Lock, User } from 'lucide-react-native'
import { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Input } from '../components/input'
import { getUsers } from '../http/get-user'
import { useUserStore } from '../store/user-store'

export default function SignIn() {
  const userStorage = useUserStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!')
      return
    }

    setIsLoading(true)

    try {
      const { users } = await getUsers()

      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password
      )

      if (user) {
        userStorage.save(user)
        router.replace('/(tabs)/home')
      } else {
        Alert.alert('Erro', 'Credenciais inválidas!')
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.')
    } finally {
      setIsLoading(false)
    }
  }

  if (userStorage.user?.id) {
    return <Redirect href="/(tabs)/home" />
  }

  return (
    <SafeAreaView className="flex-1 bg-primary-violet-700">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full items-center justify-center mt-12">
            <Image source={require("../assets/logo.png")} />
          </View>

          <View className="mt-14 bg-gray-50 flex-1 rounded-tl-3xl rounded-tr-3xl">
            <Text className="text-center text-gray-900 text-2xl font-semibold mt-5">
              Login
            </Text>

            <View className="px-6">
              <View className="mt-8 gap-6">
                <Input
                  Icon={User}
                  placeholder="E-mail"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
                <Input
                  Icon={Lock}
                  placeholder="Senha"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <View className="w-full items-center justify-center mt-8">
                <TouchableOpacity
                  className="w-[104px] bg-primary-violet-700 rounded-full p-3"
                  activeOpacity={0.7}
                  onPress={handleLogin}
                  disabled={isLoading}
                >
                  {
                    isLoading ? <ActivityIndicator /> : (
                      <Text className="text-center text-lg text-white font-semibold">
                        Entrar
                      </Text>
                    )
                  }
                </TouchableOpacity>

                <View className="flex-row items-center gap-2 mt-16">
                  <Link href="/sign-up" className="font-regular text-xs text-gray-500">
                    Registrar-se
                  </Link>

                  <Text className="font-regular text-xs text-gray-500">|</Text>

                  <Link href="/" className="font-regular text-xs text-gray-500">
                    Resetar senha
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
