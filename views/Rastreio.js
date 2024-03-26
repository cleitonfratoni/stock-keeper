import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

export default function Rastreio({navigation}){
    console.log("Cleiton Fuboka");
    return(
        <View>
            <Text>Rastreio</Text>
            <Button title='Segredo' 
            onPress={()=>navigation.navigate('Login',{id:30})}/>
        </View>
    )
}