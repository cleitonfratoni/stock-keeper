import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Platform, View, Text } from 'react-native';
import { HomeAndroid, Login, ScanQRCode } from './views/index';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function SeparatingScreen() {
  return (
    <NavigationContainer>
      {Platform.OS === 'web' ? (
        <View>
          <Text>Este é o layout para Web</Text>
        </View>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#000' },
              headerTintColor: '#333',
              headerShown: false,
              headerTitleStyle: {
                fontSize: 0,
                fontWeight: 'bold',
                alignSelf: 'center',
                color: '#fff',
              },
              header: 10
            }}
          />
          <Stack.Screen name="Home" 
          component={HomeAndroid}
          options={{
            headerShown:false,
            gestureEnabled:false
          }}
          />
          <Stack.Screen name="ScanQRCode"
          component={ScanQRCode}
          options={{
            headerShown:false
          }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default SeparatingScreen;
