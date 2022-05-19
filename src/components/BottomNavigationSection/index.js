import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomNavigation, BottomNavigationTab, Button, Icon, Modal, Text } from '@ui-kitten/components'
import { screens } from '../../../App'
import { useHookstate } from '@hookstate/core'
import { routeStore } from '../../store'

const BottomNavigationSection = props => {
  // const [selectedIndex, setSelectedIndex] = React.useState(0)
  // const [visible, setVisible] = React.useState(false)
  const globalState = useHookstate(routeStore)

  const HomeIcon = props => <Icon {...props} name='home' />
  const ExploreIcon = props => <Icon {...props} name='flash' />
  const ProgressIcon = props => <Icon {...props} name='bar-chart' />
  const ProfileIcon = props => <Icon {...props} name='person' />
  const PlusOutlineIcon = props => <Icon {...props  } name='plus-outline' />
  const { selectedIndex, routeName } = globalState
  const value = selectedIndex.get()

  // console.log(selectedIndex.get())

  useEffect(() => {
    console.log('====== ', selectedIndex.get(), routeName.get())
  }, [
    value
  ])

  const onSelect = index => {
    const routeObj = screens.find((item, i) => item.id === index)
    
    selectedIndex.set(index)
    routeName.set(routeObj.name)
  }

  return (
    <BottomNavigation
      style={styles.bottomNav}
      appearance='noIndicator'
      selectedIndex={value}
      onSelect={index => onSelect(index)}
    >
      <BottomNavigationTab title='Home' icon={HomeIcon} />
      <BottomNavigationTab title='Explore' icon={ExploreIcon} />
      <View>
        <Button 
          status='primary'
          accessoryLeft={PlusOutlineIcon}
          style={styles.plusIcon}
          onPress={() => setVisible(!visible)}
          ></Button>
      </View>
      <BottomNavigationTab title='Progress' icon={ProgressIcon} />
      <BottomNavigationTab title='Profile' icon={ProfileIcon} />
      {/* <Modal 
        animationType='fade'
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(!visible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                onPress={() => setVisible(!visible)}
              >
                <Text status='basic'>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
      </Modal>  */}
    </BottomNavigation>
  )
}

const styles = StyleSheet.create({
  bottomNav: {
    height: '0%',
    marginTop: -30,
    paddingTop: 0
  },
  plusOutline: {
    height: '100%',
    fontSize: 100
  },
  plusIcon: {
    borderRadius: 100,
    width: 60,
    height: 60,
    marginLeft: 10
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

export default BottomNavigationSection
