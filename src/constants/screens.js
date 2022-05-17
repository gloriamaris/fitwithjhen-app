import HomeScreen from "../screens/Dashboard/HomeScreen";
import ExploreScreen from "../screens/Explore/ExploreScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import ProgressScreen from "../screens/Progress/ProgressScreen";

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
    name: 'Progress',
    component: ProgressScreen
  },
  {
    id: 3,
    name: 'Profile',
    component: ProfileScreen
  },
]