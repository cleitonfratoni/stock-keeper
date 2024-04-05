import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { css } from '../../assets/css/Css';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        <SafeAreaView style={css.container_login}>
            <View>
                <View style={css.container_textinput}>
                    <Image style={css.img_logo_black} source={require('../../assets/img/SK_mini.png')}/>
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
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <View style={css.container_fundo_2}>
                    <TouchableOpacity style={[css.container_button, {justifyContent:'center'}]} onPress={handleLogin}>
                        <Text style={css.text_button}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}