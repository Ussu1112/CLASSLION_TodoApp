import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

export default function Input({value,changeText,addTodo}){
    return(
        <TextInput
            value={value}
            onChangeText={changeText}
            onEndEditing={addTodo}

            style ={styles.input}
            placeholder="Todo List 추가하기 - 작성 후 Enter!"
            maxLength={50}
            returnKeyType="done"/>
    );
};

const { width,height } = Dimensions.get('window');

const styles = StyleSheet.create({
    input:{
        fontSize:17,
        fontWeight:'bold',
        borderBottomWidth:1,
        marginTop:10,
        marginBottom:10,
        width : width-40,
    },
});