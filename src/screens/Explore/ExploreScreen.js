import React from 'react'
import { ScrollView } from 'react-native'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'
import ExploreSection from '../../components/ExploreSection'

const ExploreScreen = props => (
  <AuthLayout>
    <ScrollView>
      <ExploreSection fromScreen={true} />
    </ScrollView>
    <BottomNavigationSection {...props} /> 
  </AuthLayout>
)

export default ExploreScreen
