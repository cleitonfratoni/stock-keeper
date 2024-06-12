import React, {useState, useEffect} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, Platform, KeyboardAvoidingView } from 'react-native';
import { css } from '../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import config from '../../config/config.json'

export default function Login({navigation}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(null);


    //Responsavel pelo envio do formulário
    async function sendForm(){
        let response=await fetch(config.urlRoot+'login',{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        
        let json=await response.json();
        if(json==='error'){
            Alert.alert('Error', 'Usuário incorreto!!');
            await AsyncStorage.clear();
        }else{
            let userData=await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('HomeAndroid');

            setUsername('');
            setPassword('');
        }
    }

    async function forgotPassword() {
        navigation.navigate('ForgotPass');
    }
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={css.teste}>
            <View style={css.container_login}>
                <View style={css.container_textinput}>
                    <Image style={css.img_logo_black} source={require('../../assets/img/SK_mini.png')}/>
                    {/* <Text>{user} = {password}</Text> feito para verificar se os dados estão indo */}
                    <Text style={css.textPage_login}>Username</Text>
                    <TextInput
                        style={css.text_input}
                        placeholder=""
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                </View>
                <View style={css.container_textinput}>
                    <Text style={css.textPage_login}>Senha</Text>
                    <TextInput
                        style={css.text_input}
                        placeholder=""
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={forgotPassword}>
                        <Text style={[css.textPage_login, {marginLeft:40, fontSize:12}, { textDecorationLine: 'underline' }]}>Esqueceu a senha?</Text>
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
    )
}