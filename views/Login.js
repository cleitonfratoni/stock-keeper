import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { css } from '../assets/css/Css';

export default function Login({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(username === 'usuario' && password === 'senha'){
            navigation.navigate('Home', { id: 31 });
        }else{
            Alert.alert('Error', 'Usuário incorreto!!');
        }
    }


    return(
        <View style={css.container_fundo}>
            <View style={css.container_textinput}>
                <Image style={css.img_logo} source={require('../assets/img/SK_mini.png')}/>
                <Text style={css.textPage_login}>Username</Text>
                <TextInput
                    style={css.text_input}
                    placeholder=""
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={css.container_textinput}>
                <Text style={css.textPage_login}>Senha</Text>
                <TextInput
                    style={css.text_input}
                    placeholder=""
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                {/* <Text onPress={()=> navigation.navigate('Home',{id:31})} style={css.text_esqueceu_senha}>Esqueceu a Senha?</Text> */}
            </View>
            <View style={css.container_fundo_2}>
                <TouchableOpacity style={css.container_button_2} onPress={handleLogin}>
                    <Text style={css.text_button}>Entrar</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={css.container_button_2} onPress={()=> navigation.navigate('Home',{id:31})}>
                    <Text style={css.text_button}>Cadastre-se</Text>
                </TouchableOpacity> */}
                <View style={css.container_footer}>
                </View>
            </View>
        </View>
    )
}