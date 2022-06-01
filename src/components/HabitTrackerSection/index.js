import React from 'react'
import { Card, Text } from '@ui-kitten/components'
import { View, StyleSheet } from 'react-native'

const HabitTrackerSection = props => {

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

  const addtlProps = props?.fromScreen && {
    appearance: 'outline',
    status: 'primary'
  }

  return (
    <View style={styles.habitSection}>
      <View style={styles.subtext}>
        <Text style={styles.habitTitle} category='h5'>Perfect week, John!</Text>
      </View>
      <Card
        {...addtlProps}
      >
        <Text style={styles.trackerTitle} category='h6'>Habit Tracker</Text>
        {
          habits.map((item, i) => {
            return (
              <View key={i}>
                <Text>{item.title}</Text>
                <Text category='h6' style={styles.trackerContent}>{item.tally.map((tallyItem, j) => tallyItem)}</Text>
              </View>
            ) 
          })
        }
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20
  },
  trackerContent: {
    marginBottom: 15
  },
  trackerTitle: {
    marginBottom: 10
  },
  habitTitle: {
    marginTop: 20
  },
  habitSection: {
    marginBottom: 20
  },
  subtext: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    margin: 8
  },
})

export default HabitTrackerSection