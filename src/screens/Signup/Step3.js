import { KeyboardAvoidingView, View, Text, SafeAreaView } from "react-native";
import React, { useState } from 'react'
import { style } from './style'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
export function Step3({ navigation, route }){
    const [desc, setDesc] = useState('')

    const {name, email} = route.params

    function nextStep(){

        navigation.navigate('Step4', {
            name,
            email,
            desc
        })
    }

    return (
        <SafeAreaView style={style.container}>
           <View style={{width: '80%'}}>
                <Text style={style.headerText}>
                   Fale um pouco sobre você 😃
                </Text>
           </View>
           <View style={style.form}>
               
                <TextInput
                placeholder="Descrição"
                style={style.textarea}
                multiline={true}
                numberOfLines={8}
                underlineColorAndroid='transparent'
                textAlignVertical='top'
                value={desc}
                onChangeText={(text) => setDesc(text)}
                maxLength={200}
                />
                <Text style={style.textCountText}>
                    {desc.length} / 200
                </Text>
           </View>
           <View style={style.footer}>
                <TouchableOpacity 
                    style={ desc.length > 0 ? style.button : style.buttonDisabled}
                    disabled={desc.length > 0 ? false : true}
                    onPress={nextStep}
                >
                    <Text style={style.buttonText}>
                        Continuar
                    </Text>
                </TouchableOpacity>
           </View>
            
            
        </SafeAreaView>
    )
}