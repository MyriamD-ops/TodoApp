import ExempleSwipe from '@/components/ExempleSwipe';
import FormAdd from '@/components/FormAdd';
import Header from '@/components/Header';
import List from '@/components/List';
import React, { useState } from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';


const index = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <GestureHandlerRootView>
      <Provider store={store}>
      <View style={styles.container}>
        <ExempleSwipe />
        <Header/>
        <List/>
        
        {/* Bouton flottant */}
        <TouchableOpacity 
          style={styles.fab}
          onPress={() => setModalVisible(true)}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Modal pour ajouter une tâche */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
              <FormAdd onTaskAdded={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
        </View>
    </Provider>
    </GestureHandlerRootView>  
  );
}

export default index

