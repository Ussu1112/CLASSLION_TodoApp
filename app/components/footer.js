import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function footer(){
    return(
        <View style={styles.footer}>
            <View style={styles.footercontainer}>
                <Text style={styles.footertext}>모두 할일 완료</Text>
            </View>
            <View style={styles.footercontainer}>
                <Text style={styles.footertext}>모두 삭제</Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    footer:{
        flex: 1,
        flexDirection: 'row',
        
    },
    footercontainer:{
        width:'50%',
        height:50,
        marginTop:50,
        backgroundColor:'#cb6262',
        alignItems: 'center',
        justifyContent:"center",
        borderWidth:0.5,
    },
    footertext:{
        color: 'white',
        fontSize: 20,
    },
});