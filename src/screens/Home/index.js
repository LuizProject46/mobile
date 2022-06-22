import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../../context/AuthContext'

export default function Home(){
   const {user} = useContext(AuthContext)
    return(
        <View>
            <Text>Welcome {user.name}</Text>
        </View>
    )
}