/**
* @author Megha <megha.h@photoninfotech.net>
* @version 
* @summary Login Screen for the application.
* @description The screen asks user to enter their email and password
* to login in the application. Their is a link for "forgot passord? and forgot username?",
* user can click on this link and change their password and username. The screen throws an alert when entered
* wrong credentials. The screen uses react and third party npm modules and also few custom components.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform, 
*/

import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import Login from '../templates';
import {navigateTo} from "../../../utils/utility";

/**
* @class LoginContainer
* @extends Component
* @summary Represents Login class.
* @description This is a Login class. It extands react Component class for using the functions comes along with it.
*/
class LoginContainer extends Component {

onForgotPassword = () =>{
    navigateTo("forgotPassword")
}
onForgotUserName = () =>{
    navigateTo("forgotUsername")
}
    render(){
            return(
            <Login 
                onForgotPassword={this.onForgotPassword}
                onForgotUserName={this.onForgotUserName}/>
        )
    }
}


export default LoginContainer;