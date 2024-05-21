import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    SafeAreaView,
    Alert
} from 'react-native';
import { css } from '../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home(props) {

    const [user,setUser] = useState(null);

    // Função para dar bem vindo ao user, bem brega
    useEffect(()=>{
        async function getUser(){
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.username);
            Alert.alert(`Bem Vindo, ${json.username} `, 'Use com sabedoria!');
        }
        getUser();
    },[]);

    return(
        <SafeAreaView style={css.container_tela_padrao}>
            <View>
                <Image style={css.img_logo_gray} source={require('../../assets/img/logo_gray.jpeg')}/>
            </View>
            <View>    
                <TouchableOpacity onPress={() => props.navigation.navigate('ScanQRCode')}>
                    <View style={css.container_button}>
                        <View style={css.container_img_button}>
                            <Image style={css.img_button} source={require('../../assets/img/QRCodeIcon.png')} />
                        </View>
                        <Text style={css.text_button}>Escanear QR Code</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('ScanQRCode')}>
                    <View style={css.container_button}>
                        <View style={css.container_img_button}>
                            <Image style={css.img_button} source={require('../../assets/img/relatorio_logo.png')} />
                        </View>
                        <Text style={css.text_button_escanear}>Relatório</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}