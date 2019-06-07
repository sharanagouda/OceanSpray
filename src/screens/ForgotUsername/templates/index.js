/**
* @author Kallayya <kallayya@photoninfotech.net>
* @version 1.0.0
* @summary Forgot user name request.
* @description As a user, I should be able to view the forget username screen and enter my email address to recover my username.
*/


/**
* @import PropTypes A useful accessory often used with React is PropTypes which is a way of making runtime assertions about what type of data a React component requires in order to render properly.
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform, KeyboardAvoidingView,
* SafeAreaView from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Field, reduxForm from "redux-form" for composing the form and for getting the form value in
* and object. also it simplifies form validation.
* @import validator from "validator" for validating the form fields which requires complex regex
* i.e., emailid, dateformat etc.
*/
import PropTypes from "prop-types";
import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView,TouchableOpacity } from 'react-native';
import Button from './../../../components/Button'

/**
* @import STYLES object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles.js" which is again importing
* an object from theme file when our theme related styles have been defined.
* @import Logo , importing logo from assets ,
* @import Toolbar importing toolbar from component
*/
import styles from './style';
import Logo from '../../../assets/bitmap.png';
import Toolbar from '../../../components/Toolbar';

/**
* It is initializing the state with proptypes properties.
* loginForm: Represents the loginForm of the template.
* onsubmit: Represents onsubmit it will send data to server.
* onbackPress: onprss back function.
* onPress: Handles the onPress of the Button.
* onForgotPassword: navigate the screen one to another screen function
*/
const propTypes = {
    loginForm : PropTypes.element,
    onsubmit : PropTypes.func,
    onbackPress: PropTypes.func,
    onForgotPassword:PropTypes.func
};

const defaultProps = {
    loginForm: (<Text>Login form</Text>),
    onbackPress: () => {},
    onForgotPassword: () =>{},
    onForgotPassword: () => {}
};

/**
* @class UserNameRecovery
* @extends Component
* @summary Represents UserNameRecovery class.
* @description This is a UserNameRecovery class. It extands react Component class for using the functions comes along with it.
*/
class UserNameRecovery extends Component {
      /**
    * @constructor It is initializing the state with default properties.
    * name: String property for storing the username .
    */
    /* istanbul ignore next */
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.onChange = this.onChange.bind(this);
     
    }

    

    /**
    * @function onChange: Its a generic function for input fields.
    * It gets called when user changes the value in input field.
    * It updates the state property with given key and value.
    * @params {string} key and value
    */
    onChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    /**
    * @function onSubmit
    * React onSubmit method will render to login screen and alert will popup
    */
    onSubmit(values) {
        alert("success");
    }

     /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} />
                <SafeAreaView style={styles.mainView}>
                    <Toolbar 
                    onPressNavigateBack={this.props.onPressNavigateBack}
                    notificationIcon={""}
                    title={this.props.toolbarTitle}/>
                    <ImageBackground source={Logo} resizeMode="cover" style={styles.backgroundImage}>
                        <View>
                            <Text style={styles.imgtextCenter}>USERNAME RECOVER</Text>
                        </View>
                    </ImageBackground>
                    <Text style={styles.emailText}>Enter the email that you used when register.</Text>
                              {this.props.loginForm}
                              <View>
                                
                    <Text style={styles.emailSendText}>We will send you an email with instructions to recover your username</Text>
                    </View>
                    <Button
                        title="Recover My Username"
                        style={styles.buttonStyle}
                        textStyle={styles.buttonTextStyle}
                    />
                    <TouchableOpacity onPress={this.props.onForgotPassword}>
                         <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                    </TouchableOpacity>
                </SafeAreaView>
          
            </React.Fragment>

        )
    }
}


UserNameRecovery.defaultProps = defaultProps;

UserNameRecovery.propTypes = propTypes;

export default  UserNameRecovery;