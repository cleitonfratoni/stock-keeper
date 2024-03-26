import React, {useState, useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Rastreio} from './views'


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={Login} 
        // Option serve para configurar Header
        options={{
          title: '',
          headerStyle:{backgroundColor: '#000'},
          headerTintColor: '#333',
          headerTitleStyle:{fontSize:0, fontWeight:'bold', alignSelf:'center', color:'#fff'},
        }}
        />
        <Stack.Screen 
        name="Home" 
        component={Home}
        
        />
        {/* <Stack.Screen name="AreaRestrita" component={AreaRestrita} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

