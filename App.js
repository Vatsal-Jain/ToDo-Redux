import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import Homescreen from './src/screens/Homescreen'
import Todolist from './src/components/Todolist'
import store from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {
  const RootApp = () => {
  return (
    <SafeAreaView>
      <Homescreen />
      <Todolist />
    </SafeAreaView>
  )
};

return(
  <Provider store={store}>
    <RootApp />
  </Provider>
)
}

