import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style ={styles.headercontainer}>
      <Text style={styles.headertext}>My TodoApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    headercontainer:{
        marginTop : 50,
        marginBottom:50,
    },
    headertext:{
        fontSize: 20,
        fontWeight:'bold',
        color: '#ccc',
    },
});

