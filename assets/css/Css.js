import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    // Container do fundo centralizando os itens
    container_login: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -220
      },
    // Container da tela padrão
    container_tela_padrao: {
        flex: 1,
        backgroundColor: '#2B2B2B',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -220
    },
    // Container do textinput
    container_textinput:{
        padding: 10,
    },
    // Fonte do login
    textPage_login:{
        height:15,
        color: 'white',
        fontWeight: "bold",
        marginRight: 250,
        marginLeft: 5,
        marginBottom: 5
    },
    // Config da logo versão black
    img_logo_black: {
        height: 300,
        width: 300,
        marginLeft:16
    },
    // Config da logo versão gray
    img_logo_gray: {
        height: 350,
        width: 350,
        marginLeft: 16
    },
    // Config do text input
    text_input:{
        height: 40,
        width:325,
        margin: 3,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    // Config do button 'entrar' na tela de login
    container_button:{
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'between',
        alignItems: 'center',
        marginHorizontal:20,
        marginVertical: 8,
        marginLeft: 12,
        padding:10,
        marginBottom: 20,
        width:325,
        flexDirection: 'row'
    },
    container_img_button: {
        marginRight: 70,
        marginLeft: 20
    },
    img_button: {
        width: 40,
        height: 40,
        marginRight: -150
    },
    // Text do button 'entrar' na tela de login
    text_button:{
      color: '#000',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    // Text do button 'entrar' na tela de login
    text_button_home:{
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
      },
    // Text do button 'entrar' na tela de login
    text_button_escanear:{
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: -4
      },
    // Container do footer do app na tela de login
    container_footer:{
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 110,
      },
  });
export{css};