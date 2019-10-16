import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({value,chaneText,addTodo}) => (
    <TextInput
    value={value}
    style ={styles.input}
    placeorder={"입력공간"}
    maxLength={30}
    onChangeText={chaneText}
    onEndEditing={addTodo}
    returnKeyType="done"/>
);


const styles = StyleSheet.create({
    input:{
        fontSize:17,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:20,
    },
});

export default Input;