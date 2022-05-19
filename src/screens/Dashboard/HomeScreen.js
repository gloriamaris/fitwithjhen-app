import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Modal, Pressable } from 'react-native'
import { Button, Card, Icon, Text } from '@ui-kitten/components'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'
import ExploreSection from '../../components/ExploreSection'
import HabitTrackerSection from '../../components/HabitTrackerSection'
import store from '../../store'
import withNavigation from '../../hoc/withNavigation'

const UpperSection = () => {
  const [isWorkoutStarted, setWorkoutStarted] = useState(false)

  const onPress = value => {
    setWorkoutStarted(!value)
  }

  const TimerIcon = props => (
    <Icon
      {...props}
      name='clock-outline'
      />
  )

  return (
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
      <Button 
        onPress={() => onPress(isWorkoutStarted)}
        style={styles.installButton}
        status={isWorkoutStarted ? 'info' : 'primary'}
        >
          { isWorkoutStarted ? 'FINISH WORKOUT' : 'START WORKOUT' }
      </Button>
    </>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: '80%',
    height: '40%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalBackground: {
    backgroundColor: 'black'
  }
})

// withNavigation(HomeScreen)

export default withNavigation(HomeScreen)
