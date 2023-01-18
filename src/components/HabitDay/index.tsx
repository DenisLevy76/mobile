import { TouchableOpacity, Dimensions, Text, View } from 'react-native'

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = 32 * 2

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE =
  (Dimensions.get('screen').width - SCREEN_HORIZONTAL_PADDING) / 7 - 8

export interface HabitDayProps {
  day?: number
  disabled?: boolean
}

export const HabitDay: React.FC<HabitDayProps> = ({ day, disabled }) => {
  if (disabled)
    return (
      <View
        className={`opacity-50 bg-zinc-900 border-2 border-zinc-800 m-1 rounded-lg items-center justify-center`}
        style={{ width: DAY_SIZE, height: DAY_SIZE }}
      />
    )

  return (
    <TouchableOpacity
      className={`bg-zinc-900 border-2 border-zinc-800 m-1 rounded-lg items-center justify-center`}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.4}
    >
      {day && <Text className='text-white'>{day}</Text>}
    </TouchableOpacity>
  )
}
