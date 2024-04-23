import React, { useEffect, useState } from 'react';
import {Image, Text, View, TouchableOpacity,TouchableWithoutFeedback,SafeAreaView,TextInput} from 'react-native';
import { css } from '../../assets/css/Css';
import config from '../../config/config.json'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { TextInput } from 'react-native-web';

export default function Cadastro({navigation}) {

    // const address=config.origin;
    const [product, setProduct]=useState(null);
    const [code, setCode]=useState(null);
    const [type, setType]=useState(null);
    const [description, setDescription]=useState(null);
    const [price, setPrice]=useState(null);
    const [response, setResponde]=useState(null);

    useEffect(()=>{
        randomCode();
    },[]);


    //Gerar um código randômico
    async function randomCode(){
        let result = '';
        let length=20;
        let chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        setCode(result);
    }

    // Envio do formulário
    async function sendForm(){
        let response=await fetch(config.urlRoot+'create',{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product: product,
                code: code,
                type: type,
                description: description,
                price: price
            })
        });
    }

    // Função do botão de Logout
    async function logout(){
        const backAction = () => {
            Alert.alert('Calma ae campeão', 'Tem certeza que deseja sair do app?', [
              {
                text: "Não",
                onPress: () => null,
                style: 'cancel',
              },
              {text: "Sim", onPress: async () => {
                    await AsyncStorage.clear();
                    navigation.navigate('Login');
                }},
            ]);
            return true;
          };
        backAction()
    }





    return(
        <SafeAreaView style={css.container_tela_padrao}>
            <View style={[css.HomeAndroid_title, {marginTop:60}]}>
                <TouchableOpacity style={css.buttom_logout} onPress={()=>logout()}>
                    <Icon name="sign-out" size={30} color="#999"/>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={[css.img_logo_gray, {height:200, width:200}]} source={require('../../assets/img/logo_gray.jpeg')}/>
                <Text style={css.identify_label}>CADASTRAR ITEM</Text>
            </View>
            <View>
                <View>
                    <TextInput style={css.text_input} placeholder='Nome do Produto' onChangeText={text=>setProduct(text)}/>
                    <TextInput style={css.text_input} placeholder='Tipo do Produto' onChangeText={text=>setType(text)}/>
                    <TextInput style={css.text_input} placeholder='Descrição do Produto' onChangeText={text=>setDescription(text)}/>
                    <TextInput style={css.text_input} placeholder='Preço do Produto' onChangeText={text=>setPrice(text)}/>
                </View>
                <TouchableOpacity style={[css.container_button, {width:250, marginLeft: 40}]} onPress={()=>sendForm()}>
                    <Text style={css.text_button}>Cadastrar</Text>
                </TouchableOpacity>
            </View>            
        </SafeAreaView>
    );
}