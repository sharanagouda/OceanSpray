import {Dimensions} from "react-native";

const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");

const styles = {
    loginTemplateStyles : {
        flex:1
    },
    imageBackgroundMainView : {
        flex:2,
        backgroundColor:"rgb(186,16,44)"
    },
    backgroundImageStyle : {
        width:width,
        height:170,
        marginTop:70
    },
    logoImageViewStyles : {
        flex: 1,
        marginTop:-50,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    logoImageView : {
        width:175,
        height:100
    },
    welcomeTextStyle: {
        textAlign:"center",
        color:"rgb(255,255,255)",
        fontSize:50,
        fontWeight:"600",
        marginBottom:10
    },
    loginTextView: {
        flex:3.5,
        backgroundColor:"rgb(235,240,243)"
    },
    loginWelcomeTextView : {
        marginTop:20,
        color:"rgb(43,43,43)",
        fontSize:16,
        textAlign:"center"
    },
    textView: { 
        color:"rgb(43,43,43)",
        fontSize:16,
        textAlign:"center"
    },
    getStartedTextView : {
        marginBottom:20,
        color:"rgb(43,43,43)",
        fontSize:16,
        textAlign:"center"
    },
    FieldsView : {
        marginTop:10,
        marginLeft:15,
        marginRight:15
    },
    passwordFieldView: {
        marginTop:10,
        marginBottom:20,
        marginLeft:15,
        marginRight:15
    },
    loginButtonStyles : {
        width:width-30,
        height:57,
        backgroundColor:"rgb(0,38,127)",
        marginLeft:15
    },
    loginText : {
        color:"white",
        fontSize:16,
        textAlign:"center",
        marginTop:14
    },
    forgotUsernameStyles : {
        marginTop:30,
        textDecorationColor:"rgb(43,43,43)",
        textDecorationLine:'underline',
        color:"rgb(43,43,43)",
        textAlign:"center"
    },
    forgotPasswordStyles : { 
        marginTop:20,
        textDecorationColor:"rgb(43,43,43)",
        textDecorationLine:'underline',
        color:"rgb(43,43,43)",
        textAlign:"center"
    },
    forgotPasswordText :{
        fontSize : 13,
        color : "rgb(43,43,43)",
        paddingTop : 30,
        textAlign:'center',
        textDecorationLine : 'underline',
        textDecorationColor : 'rgb(43,43,43)',
      
    }

}
export default styles;