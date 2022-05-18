import React, { useState } from 'react'
import { Button, Card, Datepicker, Icon, IndexPath, Input, Select, SelectItem, Text } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import BottomNavigationSection from '../../components/BottomNavigationSection'
import AuthLayout from '../../layout/AuthLayout'

const CalendarIcon = props => (
  <Icon {...props} name='calendar' />
)

const Footer = props => (
  <View  {...props} style={[props.style, styles.footerContainer]}>
    <Button
      style={styles.footerControl}
      size='small'
      status='basic'>
      CANCEL
    </Button>
    <Button
      style={styles.footerControl}
      size='small'>
      SAVE CHANGES
    </Button>
  </View>
)

const EditProfileScreen = props => {
  const [value, setValue] = useState('John Edward R. Labor')
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0))
  const [date, setDate] = useState(new Date())
  const [height, setHeight] = useState(166)

  return (
    <AuthLayout>
      <View>
        <Text style={styles.fitnessTitle} category='h5' status='primary'>Edit Profile</Text>
        <Card 
          style={styles.card}
          appearance='outline'
          status='primary'
          footer={Footer}
          >
          <Input
            style={styles.fitnessTitle}
            placeholder='Full name'
            value={value}
            label='Full Name'
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Select
            style={styles.fitnessTitle}
            label='Gender'
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <SelectItem title='Female' />
            <SelectItem title='Male' />
            <SelectItem title='Prefer not to say' />
          </Select>
          <Datepicker
              style={styles.fitnessTitle}
              label='Birthdate'
              placeholder='Pick Date'
              date={date}
              onSelect={nextDate => setDate(nextDate)}
              accessoryRight={CalendarIcon}
              />
          <Input
            placeholder='Height in cm'
            value={height}
            label='Height (in cm)'
            onChangeText={nextHeight => setHeight(nextHeight)}
            />
        </Card>
      </View>
      <BottomNavigationSection {...props} />
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  fitnessTitle: {
    marginBottom: 10
  },
  card: {
    marginBottom: 10
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 5,
  },
})

export default EditProfileScreen