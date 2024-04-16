import React, {useState, useEffect} from 'react';
import { Image, Text, View, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, Alert, BackHandler } from 'react-native';
import { css } from '../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function HomeAndroid({navigation}) {

    const [user, setUser]=useState('');

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

    // Função do botão de Logout
    async function logout(){
        const backAction = () => {
            Alert.alert('Calma ae campeão', 'Tem certeza que deseja sair do app?', [
              {
                text: "Não",
                onPress: () => null,
                style: 'cancel',
              },
              {text: "Sim", onPress: async () => {
                    await AsyncStorage.clear();
                    navigation.navigate('Login');
                }},
            ]);
            return true;
          };
        backAction()
    }

    // Função pro botão de voltar do android não deixar apenas deslogar sem perguntar pro user
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Calma ae campeão', 'Tem certeza que deseja sair do app?', [
            {
              text: "Não",
              onPress: () => null,
              style: 'cancel',
            },
            {text: "Sim", onPress: () => {
                navigation.navigate('Login');
                }},
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);

    return(
        <SafeAreaView style={css.container_tela_padrao}>
            <View style={css.HomeAndroid_title}>
                <TouchableOpacity style={css.buttom_logout} onPress={()=>logout()}>
                    <Icon name="sign-out" size={30} color="#999"/>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={css.img_logo_gray} source={require('../../assets/img/logo_gray.jpeg')}/>
            </View>
            <View>    
                <TouchableOpacity onPress={() => props.navigation.navigate('ScanQRCode')} style={css.buttonP}>
                    <View style={css.container_button}>
                        <Image style={css.img_button} source={require('../../assets/img/QRCodeIcon.png')} />
                        <Text style={css.text_button_home}>Inventário</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}