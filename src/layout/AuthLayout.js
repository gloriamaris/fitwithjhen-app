import React, { useState } from 'react'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { BottomNavigation, BottomNavigationTab, Divider, Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { screens } from '../constants/screens'

const SettingsIcon = props => (
  <Icon {...props} name='settings' />
)

const TopNavigationDividerShowcase = () => {
  const renderSettingsAction = () => (
    <TopNavigationAction icon={SettingsIcon} />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        accessoryRight={renderSettingsAction}
        title='FITWITHJHEN'
      />
      <Divider />
    </SafeAreaView>
  )
}

const BottomNavigationShowcase = props => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const HomeIcon = props => <Icon {...props} name='home' />
  const ExploreIcon = props => <Icon {...props} name='flash' />
  const ProgressIcon = props => <Icon {...props} name='bar-chart' />
  const ProfileIcon = props => <Icon {...props} name='person' />

  const onSelect = index => {
    console.log({ children: props.children })
    const routeObj = screens.find(item => item.id === index)
    // props.navigate(routeObj.name)
    setSelectedIndex(index)
  }

  return (
    <BottomNavigation
      style={styles.bottomNav}
      selectedIndex={selectedIndex}
      onSelect={index => onSelect(index)}
      appearance='noIndicator'
    >
      <BottomNavigationTab title='Home' icon={HomeIcon} />
      <BottomNavigationTab title='Explore' icon={ExploreIcon} />
      <BottomNavigationTab title='Progress' icon={ProgressIcon} />
      <BottomNavigationTab title='Profile' icon={ProfileIcon} />
    </BottomNavigation>
  )
}

const AuthLayout = props => {
  return (
    <Layout style={styles.container} level='1'>
      <Layout style={styles.topNav}>
        <TopNavigationDividerShowcase />
      </Layout>
      <Layout style={styles.childProps}>
        {props.children}
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  topNav: {
    height: '10%',
    marginTop: 40
  },
  bottomNav: {
    height: '10%'
  },
  childProps: {
    height: '80%',
    marginHorizontal: 20
  },
  container: {
    flex: 1,

    flexDirection: 'col',
    height: '100%'
  }
})

export default AuthLayout
