import { KeyboardAvoidingView, View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState } from 'react'
import { style } from './style'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { instrumentsList } from '../../utils/functions'
import ChoiceItem from "../../../components/ChoiceItem";
const instrumentsArray = instrumentsList()

export function Step4({ navigation, route }){

    const [instruments, setInstrumenst] = useState(instrumentsArray)
    const [selected, setSelected]       = useState(false)
        
   
    function nextStep(){

        navigation.navigate('Step5', {
            ...route.params,
            instruments
        })
    }

    function handleSelect(instrument){
       
       let aux = instruments.map( item => {
            if(instrument.id == item.id){
                item.chosed = !item.chosed

            }

            return item
        })

        if(instruments.filter(i => i.chosed == true).length > 0){
           setSelected(true)
        }else{
            setSelected(false)
        }

        setInstrumenst(aux)
    }

    return (
        <SafeAreaView style={style.container}>
           <View style={{width: '80%'}}>
                <Text style={style.headerText}>
                   Que tal selecionar os instrumentos que você toca? 🎸🎺
                </Text>
           </View>
            <View style={style.list}>
                {instruments.map(item => (
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