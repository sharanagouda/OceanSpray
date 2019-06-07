import {
    StyleSheet,
    Platform,
    Dimensions,
    StatusBar
} from 'react-native';

const styles = StyleSheet.create({
    
    mainView: {
     flex:1
    },
    backgroundImage: {
    flex:.8,
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'flex-end', 
    alignItems: 'center',
    },
    imgtextCenter : {
    textAlign:'center',
    color : '#fff',
    fontSize : 30,
    fontWeight : 'bold',
    bottom:30,
   
    },
    buttonStyle: {
        width: Dimensions.get("window").width - 15,
        borderRadius: Platform.OS === "ios" ? 6 : 6,
        backgroundColor: "rgb(0, 38, 127)",
        justifyContent: "center",
        textAlign: "center",
        lineHeight: 24,
        elevation :5
    },
    buttonTextStyle: {
        color: "#fff",
        fontSize: 18,
        marginTop: 1,
        justifyContent: "center",
        textAlign: "center",
    },
    emailText: {
        paddingTop:37,
        paddingBottom : 15,
        fontSize : 16,
        lineHeight : 24,
        letterSpacing : 0.19,
        textAlign: 'center',
        color : "rgb(43,43,43)"
    },
    emailSendText:{
        paddingTop:15,
        paddingBottom : 50,
        fontSize : 16,
        lineHeight : 24,
        letterSpacing : 0.19,
        textAlign: 'center',
        color : "rgb(43,43,43)"
    },
    forgotPasswordText :{
        fontSize : 13,
        color : "rgb(43,43,43)",
        paddingTop : 30,
        textAlign:'center',
        textDecorationLine : 'underline',
        textDecorationColor : 'rgb(43,43,43)',
      
    }

});

export default styles;