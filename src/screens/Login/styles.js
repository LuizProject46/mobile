
import styled from 'styled-components/native'
import {StyleSheet} from 'react-native'


export const style = StyleSheet.create({
    container: {
        backgroundColor: '#ededfa',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 200,
        height: 100,
        marginBottom: 30,
        marginTop: 50
    },

   input: {
        width: '80%',
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: '#ffff',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        fontFamily: 'Roboto_300Light'
    },

    imageContainer:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
       
    },  

    button: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#621AAB',
        borderRadius: 6,
        marginBottom: 15,
        marginTop: 15
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Roboto_300Light'
    },
    buttonForgot: {
        color:'#621AAB',
        fontFamily: 'Roboto_700Bold',
    },
    buttonSignup: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#35db96',
        borderRadius: 6,
       
       
    },
    buttonTextSignup: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Roboto_300Light'
    },

    textError:{
        fontSize: 16,   
        marginBottom: 8,
        color: '#f50f50',
        fontFamily: 'Roboto_700Bold',
        textAlign: 'center'
    }


})