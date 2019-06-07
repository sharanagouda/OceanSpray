/**
 * @author Sharanagouda <Sharanagouda.k@photoninfotech.net>
 * @version 
 * @summary Custom Toolbar component.
 * @description A custom Toolbar component is being made so that it can be used everywhere..
 */


/**
 * @import React component from "react" for creating custom react component and to use life cycle
 * hooks come along with react.
 * @import View,Text,TouchaleOpacity, Image for creating our view.
 * @import PropType for using props.
 */
import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,Image, TouchableOpacity} from "react-native";
/**
 * @import styles object.This object have all the styles written for this particular screen.
 */
import styles from "./styles";
import OceanSprayImages from "../../constants/imageSource";

const propTypes = {
    title: PropTypes.string,
    leftIconName: PropTypes.string,
    onPressNavigateBack: PropTypes.func,
    onPressNotificationIcon:PropTypes.func,
    toolbarContainer: PropTypes.object,
    oceanLogoContainer:PropTypes.object,
    oceanLogoImage:PropTypes.object,
    notifications:PropTypes.number
};

const defaultProps = {
    title:'',
    onPressNavigateBack: () => {},
    onPressNotificationIcon: ()=>{},
    oceanLogoContainer:{},
    oceanLogoImage:{},
    notifications:0
}
/**
 * Represents Toolbar
 * @class Toolbar
 * @extends Component
 */
class Toolbar extends Component{

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render(){
        console.log(this.props.notifications);
        return(
                <View style={[styles.toolbarContainer, this.props.toolbarContainer]}>
                    <View style={styles.backArrowContainer}>
                        {this.props.leftArrowIcon !== "" &&
                            <TouchableOpacity
                            onPress={this.props.onPressNavigateBack}>
                                <View style={styles.leftIconContainer}>
                                    <Image style={styles.leftArrowImage} source={OceanSprayImages.backIconImage}/>
                                    <Text style={styles.backText}>Back</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={[styles.oceanLogoContainer,this.props.oceanLogoContainer]}>
                        <Image style={[styles.oceanLogoImage,this.props.oceanLogoImage]} source={OceanSprayImages.oceanSprayLogo}/>
                    </View>
                    <View style={styles.notificationContainer}>
                        {this.props.notificationIcon !== "" &&
                            <TouchableOpacity
                            onPress={this.props.onPressNotificationIcon}>
                                <View style={styles.notificationIconSubContainer}>
                                    {this.props.notifications > 0 &&   
                                    <View style={styles.countContainer}>
                                    <Text style={styles.notificationCount}>{this.props.notifications}</Text>
                                    </View>}
                                    <Image style={styles.notificationIconImage} source={OceanSprayImages.notificationBellIcon}/>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
           
        )
    }
}


Toolbar.defaultProps = defaultProps;
Toolbar.propTypes = propTypes;

export default Toolbar;