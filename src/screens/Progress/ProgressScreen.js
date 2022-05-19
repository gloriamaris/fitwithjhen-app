import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView, View } from 'react-native'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'
import { Card, Layout, Text } from '@ui-kitten/components'
import HabitTrackerSection from '../../components/HabitTrackerSection'

const ProgressScreen = props => {
  const MiniCards = () => (
    <Layout style={styles.row}>
      <Card style={styles.rowChild} appearance='outline'>
        <Text category='h5'>4 Sessions</Text>
        <Text category='s2'>to follow</Text>
      </Card>
      <Card style={styles.rowChild} appearance='outline'>
        <Text category='h5'>5 Habits</Text>
        <Text category='s2'>to incorporate </Text>
      </Card>
    </Layout>
  )

  const HabitsCard = () => {
    const habits = [
      {
        id: 1,
        title: 'Complete workout session',
        tally: ['🙂', '😃', '🥴', '']
      },
      {
        id: 2,
        title: '10-min stretching on off days',
        tally: ['🙂', '🙂', '', '']
      },
      {
        id: 3,
        title: 'Add vegetables during lunch and dinner',
        tally: ['😄', '😄', '😅', '😐', '', '', '']
      },
      {
        id: 4,
        title: 'Two glasses of water before all meals',
        tally: ['😄', '😄', '🙂', '🙂', '', '', '']
      }
    ]

    return (
      <Card style={styles.card} appearance='outline' status='primary'>
        {
          habits.map((item, i) => {
            return (
              <View key={i} style={styles.habitSection}>
                <Text style={styles.habitGap} category='s1'>{item.title}</Text>
                <Text category='h6'>{item.tally.map((tallyItem, j) => tallyItem)}</Text>
              </View>
            )
          })

        }
        </Card>
    )
  }

  const SingleCard = () => (
    <Card style={styles.card} appearance='outline' status='primary'>
      <Text category='h5'>4x a week</Text>
      <Text category='s1'>Guided Workout program</Text>
      <Text>With equipment: dumbbells, kettle</Text>
    </Card>
  )

  const WeeklySessions = () => {
    const completedWorkouts = [
      {
        id: 1,
        date_completed: 'May 16, 2022',
        workout_session: {
          schedule: 'Week 1, Day 1',
          muscle_group: 'Lower body',
          exercise_type: 'Circuit training'
        },
        rpe: {
          value: 6,
          text: 'Hard Activity'
        }
      },
      {
        id: 2,
        date_completed: 'May 18, 2022',
        workout_session: {
          schedule: 'Week 1, Day 2',
          muscle_group: 'Upper body',
          exercise_type: 'Interval training'
        },
        rpe: {
          value: 8,
          text: 'Hard Intensity'
        }
      },
      {
        id: 3,
        date_completed: 'May 20, 2022',
        workout_session: {
          schedule: 'Week 1, Day 3',
          muscle_group: 'Core technique',
          exercise_type: 'Circuit training'
        },
        rpe: {
          value: 4,
          text: 'Comfortable with some effort'
        }
      },
    ]

    const Header = props => {
      const { item } = props
      return (
        <View
          style={styles.header}
          {...props}>
          <Text category='s2'>{item.date_completed}</Text>
          <Text category='h6'>{`${item.workout_session.muscle_group}: ${item.workout_session.exercise_type}`}</Text>
          <Text>{item.workout_session.schedule}</Text>
        </View>
      )
    }

    return (
      <>
        {
          completedWorkouts.map((item, i) => {
            return (
              <Card
                key={i}
                style={styles.weeklySessions}
                appearance='outline'
                status='info'
                header={<Header item={item} />}
              >
                <Text>{`${item.rpe.value}/10: ${item.rpe.text}`}</Text>
              </Card>
            )
          })
        }
      </>
    )
  }

  return (
    <AuthLayout>
      <ScrollView>
        <Text style={styles.fitnessTitle} category='h5' status='primary'>Progress</Text>
        <SingleCard />
        <MiniCards />
        <Text style={styles.progressTitle} category='h6'>Weekly Sessions</Text>
        <WeeklySessions />
        <Text style={styles.progressTitle} category='h6'>Habits</Text>
        <HabitTrackerSection fromScreen={true} />
      </ScrollView>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  card: {
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10
  },
  rowChild: {
    width: '49.2%',
    marginHorizontal: 2
  },
  fitnessTitle: {
    marginBottom: 10
  },
  progressTitle: {
    marginTop: 10,
    marginBottom: 10
  },
  weeklySessions: {
    marginTop: 5,
    marginBottom: 5
  },
  habitSection: {
    marginBottom: 20
  },
  habitGap: {
    marginBottom: 5
  }
})

export default ProgressScreen
