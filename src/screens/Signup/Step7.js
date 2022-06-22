import { KeyboardAvoidingView, View, Text, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect, useContext } from 'react'
import { style } from './style'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import Spinner from 'react-native-loading-spinner-overlay'

import { AuthContext } from "../../context/AuthContext";
export function Step7({ navigation, route }){
    const [password, setPassword] = useState(null)
    const [loading, setLoading]   = useState(false)
    const {signUp } = useContext(AuthContext)

    async function handleFinish(){
        
        let {musicTypes, instruments, name, email, image, desc} = route.params

        musicTypes = musicTypes.filter( m => m.chosed == true)
        instruments = instruments.filter( m => m.chosed == true)

        await signUp(name, email, desc, image, musicTypes, instruments, password)

        console.log(musicTypes)
    }

    return (
        <SafeAreaView style={style.container}>
            <Spinner visible={loading}/>
           <View style={{width: '90%'}}>
                <Text style={[style.headerText, { textAlign: 'center'}]}>
                   Para finalizar, escolha sua senha de acesso.
                </Text>
           </View>
           <View style={style.form}>
                <TextInput
                    value={password}
                    onChangeText={ password => setPassword(password)}
                    placeholder="Sua senha"
                    style={[style.input]}
                    secureTextEntry
                
                />
           </View>
           <View style={style.footer}>
                <TouchableOpacity 
                    style={password !== null ? style.button : style.buttonDisabled}
                    disabled={ password !== null ? false : true}
                    onPress={handleFinish}
                >
                    <Text style={style.buttonText}>
                       Vamos lá!
                    </Text>
                </TouchableOpacity>
           </View>
            
            
        </SafeAreaView>
    )
}