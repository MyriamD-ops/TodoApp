import ExempleSwipe from '@/components/ExempleSwipe';
import FormAdd from '@/components/FormAdd';
import Header from '@/components/Header';
import List from '@/components/List';
import React from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { styles } from './styles';


const index = () => {

  return (
      <GestureHandlerRootView>
      <Provider store={store}>
      <View style={styles.container}>
        <ExempleSwipe />
        <Header/>
        <FormAdd/>
        <List/>
        </View>
    </Provider>
    </GestureHandlerRootView>  
  );
}

export default index

