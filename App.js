import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Platform, View, Text } from 'react-native';
import { 
  AddProduct,
  DeleteUser,
  ForgotPassword,
  HomeAndroid,
  Login,
  RegisterProduct,
  RegisterUser,
  Stock
} from './views/index';

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
          <Stack.Screen 
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeAndroid}
            options={{
              headerShown: false,
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
            name="AddProduct"
            component={AddProduct}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="RegisterProduct"
            component={RegisterProduct}
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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default SeparatingScreen;
