import React, { useState, useEffect } from 'react';
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
import { Picker } from '@react-native-picker/picker';
import { getUsernames, deleteUser } from '../../src/apiGateway';

export default function DeleteUser({navigation}){
    const [selectedUsername, setSelectedUsername] = useState('');
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState(null);

    const fetchUserNames = async () => {
        try {
            const users = await getUsernames();
            setUsername(users);
        } catch (error) {
            Alert.alert('Erro', 'Erro ao carregar nomes de produtos');
        }
    };

    useEffect(() => {
        // Função para buscar os nomes dos produtos do banco de dados
        fetchUserNames();
    }, []);

    const sendForm = async () => {
        if (selectedUsername === '' || password === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        try {
            const userToDelete = username.find(user => user.username === selectedUsername);
            if (!userToDelete) {
                Alert.alert('Erro', 'Usuário não encontrado');
                return;
            }

            const userId = userToDelete.id;

            const response = await deleteUser(userId, password);
            Alert.alert('Sucesso', 'Usuário deletado!');
            setSelectedUsername('');
            setPassword('');
            fetchUserNames();
        } catch (error) {
            if (error.response && error.response.status === 403) {
                Alert.alert('Erro', 'Senha incorreta');
            } else {
                Alert.alert('Erro', 'Erro ao deletar o usuário');
            }
            console.error('Error deleting user:', error);
        }
    };
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={css.teste}>
            <SafeAreaView style={css.container_tela_padrao}>
                <View>
                    <Image style={[css.img_logo_gray]} source={require('../../assets/img/logo_gray.jpeg')}/>
                    <Text style={css.identify_label}>EXCLUIR USUÁRIO</Text>
                </View>
                <View>
                    <View>
                            <View style={css.picker}>
                            <Picker
                                selectedValue={selectedUsername}
                                onValueChange={(itemValue) => setSelectedUsername(itemValue)}
                                style={css.pickerItem}
                            >
                                <Picker.Item label="Selecione o Usuário" value=""/>
                                {username.map((user, index) => (
                                    <Picker.Item key={index} label={user.username} value={user.username} />
                                ))}
                            </Picker>
                        </View>
                        <TextInput
                            style={css.text_input}
                            placeholder='password'
                            secureTextEntry={true}
                            onChangeText={text=>setPassword(text)}
                            value={password}
                        />
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