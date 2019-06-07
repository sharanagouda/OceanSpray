/**
* @author Sravya <yerrusravya@photoninfotech.net>
* @version 
* @summary Language Screen for the application.
* @description The user will ask for language selection either English or French 
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform, 
*/

import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Text, View,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {navigateTo} from "../../../utils/utility";
import Button from './../../../components/Button';
import Logo from '../../../assets/first.png';
import styles from "./style";

const propTypes = {
    onbackPress: PropTypes.func,
    onEnglishPressed:PropTypes.func,
    onFrenchPressed:PropTypes.func
};

const defaultProps = {
    onbackPress: () => {},
    onEnglishPressed: () =>{},
    onFrenchPressed: () =>{}
};


onEnglishPressed = () =>{
    navigateTo("loginContainer")
},
onFrenchPressed = () =>{
  navigateTo("loginContainer")
}
class LanguageTemplate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Logo} style={{width: '100%', height: '100%'}}>
          <View style={{top:400}}>
            <Text style={styles.language}>Select a language:</Text>
                <Button
                  title="English"
                  style={styles.buttonStyle}
                  textStyle={styles.buttonTextStyle}
                  onPress={this.props.onEnglishPressed}
                />
                <Button
                  title="French"
                  style={styles.buttonStyle}
                  textStyle={styles.buttonTextStyle}
                  onPress={this.props.onFrenchPressed}
                />
            
          </View>
                    </ImageBackground>
        
        
      </View>
    );
  }
}

LanguageTemplate.defaultProps = defaultProps;

LanguageTemplate.propTypes = propTypes;

export default LanguageTemplate;