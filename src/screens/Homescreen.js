import { View, Text ,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../redux/taskSlice';

const Homescreen = () => {
    const dispatch = useDispatch();

    const onSubmitTask = () => {
        if(wish.trim().length === 0){
  alert('Please type Something')
setWish('');       
return ;
}

dispatch(
    addTask({
    task: wish,
    })
)

setWish('');
    }




    const [wish,setWish] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <TextInput
      placeholder='enter wish'
      style={styles.input}
      placeholderTextColor='grey'
      value={wish}
      onChangeText={(text) => setWish(text)}
      />
      <TouchableOpacity style={styles.addButton}
      onPress={onSubmitTask}
      >
        <Text style={styles.textadd}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    
        alignItems:'center',
        marginTop:20
    },
    heading:{
        fontSize:30,
        color:'black',
        fontWeight:'bold'
    },
    input:{
        width:'90%',
        backgroundColor:'white',
        marginTop:50,
        padding:15,
        color:'black',
        borderRadius:10,
        fontSize:20,
        borderColor:'black',
        borderWidth:1
    },
    addButton:{
        backgroundColor:"black",
        width:'90%',
        alignItems:'center',
        margin:20,
        padding:15,borderRadius:10
    },
    textadd:{
        color:'white',
        fontSize:25
    }
})

export default Homescreen