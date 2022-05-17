import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components'
import { screens } from '../../constants/screens'

const BottomNavigationSection = props => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const HomeIcon = props => <Icon {...props} name='home' />
  const ExploreIcon = props => <Icon {...props} name='flash' />
  const ProgressIcon = props => <Icon {...props} name='bar-chart' />
  const ProfileIcon = props => <Icon {...props} name='person' />
  const { navigation, route } = props

  useEffect(() => {
    route?.params?.selectedIndex && setSelectedIndex(props.selectedIndex)

    console.log({ propsSelectedIndex: route?.params?.selectedIndex || null })
  }, [])
  
  const onSelect = index => {
    const routeObj = screens.find((item, i) => i === index)
    navigation.navigate(routeObj.name, { selectedIndex: index })
    setSelectedIndex(index)
  }

  return (
    <BottomNavigation
      style={styles.bottomNav}
      appearance='noIndicator'
      selectedIndex={route?.params?.selectedIndex || selectedIndex}
      onSelect={index => onSelect(index)}
    >
      <BottomNavigationTab title='Home' icon={HomeIcon} />
      <BottomNavigationTab title='Explore' icon={ExploreIcon} />
      <BottomNavigationTab title='Progress' icon={ProgressIcon} />
      <BottomNavigationTab title='Profile' icon={ProfileIcon} />
    </BottomNavigation>
  )
}

const styles = StyleSheet.create({
  bottomNav: {
    height: '10%',
    position: 'fixed'
  },
})

export default BottomNavigationSection
