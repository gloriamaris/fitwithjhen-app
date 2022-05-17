import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Divider, Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const SettingsIcon = props => (
  <Icon {...props} name='settings' />
)

const TopNavigationDividerShowcase = () => {
  const renderSettingsAction = () => (
    <TopNavigationAction icon={SettingsIcon} />
  )

  return (
    <>
      <TopNavigation
        accessoryRight={renderSettingsAction}
        title='FITWITHJHEN'
      />
      <Divider />
    </>
  )
}

const BottomNavigationShowcase = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const HomeIcon = props => <Icon {...props} name='home' />
  const ExploreIcon = props => <Icon {...props} name='flash' />
  const ProgressIcon = props => <Icon {...props} name='bar-chart' />
  const ProfileIcon = props => <Icon {...props} name='person' />

  return (
    <BottomNavigation
      style={styles.bottomNav}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      appearance='noIndicator'
    >
      <BottomNavigationTab title='Home' icon={HomeIcon} />
      <BottomNavigationTab title='Explore' icon={ExploreIcon} />
      <BottomNavigationTab title='Progress' icon={ProgressIcon} />
      <BottomNavigationTab title='Profile' icon={ProfileIcon} />
    </BottomNavigation>
  )
}

const AuthLayout = props => (
  <Layout style={styles.container} level='1'>
    <Layout style={styles.topNav}>
      <TopNavigationDividerShowcase />
    </Layout>
    <Layout style={styles.childProps}>
      {props.children}
    </Layout>
    <Layout style={styles.bottomNav}>
      <BottomNavigationShowcase />
    </Layout>
  </Layout>
);

const styles = StyleSheet.create({
  topNav: {
    paddingTop: '10%',
    height: '10%'
  },
  bottomNav: {
    height: '10%',
  },
  childProps: {
    height: '80%'
  },
  container: {
    flex: 1,
    flexDirection: 'col',
    marginHorizontal: 25,
    height: '100%',
    overflow: 'hidden'
  }
})

export default AuthLayout