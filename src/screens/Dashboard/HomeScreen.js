import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button, Card, Text } from '@ui-kitten/components'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'
import ExploreSection from '../../components/ExploreSection'

const UpperSection = () => (
  <>
    <View style={styles.subtext}>
      <Text category='s2' status='primary'>TODAY</Text>
    </View>
    <View style={styles.row}>
      <Text category='h6'>
        Conditions are never perfect. Now is the time to
        create the life you want.
      </Text>
    </View>
    <Button style={styles.installButton}>START WORKOUT</Button>
  </>
)

const HabitTrackerSection = () => {
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
    <View style={styles.habitSection}>
      <View style={styles.subtext}>
        <Text style={styles.habitTitle} category='h5'>Perfect week, Monique!</Text>
      </View>
      <Card>
        <Text style={styles.trackerTitle} category='h6'>Habit Tracker</Text>
        {
          habits.map((item, i) => {
            return (
              <View>
                <Text key={i}>{item.title}</Text>
                <Text category='h6' style={styles.trackerContent}>{item.tally.map((tallyItem, j) => tallyItem)}</Text>
              </View>
            ) 
          })
        }
      </Card>
    </View>
  )
}


const HomeScreen = props => {
  return (
    <AuthLayout>
      <ScrollView>
        <UpperSection />
        <HabitTrackerSection />
        <ExploreSection />
      </ScrollView>
      <BottomNavigationSection {...props}/>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20
  },
  trackerContent: {
    marginBottom: 10
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    margin: 8
  },
  installButton: {
    marginVertical: 4
  }
})

export default HomeScreen
