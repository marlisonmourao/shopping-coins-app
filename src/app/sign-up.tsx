import { Link, router } from 'expo-router'
import { DollarSign, Lock, Mail, User } from 'lucide-react-native'
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
import { createUser } from '../http/create-user'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [balance, setBalance] = useState(0)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSignUp() {
    if (!name || !email || !password || !confirmPassword || !balance) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!')
      return
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!')
      return
    }

    setIsLoading(true)

    try {
      await createUser({ name, email, password, balance })
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!')
      router.replace('/')
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar criar sua conta.')
    } finally {
      setIsLoading(false)
    }
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
              Registrar-se
            </Text>

            <View className="px-6">
              <View className="mt-8 gap-6">
                <Input
                  Icon={User}
                  placeholder="Nome"
                  value={name}
                  onChangeText={setName}
                />
                <Input
                  Icon={Mail}
                  placeholder="E-mail"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />

                <Input
                  Icon={DollarSign}
                  placeholder="Saldo"
                  keyboardType="numeric"
                  value={balance.toString()}
                  onChangeText={(text) => setBalance(Number(text) || 0)}
                />

                <Input
                  Icon={Lock}
                  placeholder="Senha"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />

                <Input
                  Icon={Lock}
                  placeholder="Confirmar Senha"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>

              <View className="w-full items-center justify-center mt-8">
                <TouchableOpacity
                  className="w-[104px] bg-primary-violet-700 rounded-full p-3"
                  activeOpacity={0.7}
                  onPress={handleSignUp}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator />
                  ) : (
                    <Text className="text-center text-lg text-white font-semibold">
                      Registrar
                    </Text>
                  )}
                </TouchableOpacity>

                <View className="flex-row items-center gap-2 mt-16 mb-10">
                  <Link href="/" className="font-regular text-xs text-gray-500">
                    Já tem uma conta? Faça login
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
