import { ActivityIndicator, Text, View } from 'react-native'

export const LoadingComponent: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09090A',
      }}
    >
      <ActivityIndicator
        color='#7C3AED'
        size={64}
      />
    </View>
  )
}
