import React from 'react'
import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ededfa',
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerText: {
       color: '#333',
       fontSize: 30,
       textAlign: 'auto',
       fontFamily: 'Roboto_700Bold',
       marginBottom: 20
    },

    form: {
        //flex: 2 
        width: '80%',
        height: '30%',
        marginBottom: 30,
        justifyContent: 'center'
        
    },
    input: {
        marginBottom: 25,
        fontSize: 16,
        fontFamily: 'Roboto_300Light',
        width: '100%',
        borderBottomWidth: 1,
        height: 40,
        borderColor: '#621AAB'
    },  
    footer: {
        //flex: 3, 
        width: '80%',
        
    },
    button: {
        width: '100%',
        alignSelf: 'auto',
        backgroundColor: '#621AAB',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        width: '100%',
        alignSelf: 'auto',
        backgroundColor: '#666',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Roboto_300Light'
    },
    textarea:{
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingTop: 8,
        borderColor: '#621AAB',
        borderRadius: 10
    },
    textError: {
        fontSize: 16,   
        marginBottom: 8,
        color: '#f50f50',
        fontFamily: 'Roboto_700Bold',
       
    },
    textCountText: {
        color: '#666'
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '80%',
        marginBottom: 30
    },
    imageCard: {
        width: 200,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#621AAB',
        borderWidth: 1,
        position: 'relative'
    },
    imageAvatar: {
        width: 140,
        height: 140,
        borderRadius: 70
        
        
    },
    imgBtn: {
       
        backgroundColor: '#35db96',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40,
        marginLeft: 60
        
    },
    avatar: {
        width: 195,
        height: 195,
        borderRadius: 95 
    }

})