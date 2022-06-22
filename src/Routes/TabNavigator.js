import React, { useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './StackNavigator'
import { AuthContext } from '../context/AuthContext'
import Home from '../screens/Home'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

const { Navigator, Screen} = createBottomTabNavigator()

export default function TabNavigator(){
    const { user } = useContext(AuthContext)
    const [token, setToken] = useState(null)
   

    useEffect(() => {
        AsyncStorage.getItem('@Bander.token').then( token => {
            setAuth(token)
        })
    }, [])
    return(
        <NavigationContainer >
            <Navigator initialRouteName={ token !== null ? 'Home' : 'Initial'}>
                <Screen options={{tabBarVisible: false}} name="Initial" component={StackNavigation}/>
                <Screen name="Home" component={Home}/>
            </Navigator>
        </NavigationContainer>
    )
}