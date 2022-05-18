import React, { useState } from 'react'
import { Avatar, Card, Icon, Layout, Menu, MenuItem, Text } from '@ui-kitten/components'
import { ScrollView, StyleSheet, View } from 'react-native'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'

const ProfileScreen = props => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const ForwardIcon = props => <Icon {...props} name='arrow-ios-forward' />

  return (
    <AuthLayout>
      <ScrollView>
        <Text style={styles.title} category='h5' status='primary'>Profile</Text>
        <Card style={styles.row}>
          <View style={styles.avatar}>
            <Avatar size='large' source={require('../../../assets/img/user_icon.png')} />
          </View>
          <View style={styles.profile}>
            <Text category='s1' status='primary'>John Edward R. Labor</Text>
            <Text category='p2'>Male, 25</Text>
          </View>
        </Card>
        <View style={styles.menu}>
          <Menu
            onSelect={index => setSelectedIndex(index)}>
            <MenuItem title='Edit Profile' accessoryRight={ForwardIcon} />
            <MenuItem title='View Client Health Info' accessoryRight={ForwardIcon} />
            <MenuItem title='View Fitness Goals' accessoryRight={ForwardIcon} />
            <MenuItem title='Logout' />
          </Menu>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  avatar: {
    width: '20%'
  },
  profile: {
    width: '100%'
  }
})

export default ProfileScreen
