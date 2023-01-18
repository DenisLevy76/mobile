import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter'

import { LoadingComponent } from './src/components/LoadingComponent'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  })

  if (!fontsLoaded) return <LoadingComponent />

  return (
    <>
      <Home />
      <StatusBar
        style='light'
        backgroundColor='transparent'
        translucent
      />
    </>
  )
}
