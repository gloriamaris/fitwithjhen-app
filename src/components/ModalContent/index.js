import React from 'react'
import { Card, Text } from '@ui-kitten/components'
import { View, StyleSheet } from 'react-native'

const ModalContent = props => {

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
        <Text category='h6'>Habit Tracker</Text>
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
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'col',
    height: '100%'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: '30%',
    height: '100pt',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  trackerContent: {
    marginBottom: 15
  },
})

export default ModalContent