import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Pressable } from 'react-native'
import { Divider, Icon, Layout, Modal, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import BottomNavigationSection from '../components/BottomNavigationSection'
import { useHookstate } from '@hookstate/core'
import { routeStore } from '../store'
import HabitTrackerSection from '../components/HabitTrackerSection'
import ModalContent from '../components/ModalContent'

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
  const globalState = useHookstate(routeStore)
  const { visible } = globalState

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

      <Modal
        animationType='fade'
        transparent={true}
        visible={visible.get()}
        onRequestClose={() => visible.set(!visible)}
        style={styles.modalView}
      >
        <View style={styles.centeredView}>
          <Pressable onPress={() => visible.set(!visible)}>
            <View>
              <ModalContent />
            </View>
          </Pressable>
        </View>
      </Modal>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: '90%',
    height: '50%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})

export default AuthLayout
