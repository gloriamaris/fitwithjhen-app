import React from 'react'
import { ScrollView } from 'react-native'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'
import ExploreSection from '../../components/ExploreSection'
import withNavigation from '../../hoc/withNavigation'

const ExploreScreen = props => (
  <AuthLayout>
    <ScrollView>
      <ExploreSection fromScreen={true} />
    </ScrollView>
  </AuthLayout>
)

export default withNavigation(ExploreScreen)
