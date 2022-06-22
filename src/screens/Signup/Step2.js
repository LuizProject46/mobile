import { KeyboardAvoidingView, View, Text, SafeAreaView } from "react-native";
import React, { useState } from 'react'
import { style } from './style'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { validateEmail } from '../../utils/functions'

export function Step2({ navigation, route }){

   const [email, setEmail] = useState('')
   const [error, setError] = useState({type: '', message: ''})

   const { name } = route.params 

   function handleEmail(email){
        
        setEmail(email)

        let reg = validateEmail()

        if(!reg.test(String(email).toLocaleLowerCase())){

            setError({
                message: 'E-mail inválido! Insira um formato válido para o e-mail',
                type: 'email'
            })
            
            return false
        }
    
        setError({type: '', message: ''})
       
   }
   function nextStep(){
       navigation.navigate('Step3', {
            name,   
            email
       })
   }
    return (
        <SafeAreaView style={style.container}>
           <View style={{width: '80%'}}>
                <Text style={style.headerText}>
                    Qual seu e-mail?
                </Text>
           </View>
           <View style={style.form}>
               
               {error.type == 'email' && (
                   <Text style={style.textError}>
                       E-mail inválido!
                   </Text>
               )}

            <TextInput
            placeholder="E-mail"
            style={[style.input]}
            value={email}
            onChangeText={handleEmail}
            />

           </View>
           <View style={style.footer}>
                <TouchableOpacity 
                    disabled={email !== '' && error.type == '' ? false : true} 
                    style={email !== '' && error.type == '' ? style.button : style.buttonDisabled}
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