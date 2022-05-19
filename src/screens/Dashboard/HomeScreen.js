import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Modal, Pressable } from 'react-native'
import { Button, Card, Text } from '@ui-kitten/components'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'
import ExploreSection from '../../components/ExploreSection'
import HabitTrackerSection from '../../components/HabitTrackerSection'

const UpperSection = () => {
  const [visible, setVisible] = useState(false)
  
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
        onPress={() => setVisible(!visible)}
        style={styles.installButton}
        >
          START WORKOUT
      </Button>
      <Modal 
        animationType='fade'
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(!visible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setVisible(!visible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
      </Modal>
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

export default HomeScreen
