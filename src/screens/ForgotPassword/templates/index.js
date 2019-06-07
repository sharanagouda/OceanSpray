/**
 * @author Sharanagouda <Sharanagouda.k@photoninfotech.net>
* @version 
* @summary MyHarvestSortAndFilterTemplate Screen for the application.
* @description The screen asks user to enter their email 
* to login in the application. Their is a link for "forgot passord? ",
* user can click on this link and user will get email with for resetting the password. The screen throws an alert when entered
* wrong credentials. The screen uses react and third party npm modules and also few custom components.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text,SafeAreaView,TouchableOpacity,ImageBackground 
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Field, reduxForm from "redux-form" for composing the form and for getting the form value in
* and object. also it simplifies form validation.
* @import validator from "validator" for validating the form fields which requires complex regex
*
*/

import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,SafeAreaView,TouchableOpacity,ImageBackground} from "react-native";
import Toolbar from "../../../components/Toolbar";
import OceanSprayImages from "../../../constants/imageSource";
import Button from "../../../components/Button";
/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "./styles";



const propTypes = {
    loginForm: PropTypes.element,
    onSubmit: PropTypes.func,
    onbackPress: PropTypes.func,
    onForgotUsername:PropTypes.func
}

const defaultProps = {
    loginForm: (<Text>Login Form</Text>),
    onSubmit: () => {},
    onbackPress: () => {},
    onForgotUsername: () => {},
}

/**
* @class ForgotPasswordTemplate
* @extends Component
* @summary Represents ForgotPasswordTemplate class.
* @description This is a ForgotPasswordTemplate class. It extands react Component class for using the functions comes along with it.
*/
class ForgotPasswordTemplate extends Component {


    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are fetching "handleSubmit" from the props and passing it to "onPress" event of then
    * submit button. "handleSubmit" submits the form after checking the validation.
    */
    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} />
                <SafeAreaView style={styles.appContainer}>
                    <Toolbar
                        onPressNavigateBack={this.props.onPressNavigateBack}
                        notificationIcon={""}
                        title={this.props.toolbarTitle} />
                    <View style={styles.subContainer}>
                    <ImageBackground source={OceanSprayImages.authenticationBackgoundImage} resizeMode="cover" style={styles.backgroundImage}>
                        <View>
                            <Text style={styles.passwordResetText}>PASSWORD RESET</Text>
                        </View>
                    </ImageBackground>
                    <View>
                        <Text style={styles.emailText}>Enter the email that you used when register.</Text>
                        {this.props.loginForm}
                        <Text style={styles.emailSendText}>We will send you an email with instructions to resetting your Password</Text>
                        <Button title="Recover My Password" onPress={this.props.onSubmit}/>
                    </View>
                    <TouchableOpacity onPress={this.props.onForgotUsername}>
                         <Text style={styles.forgotUsernameText}>Forgot your Username?</Text>
                    </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </React.Fragment>
        );
    }
}

ForgotPasswordTemplate.defaultProps = defaultProps;

ForgotPasswordTemplate.propTypes = propTypes;

export default ForgotPasswordTemplate;