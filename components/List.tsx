import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ItemTask from './ItemTask';
import NoTask from './NoTask';
import StatTask from './StatTask';

const List = () => {

  // Lecture de la liste des tâches dans le store
  const dataTasks = useSelector((state) => state.task);

  return (
    <FlatList
      data={dataTasks}
      renderItem={({ item }) => <ItemTask task={item} />}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={NoTask}
      ListFooterComponent={StatTask}
    />


  )
}

export default List