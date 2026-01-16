import FormAdd from '@/components/FormAdd'
import Header from '@/components/Header'
import List from '@/components/List'
import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { styles } from './styles'


const index = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header/>
        <FormAdd/>
        <List/>
        </View>
    </Provider>
  ) 
}

export default index

