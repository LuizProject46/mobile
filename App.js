import { StatusBar } from 'expo-status-bar';
import React from 'react';

import StackNavigation from './src/Routes/StackNavigator'
import {useFonts} from 'expo-font'
import {Roboto_300Light, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Routes/TabNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return null
  }

  return (
   
    <AuthProvider>
      <TabNavigator/>   
    </AuthProvider>
    
  );
}

