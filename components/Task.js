import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
           <View style={styles.itemL}>
             <TouchableOpacity style={styles.circular}></TouchableOpacity> 
             <Text style={styles.itemText}>{props.text}</Text>

           </View>
           <View style={styles.square}></View>
          
            
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20 ,
    },
    itemL: {
        flexDirection:'row' ,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    circular: {
        width: 25,
        height: 25,
        backgroundColor: '#55BCF6',
        opacity:0.3,
        borderRadius: 100,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '75%',
       
    },
    square : {
        width: 5,
        height: 5,
        borderColor: '#29BBF6',
        borderWidth: 6,
        borderRadius: 100,
    },

});

export default Task;