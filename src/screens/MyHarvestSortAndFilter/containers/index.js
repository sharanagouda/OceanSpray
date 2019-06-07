/**
* @author Sharanagouda.k,Kallayya <Sharanagouda.k@photoninfotech.net,Kallayya@photoninfotech.net>
* @version 
* @summary MyHarvestSortAndFilterContainer Screen for the application.
* @description The screen will display when the user clicks on my harvest after that user has to click on any item form the list 
then this screen will display next the user can modify the settings and he can save the settings or he can reset the settings,
*As a Farmer, I should be able to view an overlay to sort/filter the delivery lists on the my harvest screen.
*/
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { connect } from "react-redux";

import MyHarvestSortAndFilterTemplate from "../templates";
import {navigateTo,navigateBack} from "../../../utils/utility";
/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "./styles";


/**
* @class MyHarvestSortAndFilterContainer
* @extends Component
* @summary Represents ForgotPasswordContainer class.
* @description This is a ForgotPasswordContainer class. It extands react Component class for using the functions comes along with it.
*/
class MyHarvestSortAndFilterContainer extends Component {


    /**
    * @function onPressNavigateBack: this function is for navigate to previous screen
    */
  onPressNavigateBack = () =>{
    navigateTo("loginContainer")
  }
      /**
    * @function onPressFirstButton: this function is for testing the button button selection in the toggle button 
    */
  onPressFirstButton=()=>{
    console.log("first button")
  }
      /**
    * @function onPressSecondButton: 
    */
  onPressSecondButton=()=>{
    console.log("second button")
  }
    /**
    * @function onPressResetButton: this funciton is for setting the default setting
    */
  onPressResetButton=()=>{
    console.log("reset Buttton");
  }
      /**
    * @function onPressApplyButton: this function is for saving the settings 
    * after modifing 
    */
  onPressApplyButton=()=>{
    console.log("apply")
  }

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are fetching "handleSubmit" from the props and passing it to "onPress" event of then
    * submit button. "handleSubmit" submits the form after checking the validation.
    */
  render() {
    const {handleSubmit} = this.props;
    return (
    <MyHarvestSortAndFilterTemplate 
    onPressFirstButton={this.onPressFirstButton}
    onPressSecondButton={this.onPressSecondButton}
    onPressResetButton={this.onPressResetButton}
    onPressApplyButton={this.onPressApplyButton}
      />
    );
  }
}

/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state =>({

})

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch =>({

})
/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps,mapDispatchToProps)(MyHarvestSortAndFilterContainer);