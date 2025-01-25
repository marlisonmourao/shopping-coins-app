import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'

export async function openCamera() {
  const photoSelected = await ImagePicker.launchCameraAsync({
    quality: 0.8,
    allowsEditing: true,
  })

  if (photoSelected.canceled) {
    return null
  }

  const photoURI = photoSelected.assets[0].uri

  if (photoURI) {
    const photoInfoTaken = (await FileSystem.getInfoAsync(photoURI)) as {
      size: number
    }

    if (photoInfoTaken.size && photoInfoTaken.size / 1024 / 1024 > 5) {
      alert('Essa imagem é muito grande. Escolha uma de até 5MB')
      return null
    }
    const fileExtension = photoSelected.assets[0].uri.split('.').pop()

    return { photoURI, fileExtension }
  }

  return null
}