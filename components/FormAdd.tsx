import { styles } from '@/app/(tabs)/styles'
import { ajouter } from '@/app/store/slices/taskSlice'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

const FormAdd = () => {
    // Déclaration de la variable TextTache
    const [textTache, setTextTache] = useState('')
    const dispatch = useDispatch() ;

    // Fonction pour ajouter une tâche
    const addTodo = () => {  
    console.log('textTache :', textTache) 

    // Formatage de la tâche
    const newTodo = {
              id: Date.now().toString(),
              title: textTache,
              completed: false,
            };
   // Enregistrement de la tâche dans le store
   dispatch (ajouter(newTodo)) ;
   setTextTache('');
   console.log('newTodo :', newTodo)
 }   // end addTodo

  return (
        <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ajouter une nouvelle tâche..."
              value={textTache}
              onChangeText={setTextTache}
              onSubmitEditing={addTodo}
            />
            <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
              <Text style={styles.addBtnText}>+</Text>
            </TouchableOpacity>
          </View>
  )
}

export default FormAdd
