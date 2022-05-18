import React, { useState } from 'react'
import { Card, Icon, Menu, MenuItem, Text } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'

const ProfileScreen = props => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const ForwardIcon = props => <Icon {...props} name='arrow-ios-forward' />

  console.log({ props })

  const profileScreens = [
    {
      id: 0,
      title: 'Edit Profile',
      value: 'EditProfile',
      accessoryRight: ForwardIcon
    },
    {
      id: 1,
      title: 'View Client Health Info',
      value: 'ClientHealth',
      accessoryRight: ForwardIcon
    },
    {
      id: 0,
      title: 'View Fitness Goals',
      value: 'FitnessGoals',
      accessoryRight: ForwardIcon
    },
    {
      id: 0,
      title: 'Logout',
      value: 'Logout',
      accessoryRight: null
    },
  ]


  const onSelect = index => {
    const routeObj = profileScreens.find((item, i) => item.id === index.row)
    props.navigation.navigate(routeObj.value)
    setSelectedIndex(index)
  }
  
  return (
    <AuthLayout>
      <Text style={styles.title} category='h5' status='primary'>Profile</Text>
      <Card style={styles.row}>
        <View style={styles.profile}>
          <Text category='s1' status='primary'>John Edward R. Labor</Text>
          <Text category='p2'>Male, 25</Text>
        </View>
      </Card>
      <Menu
        style={styles.menu}
        onSelect={index => onSelect(index)}>
        {
          profileScreens.map((item, i) => <MenuItem key={i} title={item.title} accessoryRight={item.accessoryRight}/>)
        }
      </Menu>
      <BottomNavigationSection {...props} />
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  menu: {
    marginTop: 20,
  },
  title: {
    marginBottom: 10,
  },
  row: {
    display: 'flex',
  },
  avatar: {
    width: '20%'
  },
  profile: {
    width: '80%'
  }
})

export default ProfileScreen
