import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import {navigateTo} from "../../../utils/utility";
import FlowchartTemplate from '../Templates';

class FlowchartContainer extends Component {

onForgotPassword = () =>{
    navigateTo("loginContainer")
}


    render(){
            return(<FlowchartTemplate 
                onForgotPassword={this.onForgotPassword}/>)
    }
}


export default FlowchartContainer;