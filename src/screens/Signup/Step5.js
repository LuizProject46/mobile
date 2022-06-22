import { KeyboardAvoidingView, View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from 'react'
import { style } from './style'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { musicTypesList } from '../../utils/functions'
import ChoiceItem from "../../../components/ChoiceItem";
const musicTypesArray = musicTypesList()

export function Step5({ navigation, route }){

    const [musicTypes, setMusicTypes] = useState(musicTypesArray)
    const [selected, setSelected]       = useState(false)
        console.log(route.params)
   
    function nextStep(){

        navigation.navigate('Step6', {
            ...route.params,
            musicTypes
        })
    }

    function handleSelect(instrument){
       
       let aux = musicTypes.map( item => {
            if(instrument.id == item.id){
                item.chosed = !item.chosed

            }

            return item
        })

        if(musicTypes.filter(i => i.chosed == true).length > 0){
           setSelected(true)
        }else{
            setSelected(false)
        }

        setMusicTypes(aux)
    }

    return (
        <SafeAreaView style={style.container}>
           <View style={{width: '80%'}}>
                <Text style={style.headerText}>
                   Ótimo! Quais estilos musicais você gosta?
                </Text>
           </View>
            <View style={style.list}>
                {musicTypes.map(item => (
                    <ChoiceItem item={item} id={item.id} handleSelect={handleSelect}/>
                ))}

            </View>
           

           <View style={style.footer}>
                <TouchableOpacity 
                    style={ selected  ? style.button : style.buttonDisabled}
                    disabled={selected ? false : true}
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