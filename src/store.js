import { createState } from '@hookstate/core'

export const routeStore = createState({
  selectedIndex: 0,
  routeName: ''
})

// export default store