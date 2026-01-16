import { styles } from '@/app/(tabs)/styles'
import { modifier, supprimer } from '@/app/store/slices/taskSlice'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

const ItemTask = ({ task }) => {
  console.log(task)

  const dispatch = useDispatch()  // pour écrire dans le store

  const toggleTodo = (id) => {
    dispatch(modifier(id))
    console.log(id)
  } // End toggleTodo

  const deleteTodo = (id) => {
    console.log('delete:', id)
    dispatch(supprimer(id)) // supprimer la tâche id dans le store
  } // End delete

  return (

    <View style={styles.todoItem}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleTodo(task.id)}
      >
        <View
          style={[
            styles.checkboxInner,
            task.completed && styles.checkboxChecked,
          ]}
        >
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>

      <Text
        style={[
          styles.todoText,
          task.completed && styles.todoTextCompleted,
        ]}
      >
        {task.title}
      </Text>

      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => deleteTodo(task.id)}
      >
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>

  )
}

export default ItemTask
