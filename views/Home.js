import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { css } from '../assets/css/Css';

export default function Home({navigation}){
    console.log("Cleiton Fuboka");
    return(
        <View style={css.container}>
            <TouchableOpacity style={css.container2} onPress={()=> navigation.navigate('Login')}>
                <Image style={css.button_home}
                source={require('../assets/img/button_scan.png')}/>
            </TouchableOpacity>
        </View>
    )
}