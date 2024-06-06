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


export default function Home(props) {

    const [user,setUser] = useState(null);    

    // Função para dar bem vindo ao user, bem brega
    useEffect(()=>{
        async function getUser(){
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setUser(json);
            // Alert.alert(`Bem Vindo, ${json.username}!`, 'Use com sabedoria!');
        }
        getUser();
    },[]);

    // Função do botão voltar no Android
    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                Alert.alert('Atenção', 'Você tem certeza que gostaria de fazer logoff?', [
                    {
                        text: 'CANCELAR',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    { text: 'SIM', onPress: () => props.navigation.navigate('Login') },
                ]);
                return true;
            };

            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                backAction,
            );

            return () => {
                backHandler.remove();
            };
        }, [])
    );

    return(
        <SafeAreaView style={css.container_tela_padrao}>
            <View>
                <Image style={css.img_logo_gray} source={require('../../assets/img/logo_gray.jpeg')}/>
            </View>
            <View>    
                <TouchableOpacity onPress={() => props.navigation.navigate('AddProduct')}>
                    <View style={css.container_button}>
                        <View style={css.container_img_button}>
                            <Image style={css.img_button} source={require('../../assets/img/add-product-icon.png')} />
                        </View>
                        <Text style={css.text_button}>Adicionar Produto</Text>
                    </View>
                </TouchableOpacity>
                {user && user.position === 'admin' &&(
                    <>
                        <TouchableOpacity onPress={() => props.navigation.navigate('RegisterProduct')}>
                            <View style={css.container_button}>
                                <View style={css.container_img_button}>
                                    <Image style={css.img_button} source={require('../../assets/img/addProduct-icon.png')} />
                                </View>
                                <Text style={css.text_button_escanear}>Cadastrar Produto</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('ManageStock')}>
                            <View style={css.container_button}>
                                <View style={css.container_img_button}>
                                    <Image style={css.img_button} source={require('../../assets/img/stock-icon.png')} />
                                </View>
                                <Text style={css.text_button_escanear}>Gerenciar estoque</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('RegisterUser')}>
                            <View style={css.container_button}>
                                <View style={css.container_img_button}>
                                    <Image style={css.img_button} source={require('../../assets/img/user-icon.png')} />
                                </View>
                                <Text style={css.text_button_escanear}>Cadastrar Usuário</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
                {user && user.position === 'user' &&(
                    <>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Stock')}>
                            <View style={css.container_button}>
                                <View style={css.container_img_button}>
                                    <Image style={css.img_button} source={require('../../assets/img/stock-icon.png')} />
                                </View>
                                <Text style={css.text_button_escanear}>Cadastrar  Produto</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </View>
            
        </SafeAreaView>
    );
}