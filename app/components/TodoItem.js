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
            <TouchableOpacity onPress={deleteItem} style={styles.close}>            
                <AntDesign name="close" size={20}/>
            </TouchableOpacity>
        </View>
    </View>
);



const { width,height } = Dimensions.get('window');

const styles = StyleSheet.create({
    todoContainer:{
        padding : 5,
        marginTop: 10,
        marginBottom : 5,
        borderBottomWidth:1,
        width : width-40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    todoitem:{
        flex: 1,
        fontSize:20,
        fontWeight:"bold",
    },
    makerow:{
        flexDirection:"row",
    },
    check:{
        marginRight:10,
    },
    close:{
        marginLeft:0,
    },
})

export default TodoItem;