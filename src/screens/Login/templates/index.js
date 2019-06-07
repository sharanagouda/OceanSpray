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
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Field, reduxForm from "redux-form" for composing the form and for getting the form value in
* and object. also it simplifies form validation.
* @import validator from "validator" for validating the form fields which requires complex regex
* i.e., emailid, dateformat etc.
* for implemnting login with facebook.
*/

import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import InputText from "./../../../components/InputText";

/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "./styles";


/**
* @class Login
* @extends Component
* @summary Represents Login class.
* @description This is a Login class. It extands react Component class for using the functions comes along with it.
*/
class Login extends Component {

    /**
    * @function renderTextInput: Its called in the render function and returns a input component.
    * @params {object} It takes field object which has input properties which further gets passed
    * to the input component.
    * @return {Compoenent} It returns a presenter input component.
    */
    renderTextInput(field) {
        const { meta: { touched, error }, placeholder, keyboardType, isPasswordType, secureTextEntry, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    isPasswordType={isPasswordType}
                    secureTextEntry={secureTextEntry}
                    {...restInput}
                />
                {touched ? <Text style={{ color: "red" }}>{error}</Text> : null}
            </View>
        )

    }
    onSubmit(values) {
        alert("success");
    }

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are fetching "handleSubmit" from the props and passing it to "onPress" event of then
    * submit button. "handleSubmit" submits the form after checking the validation.
    */
    render() {
        const { handleSubmit } = this.props;
        return (
            <ScrollView>
                <View style={[styles.loginTemplateStyles]}>
                    <View style={[styles.imageBackgroundMainView]}>
                        <ImageBackground source={require('../../../assets/bitmap1.png')}
                            style={[styles.backgroundImageStyle]}
                        >
                            <View style={[styles.logoImageViewStyles]}>
                                <Image
                                    source={require('../../../assets/Oceanspray_logo.png')}
                                    style={[styles.logoImageView]} />
                            </View>
                            <Text style={[styles.welcomeTextStyle]}>WELCOME</Text>
                        </ImageBackground>
                    </View>
                    <View style={[styles.loginTextView]}>
                        <Text style={[styles.loginWelcomeTextView]}>Welcome to the Ocean Spray Farmer</Text>
                        <Text style={[styles.textView]}>App.Enter your username and password</Text>
                        <Text style={[styles.getStartedTextView]}>to get started</Text>
                        <View>
                            <View style={[styles.FieldsView]}>
                                <Field
                                    name="email"
                                    placeholder="E-mail Address"
                                    component={this.renderTextInput} />
                            </View>
                            <View style={[styles.passwordFieldView]}>
                                <Field
                                    name="password"
                                    placeholder="Password"
                                    isPasswordType={true}
                                    secureTextEntry={true}
                                    component={this.renderTextInput} />
                            </View>
                            <TouchableOpacity onPress={handleSubmit(this.onSubmit)}>
                                <View style={[styles.loginButtonStyles]}>
                                    <Text style={[styles.loginText]}>Login</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                 <TouchableOpacity onPress={this.props.onForgotUserName}>
                                    <Text style={styles.forgotPasswordText}>Forgot your username?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.props.onForgotPassword}>
                                    <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
/**
* @function validate: Its called before form submit. Its validates the form value and returns an error object.
* if it finds any error, it stops the form submission and throws it.
* @params {object} values: It takes form vulues as object.
* Validator library is used for email validation instead of regex.
* @return {object} errors: It returns errors object. If no properties in the errors then it calls the onSubmit method
*/
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
        errors.password = "Password is required";
    }
    return errors;
};

/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({});

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({});

/**
* @function compose: It takes higher order function as params in order and returns one HOC which again takes
* component and as param and returns an updated component.
* @params {function} connect, reduxForm
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
* @function reduxForm: It takes an object as params which has the form name and "validate" function as
* properties. It internally creates a reducer and validates the form.
*/
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "Login",
        validate

    })
)(Login);