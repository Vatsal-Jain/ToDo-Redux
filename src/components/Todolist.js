import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { useDispatch } from 'react-redux';

const Todolist = () => {
    const todos = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const itemDelete = (id) => {
        dispatch(
            deleteTask({
                id: id,

            })
        )
    }

const renderItem = ({item}) => {
    return(
        <View style={styles.list}>
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={() => itemDelete(item.id)}>
        <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
        </View>
    )
}

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List</Text>
      <View style={styles.item}>
      <FlatList
      
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      />
      </View>
    </View>
  )
}

export default Todolist

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        width:'100%',
        justifyContent:'center',
        marginTop:20
    },
    list:{
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:1,
        alignSelf:'center',
        width:'100%',
        marginVertical:10,
        padding:10,
        flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
    },
    item:{
margin:20
    },

    delete:{
        color:'red',
        fontSize:16
    },
    heading:{
        fontSize:25
    }
})