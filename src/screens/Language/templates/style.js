
import { StyleSheet,Platform,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ba102c',
    },
    text: {
      margin:10,
      fontSize: 50,
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight:'bold',
    },
    language:{
      margin:10,
      fontSize: 30,
      color: '#FFFFFF',
      textAlign: 'center',
    },
    buttonStyle: {
      width: Dimensions.get("window").width - 15,
      borderRadius: Platform.OS === "ios" ? 8 : 8,
      backgroundColor: "rgb(255,255,255)",
      justifyContent: "center",
      textAlign: "center",
      lineHeight: 24,
      elevation :5,
      marginLeft: 3,
      marginBottom:20,
  },
  buttonTextStyle: {
      color: "#00267F",
      fontSize: 20,
      marginTop: 1,
      justifyContent: "center",
      textAlign: "center",
      fontWeight:'bold'
  },
  
  });

  export default styles;
