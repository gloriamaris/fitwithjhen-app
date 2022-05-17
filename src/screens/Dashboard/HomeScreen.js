import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';
import AuthLayout from '../../layout/AuthLayout';
import Image from 'react-native';
import ExploreSection from '../../components/ExploreSection/ExploreSection';

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
      tally: ["Yes", "Yes", "", ""],
    },
    {
      id: 2,
      title: '10-min stretching on off days',
      tally: ["Yes", "Yes", "", ""],
    },
    {
      id: 3,
      title: 'Add vegetables during lunch and dinner',
      tally: ["Yes", "Yes", "Yes", "No", "", "", ""],
    },
    {
      id: 4,
      title: 'Two glasses of water before all meals',
      tally: ["Yes", "Yes", "Yes", "Yes", "", "", ""],
    },
  ]

  return (
    <>
      <View style={styles.subtext}>
        <Text style={styles.habitTitle} category='h5'>Perfect week, Monique!</Text>
      </View>
      <Card>
        <Text style={styles.trackerTitle} category='h6' >Habit Tracker</Text>
        {
          habits.map((item, i) => {
            return <Text key={i} style={styles.trackerContent}>{item.title}</Text>
          })
        }
      </Card>
    </>
  )
}

const HomeScreen = () => (
  <AuthLayout>
    <UpperSection />
    <HabitTrackerSection />
    <ExploreSection />
  </AuthLayout>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  trackerContent: {
    marginBottom: 20,
  },
  trackerTitle: {
    marginBottom: 20,
  },
  habitTitle: {
    marginTop: 10
  }, 
  subtext: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    margin: 8,
  },
  installButton: {
    marginVertical: 4,
  },
})

export default HomeScreen