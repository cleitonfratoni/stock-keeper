import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Platform, View, Text } from 'react-native';
import { HomeAndroid, Login, ScanQRCode } from './views/index';

const Stack = createNativeStackNavigator();

function SeparatingScreen() {
  return (
    <NavigationContainer>
      {Platform.OS === 'android' ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
              headerStyle: { backgroundColor: '#000' },
              headerTintColor: '#333',
              headerTitleStyle: {
                fontSize: 0,
                fontWeight: 'bold',
                alignSelf: 'center',
                color: '#fff',
              },
            }}
          />
          <Stack.Screen name="Home" component={HomeAndroid} />
          <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
        </Stack.Navigator>
      ) : (
        <Text>Este é o layout para Web</Text>
      )}
    </NavigationContainer>
  );
}

export default SeparatingScreen;
