import React, { useState } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    KeyboardAvoidingView,
    Platform,
    TextInput
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { css } from '../../assets/css/Css';
import { registerUser } from '../../src/apiGateway';

export default function RegisterUser({navigation}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [checked, setChecked] = useState('user');

    const sendForm = async () => {
        try {
            const userData = {
                username: username,
                password: password,
                position: checked
            };
            const response = await registerUser(userData)
            Alert.alert('Sucesso', 'Usuario cadastrado com sucesso!')
            // Redirecionar ou limpar os campos após o cadastro
            setUsername('');
            setPassword('');
        } catch (error) {
            Alert.alert('Erro', "Erro ao cadastrar o Usuario")
        }
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={css.teste}>
            <SafeAreaView style={css.container_tela_padrao}>
                <View>
                    <Image style={[css.img_logo_gray]} source={require('../../assets/img/logo_gray.jpeg')}/>
                    <Text style={css.identify_label}>CADASTRAR USUÁRIO</Text>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={css.text_input}
                            placeholder='Usuario'
                            onChangeText={text=>setUsername(text)}
                            value={username}
                        />
                        <TextInput
                            style={css.text_input}
                            placeholder='password'
                            onChangeText={text=>setPassword(text)}
                            secureTextEntry={true}
                            value={password}
                        />
                        <View style={css.radioButtonContainer}>
                            <View style={css.radioButtonRow}>
                                <RadioButton
                                    value="user"
                                    status={ checked === 'user' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('user')}
                                    color='#fff'
                                />
                                <Text style={css.radioButtonText}>User</Text>
                            </View>
                            <View style={css.radioButtonRow}>
                                <RadioButton
                                    value="admin"
                                    status={ checked === 'admin' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('admin')}
                                    color='#fff'
                                />
                                <Text style={css.radioButtonText}>Admin</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[css.container_button, {width:250, marginLeft: 40}]}
                        onPress={sendForm}
                    >
                        <Text style={css.text_button}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}