
import { Slot } from 'expo-router'
import '../styles/global.css'

import {
  Sora_400Regular,
  Sora_500Medium,
  Sora_700Bold,
  useFonts
} from '@expo-google-fonts/sora'

export default function LayoutRoot() {
  const [fontsLoaded] = useFonts({
     Sora_400Regular, 
     Sora_500Medium, 
     Sora_700Bold
  })

  if(!fontsLoaded) {
    return 
  }

  return (
    <Slot />
  )
}