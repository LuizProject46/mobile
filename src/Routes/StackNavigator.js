import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login  from '../screens/Login'
import { Step1 } from '../screens/Signup/Step1'
import { Step2 } from '../screens/Signup/Step2'
import { Step3 } from '../screens/Signup/Step3'
import { Step4 } from '../screens/Signup/Step4'
import { Step5 } from '../screens/Signup/Step5'
import { Step6 } from '../screens/Signup/Step6'
import { Step7 } from '../screens/Signup/Step7'



const  { Navigator , Screen} = createStackNavigator()

 

export default function StackNavigation(){
    return(
       
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="Login" component={Login}/>
            <Screen name="Step1" component={Step1}/>
            <Screen name="Step2" component={Step2}/>
            <Screen name="Step3" component={Step3}/>
            <Screen name="Step4" component={Step4}/>
            <Screen name="Step5" component={Step5}/>
            <Screen name="Step6" component={Step6}/>
            <Screen name="Step7" component={Step7}/>
        </Navigator>
       
    )
}