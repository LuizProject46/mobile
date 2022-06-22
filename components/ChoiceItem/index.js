import React from 'react'

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import {Ionicons} from '@expo/vector-icons'


export default function ChoiceItem({ item, id, handleSelect }){
    


    return(
        <TouchableOpacity key={id} onPress={() => handleSelect(item)} style={[styles.container,{ backgroundColor: item.chosed ? '#35db96' : item.color}]}>
             {item.chosed ? (
                 <Text style={{textAlign: 'center'}}>
                     <Ionicons name="checkmark-circle-outline" color="#fff" size={20}/>
                 </Text>
             ):(
                <Text style={styles.name}>
                {item.name}
                </Text>
             )}
            
           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        
        padding: 20,
        width: '35%',
        marginLeft: 8,
        borderRadius: 12,
        marginBottom: 10
        
        
    },
    name:{
        color: '#fff',
        textAlign: 'center'
    }
})