import React, {useState,useEffect} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from '../../assets/css/Css'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Manual({navigation}) {

    return (
        <View style={css.area__title}>
                <Icon name="home" size={20} color='#999'/>
            <Text>Manual</Text>
        </View>
    );
}