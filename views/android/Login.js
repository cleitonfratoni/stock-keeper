import React, {useState, useEffect} from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    BackHandler
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { css } from '../../assets/css/Css';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authenticateUser } from '../../src/apiGateway';

export default function Login({navigation})
{
    const [user,setUser]=useState(null)
    const [password,setPassword]=useState(null)

    // Integração com o banco de dados API Gateway
    async function sendForm(){
        try {
            let json = await authenticateUser(user,password)
            if (json === 'error') {
                Alert.alert('Error', 'Usuário ou senha incorretos')
                await AsyncStorage.clear();
            } else {
                await AsyncStorage.setItem('userData', JSON.stringify(json))
                navigation.navigate('Home')
            }
        } catch (error) {
            Alert.alert('Error', 'Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.')
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                Alert.alert('Atenção', 'Você tem certeza que gostaria de sair do app?', [
                    {
                        text: 'CANCELAR',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    { text: 'SIM', onPress: () => BackHandler.exitApp() },
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

    async function forgotPassword() {
        navigation.navigate('ForgotPassword');
    }


    return(
        <SafeAreaView style={css.container_login}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View>
                    <View style={css.container_textinput}>
                        <Image style={css.img_logo_black} source={require('../../assets/img/icon.png')}/>
                        <Text style={css.textPage_login}>Username</Text>
                        <TextInput
                            style={css.text_input}
                            placeholder=""
                            onChangeText={ text => setUser(text) }
                        />
                    </View>
                    <View style={css.container_textinput}>
                        <Text style={css.textPage_login}>Senha</Text>
                        <TextInput
                            style={css.text_input}
                            secureTextEntry={true}
                            onChangeText={ text => setPassword(text)}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={forgotPassword}>
                            <Text style={[css.textPage_login, {marginLeft:15, fontSize:12}, { textDecorationLine: 'underline' }]}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={css.container_fundo_2}>
                        <TouchableOpacity style={[css.container_button,
                            {justifyContent:'center'}]}
                            onPress={()=>sendForm()}>
                            <Text style={css.text_button}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}