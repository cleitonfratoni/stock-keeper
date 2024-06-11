import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeAndroid, Login, ScanQRCode} from './views'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AreaRestrita from './views/arearestrita/AreaRestrita';
import React from 'react';
import { Platform, View, Text } from 'react-native';
import { 
  AddProduct,
  RegisterProduct,
  RegisterUser,
  DeleteUser,
  forgotPass,
  Stock
} from './views/index';


export default function App() {

  const Stack = createNativeStackNavigator();

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            title: '',
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
          name="Stock"
          component={Stock}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="RegisterProduct" 
          component={RegisterProduct}
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
        <Stack.Screen 
          name="AddProduct"
          component={AddProduct}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="RegisterUser"
          component={RegisterUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="DeleteUser"
          component={DeleteUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="forgotPass"
          component={forgotPass}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
