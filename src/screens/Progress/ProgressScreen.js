import React from 'react'
import { ScrollView } from 'react-native'
import AuthLayout from '../../layout/AuthLayout'
import BottomNavigationSection from '../../components/BottomNavigationSection'
import ExploreSection from '../../components/ExploreSection/ExploreSection'

const ProgressScreen = props => (
  <AuthLayout>
    <ScrollView>
      <ExploreSection />
    </ScrollView>
    <BottomNavigationSection {...props} /> 
  </AuthLayout>
)

export default ProgressScreen
