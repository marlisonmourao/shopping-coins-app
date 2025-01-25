
import '@/styles/global.css'
import { Slot } from 'expo-router'

import {
  Sora_400Regular,
  Sora_600SemiBold,
  Sora_700Bold,
  useFonts
} from '@expo-google-fonts/sora'
import React from 'react'
import { StatusBar } from 'react-native'

export default function LayoutRoot() {
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold
  })

  if (!fontsLoaded) {
    return
  }

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Slot />
    </>
  )
}