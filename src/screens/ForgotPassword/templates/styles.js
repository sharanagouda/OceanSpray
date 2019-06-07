import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    subContainer:{
        flex:1,
        backgroundColor:"#ebf0f3"
    },
    backgroundImage:{
        flex:.5,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding:20
    },
    passwordResetText:{
        textAlign:'center',
        color : '#fff',
        fontSize : 30,
        fontWeight : 'bold',
        bottom:30,
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
        paddingHorizontal:5,
        color : "rgb(43,43,43)"
    },
    forgotUsernameText :{
        fontSize : 13,
        color : "rgb(43,43,43)",
        paddingTop : 30,
        textAlign:'center',
        textDecorationLine : 'underline',
        textDecorationColor : 'rgb(43,43,43)',
      
    }
});


  export default styles;