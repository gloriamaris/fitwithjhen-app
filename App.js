import React, { useState } from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { default as theme } from './custom-theme.json'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/Dashboard/HomeScreen'
import ExploreScreen from './src/screens/Explore/ExploreScreen'
import ProfileScreen from './src/screens/Profile/ProfileScreen'
import ProgressScreen from './src/screens/Progress/ProgressScreen'
import EditProfileScreen from './src/screens/EditProfile/EditProfileScreen'
import { LogBox } from 'react-native'
import { StatusBar } from 'react-native'

const Stack = createStackNavigator()

export const screens = [
  {
    id: 0,
    name: 'Home',
    component: HomeScreen
  },
  {
    id: 1,
    name: 'Explore',
    component: ExploreScreen
  },
  {
    id: 3,
    name: 'Progress',
    component: ProgressScreen
  },
  {
    id: 4,
    name: 'Profile',
    component: ProfileScreen
  },
  {
    id: 5,
    name: 'EditProfile',
    component: EditProfileScreen
  }
]

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

LogBox.ignoreAllLogs()
export default () => {
  StatusBar.setBarStyle('dark', true)

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <StatusBar
          animated={true}
          backgroundColor='#61dafb'
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <NavigationContainer>
          <Stack.Navigator>
            {screens.map((item, i) => (
              <Stack.Screen
                key={i}
                name={item.name}
                component={item.component}
                options={{ headerShown: false }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )  
}