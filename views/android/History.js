import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    BackHandler
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { css } from '../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function History(props){


    return(
        <SafeAreaView style={css.container_tela_padrao}>
            <Text>Pagina do historico</Text>
        </SafeAreaView>
    )
}