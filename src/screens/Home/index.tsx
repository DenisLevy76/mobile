import { View, Text, ScrollView } from 'react-native'
import { DAY_SIZE, HabitDay } from '../../components/HabitDay'
import { HeaderComponent } from '../../components/HeaderComponent'
import { generateDatesFromYearBeginning } from '../../utils/generateDatesFromYearBeginning'

const weekDays = ['d', 's', 't', 'q', 'q', 's', 's']
const dateFromYearStart = generateDatesFromYearBeginning()

const minSummaryDates = 18 * 7 // 4 weeks
const amountOfSummaryDatesToFill = minSummaryDates - dateFromYearStart.length

export const Home: React.FC = () => {
  return (
    <View className='bg-main-bg flex-1 px-8 py-20'>
      <HeaderComponent />
      <View className='flex-row w-full'>
        {weekDays.map((day, index) => (
          <View
            className='items-center justify-center  mx-1'
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
            key={`${day}-${index}`}
          >
            <Text className='text-white text-xl font-bold uppercase'>
              {day}
            </Text>
          </View>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-row w-full flex-wrap items-center'>
          {dateFromYearStart.map((date, index) => (
            <HabitDay
              day={date.getDate()}
              key={`${date}-${index}`}
            />
          ))}
          {amountOfSummaryDatesToFill > 0 &&
            Array.from({ length: amountOfSummaryDatesToFill }).map(
              (_, index) => (
                <HabitDay
                  key={`${new Date().toISOString()}-${index}`}
                  disabled
                />
              )
            )}
        </View>
      </ScrollView>
    </View>
  )
}
