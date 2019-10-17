import React from "react"
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const TodoItem =({name, isComplete, changeComplete, deleteItem}) => (
    <View style = {styles.todoContainer}>
        <View style={styles.makerow}>
            {/* <TouchableOpacity>
                <AntDesign name="checkcircle" size={20} style={styles.checkmargin}/>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={changeComplete}>
                <AntDesign name={isComplete?"checkcircle":"checkcircleo"} size={20} style={styles.check} />
            </TouchableOpacity>

            <Text style={styles.todoitem}>{name}</Text>
        </View>
        <TouchableOpacity onPress={deleteItem}>            
            <AntDesign name="close" size={20}/>
        </TouchableOpacity>

    </View>
);

const { width,height } = Dimensions.get('window');

const styles = StyleSheet.create({
    todoContainer:{
        padding:5,
        marginTop:20,
        borderBottomWidth:1,
        width : width-80,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    todoitem:{
        fontSize:20,
        fontWeight:"bold",
    },
    makerow:{
        flexDirection:"row",
    },
    check:{
        marginRight:10,
    },
})

export default TodoItem;