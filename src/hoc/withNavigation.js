import React, { useEffect } from 'react'
import { useHookstate } from '@hookstate/core'
import { routeStore } from '../store'

const withNavigation = WrappedComponent => props => {
  const globalState = useHookstate(routeStore)
  const { selectedIndex, routeName } = globalState
  const { navigation } = props

  console.log(routeName.get({ routeName }))
  console.log(JSON.stringify(routeName.get()))  
  useEffect(() => {
    routeName.get() && navigation.navigate(routeName.get())
    console.log(JSON.stringify(routeName.get()))  
  }, [
    routeName.get()
  ])

  return <WrappedComponent {...props} />
 /*  return <WrappedComponent {...props} />

  class HOC extends Component {
    render() {
    }
  } */
}

export default withNavigation