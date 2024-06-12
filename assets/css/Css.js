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
    //Text principal para telas (Identificador de telas)
    identify_label:{
        textAlign:'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 15,
    },
    picker: {
        height: 40,
        width:325,
        margin: 3,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    pickerItem: {
        marginTop: -17,
        marginLeft: -17,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    radioButtonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 4,
        color: '#fff'
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#2B2B2B',  // Cor de fundo da tela
    },
    container: {
        flex: 1,
        marginTop: 25,
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#fff',  // Cor do texto do título
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
        width: '100%', // Ajusta a largura da tabela para 100% do container
        backgroundColor: '#fff',  // Cor de fundo da tabela
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerCell: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f7f7f7',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
    },
  });
export{css};