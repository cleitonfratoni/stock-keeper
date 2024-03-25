import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { css } from '../assets/css/Css';



export default function Login(){
    return(
        <View style={css.container_fundo}>
            <View style={css.container_textinput}>
                <Image style={css.img_logo} source={require('../assets/img/SK_mini.png')}/>
                <Text style={css.textPage_login}>Username</Text>
                <TextInput
                    style={css.text_input}
                    placeholder=""
                    onChangeText={(text) => console.log(text)}
                />
            </View>
            <View style={css.container_textinput}>
                <Text style={css.textPage_login}>Senha</Text>
                <TextInput
                    style={css.text_input}
                    placeholder=""
                    onChangeText={(text) => console.log(text)}
                />
                <Text onPress={()=>route.navigation.navigate('Home',{id:31})} style={css.text_esqueceu_senha}>Esqueceu a Senha?</Text>
            </View>
            <View style={css.container_fundo_2}>
                {/* <Button style={css.container_button} 
                title='Entrar' 
                color='#fff'
                onPress={()=>route.navigation.navigate('Home',{id:31})}/> */}
                
                <TouchableOpacity style={css.container_button_2} onPress={()=>route.navigation.navigate('Home',{id:31})}>
                    <Text style={css.text_button}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={css.container_button_2} onPress={()=>route.navigation.navigate('Home',{id:31})}>
                    <Text style={css.text_button}>Cadastre-se</Text>
                </TouchableOpacity>
                <View style={css.container_footer}>
                </View>

            </View>
        </View>

    )
}