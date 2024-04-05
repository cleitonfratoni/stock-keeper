import React from 'react';
import {Image, Text, View, TouchableOpacity,TouchableWithoutFeedback,SafeAreaView} from 'react-native';
import { css } from '../../assets/css/Css';

export default function ScanQRCode(props) {
    return(
        <SafeAreaView style={css.container_tela_padrao}>
            <Text>Teste ScanQRCode</Text>
        </SafeAreaView>
    );
}