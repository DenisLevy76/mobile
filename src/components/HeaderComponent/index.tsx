import { View, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import Logo from '../../assets/logo.svg'

export const HeaderComponent: React.FC = () => {
  return (
    <View className='w-full flex-row align-center justify-between'>
      <Logo />
      <TouchableOpacity className='flex-row h-11 px-4 items-center border border-violet-500 rounded-lg'>
        <Feather
          name='plus'
          color={colors.violet[500]}
          size={20}
        />
        <Text className='text-white font-semibold'>Novo</Text>
      </TouchableOpacity>
    </View>
  )
}
