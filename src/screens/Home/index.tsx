import { View, Text } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'

export const Home: React.FC = () => {
  return (
    <View className='bg-main-bg flex-1'>
      <HeaderComponent />
    </View>
  )
}
