import React, { createContext, useState } from 'react'
import api from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { style } from '../screens/Signup/style'


export const AuthContext = createContext({})


export function AuthProvider({ children }){

    const [user, setUser] = useState(null)

    const isAuthenticated = !!user


    async function signIn( email, password ){
        try{
            
            let response = await api.post('v1/login', {
                email,
                password
            })
            console.log(response.data)
           
            if(response.data){
                const { token, user } = response.data

                await AsyncStorage.setItem('@Bander.token', token)
    
                api.defaults.headers['authorization'] = `Bearer ${token}`
    
                setUser(user)    
    
                return response.data
            }else{
                return {error : true, message: 'E-mail ou senha inválidos!'}
            }
           
        }catch(err){
            console.log(err.message)
            return {
                error: true,
                message:'E-mail ou senha inválidos!'
            }
        }
        
        

    }

    async function signUp(name, email, bio, avatar, styles, instruments, password ){
        const form = new FormData()

        form.append('name', name)
        form.append('email', email)
        form.append('bio', bio)
        form.append('avatar', avatar)
        form.append('styles', styles)
        form.append('instrumenst', instruments)
        form.append('password', password)

        console.log(form)

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
} 