import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'
import ExploreSection from '../../components/ExploreSection'
import { Card, Layout, Text } from '@ui-kitten/components'

const ProgressScreen = props => {
  const MiniCards = () => (
    <Layout style={styles.row}>
      <Card style={styles.rowChild} appearance='outlined'>
        <Text style={styles.progressTitle} category='h5'>Workouts</Text>
      </Card>
      <Card style={styles.rowChild} appearance='outlined'>
        <Text style={styles.progressTitle} category='h5'>Habits</Text>
      </Card>
    </Layout>
  )

  const SingleCard = () => (
    <Card style={styles.card} appearance='outlined' status='primary'>
      <Text style={styles.progressTitle} category='h5'>4x a week</Text>
      <Text>Guided Workout program</Text>
      <Text>With equipment: dumbbells, kettle</Text>
    </Card>
  )

  return (
    <AuthLayout>
      <ScrollView>
        <Text style={styles.progressTitle} category='h5'>My Fitness Program</Text>
        <SingleCard />
        <MiniCards />
        <Text style={styles.progressTitle} category='h5'>Workouts</Text>
        <SingleCard />
        <SingleCard />
        <Text style={styles.progressTitle} category='h5'>Habits</Text>
        <MiniCards />
        <MiniCards />
      </ScrollView>
      <BottomNavigationSection {...props} />
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10
  },
  progressTitle: {
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10
  },
  rowChild: {
    width: '50%',
    marginHorizontal: 5
  }
})

export default ProgressScreen
