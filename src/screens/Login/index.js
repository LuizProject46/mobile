import React, { useState, useContext } from 'react'
import { style } from './styles'
import Spinner from 'react-native-loading-spinner-overlay'
import { 
    SafeAreaView,
     Text,
     View,
     Image,
     KeyboardAvoidingView,
     TextInput,
     TouchableOpacity
    } from 'react-native'

import logo from '../../images/logo.png'

import { validateEmail } from '../../utils/functions'
import { AuthContext } from '../../context/AuthContext'

export default function Login({ navigation }){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({message: '', type: ''})
    const [loading, setLoading] = useState(false)

    const { signIn, user } = useContext(AuthContext)

    const checkEmail = (email) => {
        let reg = validateEmail()

        if(email == "" || email == undefined){
            setError({
                message: 'O campo e-mail é obrigatório!',
                type: 'email'
            })
           
            
            return false
        }
        if(!reg.test(String(email).toLocaleLowerCase())){

            setError({
                message: 'E-mail inválido! Insira um formato válido para o e-mail',
                type: 'email'
            })
           
            return false
        }

        setError({type: '', message: ''})
        
    }


    const handleLogin = async () => {
        
        if((email == "" || email == undefined) && (password == "" || password == undefined)){
            
            setError({
                message: 'Os campos são obrigatórios!',
                type: 'fields'
            })

            return false
        }

       

        if(password == "" || password == undefined){
            setError({
                message: 'O campo senha é obrigatório!',
                type: 'pass'
            })
            
            return false
        }

        checkEmail(email)
        setLoading(true)

        let response = await signIn(email, password)
        
        if(!response.error){
            
            setLoading(false)
            navigation.navigate('Home')

        }else{
            setError({type: 'login', message: response.message})
            setLoading(false)

        }

    }


    return(
        
        <KeyboardAvoidingView style={style.container} behavior="height"  enabled>
            <Spinner visible={loading}/>
            <View>
                <Image source={logo}  style={style.logo}/>
            </View>

            {error.type !== "" && (
                <View style={{ width:'80%',marginBottom: 8}}>
                    <Text style={style.textError}>{error.message}</Text>
                </View>
                
            )}
            <TextInput
                placeholder="E-mail"
                onChangeText={setEmail}
                value={email}
                style={[style.input,{ 
                    borderWidth: error.type == 'email' || error.type == 'fields' ? 1 : 0,
                    borderColor: error.type == 'email' || error.type == 'fields'? '#f50f50' : '#fff'
                }]}
                autoCorrect
            />
            <TextInput
                placeholder="Senha"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                style={[style.input,{ 
                    borderWidth: error.type == 'pass' || error.type == 'fields'? 1 : 0,
                    borderColor: error.type == 'pass' || error.type == 'fields'? '#f50f50' : '#fff'
                }]}
            />

            <TouchableOpacity style={style.button} onPress={handleLogin}>
                
                <Text style={style.buttonText}>
                    Entrar
                </Text>
  
            </TouchableOpacity>

            <TouchableOpacity style={{marginBottom: 20}}>
                <Text style={style.buttonForgot}>
                    Esqueceu a senha ? Clique aqui
                </Text>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#666666', marginBottom: 15}}>
                OU
            </Text>

            <TouchableOpacity style={style.buttonSignup} onPress={ () => navigation.navigate("Step1")}>
                <Text style={style.buttonTextSignup}>
                    Cadastra-se
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>        


        
       
           
        
    )
}
