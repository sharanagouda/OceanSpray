import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import {navigateTo} from "../../../utils/utility";
import LanguageTemplate from '../templates';

class LanguageContainer extends Component {

onForgotPassword = () =>{
    navigateTo("loginContainer")
}


    render(){
            return(<LanguageTemplate 
                onForgotPassword={this.onForgotPassword}/>)
    }
}


export default LanguageContainer;