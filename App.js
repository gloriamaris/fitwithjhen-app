import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import HomeScreen from './src/screens/Dashboard/HomeScreen';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './custom-theme.json';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from './src/screens/Explore/ExploreScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import ProgressScreen from './src/screens/Progress/ProgressScreen';

const Stack = createStackNavigator();

const screens = [
  {
    name: 'Home',
    component: HomeScreen
  },
  {
    name: 'Explore',
    component: ExploreScreen
  },
  {
    name: 'Profile',
    component: ProfileScreen
  },
  {
    name: 'Progress',
    component: ProgressScreen
  },
]

export default () => (
  <>
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Stack.Navigator>
          {screens.map((item, i) => <Stack.Screen key={i} name={item.name} component={item.component} options={{ headerShown: false }}/>)}
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  </>
);