import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { UserResponse } from '../http/get-user'

type User = UserResponse

interface UserStore {
  user: User | null
  save: (user: User) => void
  clear: VoidFunction
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {} as User,
      save: (user: User) => set({ user }),
      clear: () => set({ user: null })
    }),
    {
      name: 'shopping-coins:user',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
