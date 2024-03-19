import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';
import { css } from '../assets/css/Css';



export default function Login(){
    return(
        <View style={css.container_fundo}>
            <Image style={css.img_logo} source={require('../assets/img/SK_mini.png')}/>
            <Text style={css.textPage_login}>Username</Text>
            <TextInput
                style={css.text_input}
                placeholder=""
                onChangeText={(text) => console.log(text)}
            />
            <Text style={css.textPage_login}>Senha</Text>
            <TextInput
                style={css.text_input}
                placeholder=""
                onChangeText={(text) => console.log(text)}
            />
            <Button title='Botão' 
            onPress={()=>route.navigation.navigate('Home',{id:31})}/>
        </View>

    )
}