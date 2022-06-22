import { KeyboardAvoidingView, View, Text, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from 'react'
import { style } from './style'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import avatarImg from '../../images/user.png'
import {FontAwesome5} from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker'
export function Step6({ navigation, route }){

        const [image, setImage] = useState(null)
   
       
   
    function nextStep(){

        navigation.navigate('Step7', {
            ...route.params,
            image
            
        })
    }

    async function handleImage(){

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          
      
          if (!result.cancelled) {
           
            setImage(result.uri);
          }
    }


    useEffect(() => {
        (async () => {
          
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            
          
        })();
      }, []);

    return (
        <SafeAreaView style={style.container}>
           <View style={{width: '90%'}}>
                <Text style={[style.headerText, { textAlign: 'center'}]}>
                   Estamos quase lá! Está na hora de escolher sua melhor foto 😎
                </Text>
           </View>
           <View style={[style.form, { alignItems: 'center'}]}>
                <View style={style.imageCard}> 
                    {image == null ? (
                         <FontAwesome5 name="user" size={60} color="#621AAB"/>
                    ):(
                        <Image style={style.avatar} source={{uri: image}}/>
                    )}
                   
                    
                </View>
                <TouchableOpacity style={style.imgBtn} onPress={handleImage}>
                    <FontAwesome5 name="camera" size={18} color="#fff"/>
                </TouchableOpacity>
           </View>
           <View style={style.footer}>
                <TouchableOpacity 
                    style={image !== null ? style.button : style.buttonDisabled}
                    disabled={ image !== null ? false : true}
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