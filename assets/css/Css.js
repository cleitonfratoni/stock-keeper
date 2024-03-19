import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   paddingLeft: 10,
    // },
    container_fundo:{
      backgroundColor: '#000',
      alignItems: 'center',
    },
    button_home:{
      height: 70,
      width: 70,
    },
    img_logo:{
      height: 100,
      width: 120,
      justifyContent: 'center',
    },
    textPage_login:{
        height:15,
        color: 'white',
        fontWeight: "bold",
        marginRight: 250,
        // padding:20,
    },
    text_input:{
        height: 35,
        width:325,
        margin: 3,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,
    }
  });
export{css};
