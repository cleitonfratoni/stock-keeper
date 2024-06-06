import React, { useState } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    TextInput
} from 'react-native';
import { css } from '../../assets/css/Css';
import { registerProduct } from '../../src/apiGateway';

export default function RegisterUser(props){


    return(
        <SafeAreaView style={css.container_tela_padrao}>
            <View>
                <Image style={[css.img_logo_gray]} source={require('../../assets/img/logo_gray.jpeg')}/>
                <Text style={css.identify_label}>CADASTRAR USUÁRIO</Text>
            </View>
            <View>
                <View>
                    <TextInput
                        style={css.text_input}
                        placeholder='Nome do Produto'
                        onChangeText={text=>setProductName(text)}
                        value={productName}
                    />
                    <TextInput
                        style={css.text_input}
                        placeholder='Tipo do Produto'
                        onChangeText={text=>setType(text)}
                        value={type}
                    />
                    <TextInput
                        style={css.text_input}
                        placeholder='Peso do Produto (KG)'
                        onChangeText={text=>setWeight(text)}
                        value={weight}
                        keyboardType='numeric'
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
    )
}