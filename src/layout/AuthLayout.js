import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Divider, Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import BottomNavigationSection from '../components/BottomNavigationSection'

const TopNavigationDividerShowcase = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        alignment='center'
        title='FITWITHJHEN'
      />
      <Divider />
    </SafeAreaView>
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
      <View>
        <BottomNavigationSection {...props} />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  topNav: {
    height: '10%',
    marginTop: 40
  },
  bottomNav: {
    height: '10%',
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
