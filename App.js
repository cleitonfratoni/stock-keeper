import React, {useState, useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeAndroid, Login, ScanQRCode} from './views'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AreaRestrita from './views/arearestrita/AreaRestrita';
import Cadastro from './views/android/Cadastro';


export default function App() {

  const Stack = createNativeStackNavigator();

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={Login} 
        // Option serve para configurar Header.
        options={{
          title: '',
          // headerStyle:{backgroundColor: '#000'},
          // headerTintColor: '#333',
          headerTitleStyle:{fontSize:0, fontWeight:'bold', alignSelf:'center', color:'#fff'},
          headerTransparent: true,
        }}
        />
        <Stack.Screen 
        name="HomeAndroid" 
        component={HomeAndroid}
        options={{
          headerShown:false,
          gestureEnabled: false
        }}
        />        
        <Stack.Screen 
        name="Cadastro" 
        component={Cadastro}
        options={{
          headerShown:false
        }}
         />
        <Stack.Screen 
        name="ScanQRCode" 
        component={ScanQRCode}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
