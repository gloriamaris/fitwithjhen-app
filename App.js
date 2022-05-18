import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { default as theme } from './custom-theme.json'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Dashboard/HomeScreen'
import ExploreScreen from './src/screens/Explore/ExploreScreen'
import ProfileScreen from './src/screens/Profile/ProfileScreen'
import ProgressScreen from './src/screens/Progress/ProgressScreen'
import EditProfileScreen from './src/screens/EditProfile/EditProfileScreen'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

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
    id: 2,
    name: 'Profile',
    component: ProfileScreen
  },
  {
    id: 3,
    name: 'Progress',
    component: ProgressScreen
  },
  {
    id: 4,
    name: 'EditProfile',
    component: EditProfileScreen
  },
]

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Stack.Navigator>
          {screens.map((item, i) => <Stack.Screen key={i} name={item.name} component={item.component} options={{ headerShown: false }} />)}
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
)
