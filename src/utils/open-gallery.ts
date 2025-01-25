import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'

export async function openGetGallery() {
  const photoSelected = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
    aspect: [4, 4],
    allowsEditing: true,
  })

  if (photoSelected.canceled) {
    return null
  }

  const photoURI = photoSelected.assets[0].uri

  if (photoURI) {
    const photoInfo = (await FileSystem.getInfoAsync(photoURI)) as {
      size: number
    }

    if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
      alert('Essa imagem é muito grande. Escolha uma de até 5MB')
      return null
    }

    const fileExtension = photoSelected.assets[0].uri.split('.').pop()

    return { photoURI, fileExtension }
  }

  return null
}