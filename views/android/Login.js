import React, {useState, useEffect} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { css } from '../../assets/css/Css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(null);


    //Responsavel pelo envio do formulário
    async function sendForm(){
        let response=await fetch('http://192.168.1.1:3000/login',{
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

    return(
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
            <View style={css.container_fundo_2}>
                <TouchableOpacity style={css.container_button} onPress={sendForm}>
                    <Text style={css.text_button}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}