import { KeyboardAvoidingView, View, Text, SafeAreaView } from "react-native";
import React, { useState } from 'react'
import { style } from './style'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export function Step1({ navigation }){
   
    const [name, setName ] = useState('')

    function handleName (name){
        setName(name)
    }
    
    function nextStep(){
        navigation.navigate('Step2', {
            name
        })
    }

    return (
        <SafeAreaView style={style.container}>
           <View style={{width: '80%'}}>
                <Text style={style.headerText}>
                    Como você se chama?
                </Text>
           </View>
           <View style={style.form}>
                <TextInput
                value={name}
                onChangeText={handleName}
                placeholder="Nome"
                style={[style.input]}
               
                />
                
           </View>
           <View style={style.footer}>
                <TouchableOpacity disabled={name.length > 0 ? false : true} style={ name.length > 0 ? style.button : style.buttonDisabled} onPress={nextStep}>
                    <Text style={style.buttonText}>
                        Continuar
                    </Text>
                </TouchableOpacity>
           </View>
            
            
        </SafeAreaView>
    )
}