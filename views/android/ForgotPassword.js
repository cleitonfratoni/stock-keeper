import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    SafeAreaView
} from 'react-native';
import { css } from '../../assets/css/Css';
import { changePasswordByUsername } from '../../src/apiGateway';

export default function ForgotPassword({navigation}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(null);


    // Função para enviar o formulário de mudança de senha
    async function sendForm() {
        if (!username || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        
        try {
            const response = await changePasswordByUsername(username, password);
            
            if (response === 'Senha alterada com sucesso') {
                Alert.alert('Sucesso', 'Senha alterada com sucesso');
            } else {
                // Se a função `changePasswordByUsername` retornar uma resposta de sucesso
                // que não seja 'Senha alterada com sucesso', consideraremos que houve
                // algum problema desconhecido.
                Alert.alert('Erro', 'Erro ao alterar a senha');
            }
        } catch (error) {
            // Se a função `changePasswordByUsername` lançar um erro, trataremos como
            // um erro de solicitação.
            if (error.message === 'Usuário não encontrado') {
                Alert.alert('Erro', 'Usuário não encontrado. Verifique o nome de usuário fornecido.');
            } else {
                // Outros erros são tratados aqui
                Alert.alert('Erro', 'Usuário não encontrado!');
            }
        }
    }

    return(
        <SafeAreaView style={css.container_login}>
            <View>
                <View style={css.container_textinput}>
                    <Image style={css.img_logo_black} source={require('../../assets/img/icon.png')}/>
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
                    <Text style={css.textPage_login}>Nova Senha</Text>
                    <TextInput
                        style={css.text_input}
                        placeholder=""
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
                <View style={css.container_fundo_2}>
                    <TouchableOpacity style={[css.container_button,
                        {justifyContent:'center'}]}
                        onPress={()=>sendForm()}>
                        <Text style={css.text_button}>Mudar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}