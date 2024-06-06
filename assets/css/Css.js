import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    // Container do fundo centralizando os itens
    container_login: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -200
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
        padding: 15,
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
        height: 290,
        width: 290,
        marginLeft: 15,
        marginTop: 50
    },
    // Config da logo versão gray
    img_logo_gray: {
        height: 350,
        width: 350,
        marginLeft: 15

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
        paddingVertical: 20,
        paddingHorizontal: 40,
        marginVertical: 20,
        width: 320,
        height:60,
    },
    // Imagem do botão Inventário na tela HomeAndroid
    img_button: {
        width: 40,
        height:40,
        marginTop: -10,
        marginLeft: 25
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
        marginTop: -32
      },
    // Container do footer do app na tela de login
    container_footer:{
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 110,
      },

      //Header da HomeAndroid pra colocar botão de logout (temporario?)
      HomeAndroid_title:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#2B2B2B',
        justifyContent:'flex-end'
      },

      //Botão da header HomeAndroid de Logout
      buttom_logout:{
        textAlign:'right',
        marginRight: 10,
        marginTop: 60,
      },

      //Text principal para telas (Identificador de telas)
      identify_label:{
        textAlign:'left',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 15,
      },

      // Scanner
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      scanText: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
      },

      teste:{
        flex: 1
      },
  });
export{css};