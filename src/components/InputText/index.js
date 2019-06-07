/**
 * @author Megha <megha.h@photoninfotech.net>
 * @version 
 * @summary Custom Input component.
 * @description A custom input component is being made so that it can be used everywhere..
 */


/**
 * @import React component from "react" for creating custom react component and to use life cycle
 * hooks come along with react.
 * @import View,Text,TouchaleOpacity for creating our view.
 * @import PropType for using props.
 */

import PropTypes from "prop-types";
import React,{Component} from "react";
import {TextInput, Text, View, TouchableOpacity,Image} from "react-native";

/**
 * @import styles object.This object have all the styles written for this particular screen.
 */
import styles from "./styles";

const propTypes = {
    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    editable: PropTypes.bool,
    isPasswordType: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    numberOfLines: PropTypes.number,
    id: PropTypes.string
};

const defaultProps = {
   mapElement: () => {},      
   onSubmitEditing: () => {},
   onChangeText: () => {},
   value:"",
   isPasswordType: false,
   secureTextEntry: false,
   placeholder:"",
   maxLength: 200,
   keyboardType: "default",
   editable: true,
   numberOfLines: 1,
   id: ""
};

/**
 * Represents InputTextView
 * @class InputTextView
 * @extends Component
 */
class InputText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passwordVisible: false,
        }
        this.mapElement = this.mapElement.bind(this);
    }

   mapElement(node) {
       this.props.mapElement(node);
   }

   /**
    * @function render
    * React render method for rendering the native elements
    */
   
    render(){
        const {placeholder, maxLength, keyboardType,value, onChangeText,isPasswordType,secureTextEntry, onSubmitEditing, editable,numberOfLines, id } = this.props;
        if(isPasswordType){
            return(
                <View style={[styles.inputTextComponentStyle]}>
                 <Image
                      source={require('../../assets/password.png')}
                      style={{width:20,height:20,marginLeft:10,marginTop:20}} />
                    <TextInput
                      testID={id}
                      style={[styles.inputTextBoxStyle]}
                      editable={editable}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholder={placeholder}
                      placeholderTextColor="rgb(182,186,188)"
                      keyboardType={keyboardType}
                      secureTextEntry={secureTextEntry}
                      maxLength={maxLength}
                      returnKeyType="next"
                      value={value}
                      numberOfLines={numberOfLines}
                      onSubmitEditing={onSubmitEditing}
                      onChangeText={onChangeText}
                    />
                  
                </View>
    
            );
        }
        return(
            <View style={[styles.inputTextComponentStyle]}>
             <Image
                  source={require('../../assets/mail.png')}
                  style={{width:15,height:15,marginLeft:10,marginTop:20}} />
                <TextInput
                  testID={id}
                  style={[styles.inputTextBoxStyle]}
                  editable={editable}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholder={placeholder}
                  placeholderTextColor="rgb(182,186,188)"
                  keyboardType={keyboardType}
                  maxLength={maxLength}
                  returnKeyType="next"
                  value={value}
                  numberOfLines={numberOfLines}
                  onSubmitEditing={onSubmitEditing}
                  onChangeText={onChangeText}
                />
              
            </View>

        );
    }
}

InputText.defaultProps = defaultProps;

InputText.propTypes = propTypes;

export default InputText;