/**
 * @author Sharanagouda.k, Kallayya <Sharanagouda.k@photoninfotech.net,Kallayya@photoninfotech.net>
* @version 
* @summary MyHarvestSortAndFilterTemplate Screen for the application.
* @description The screen will display when the user clicks on my harvest after that user has to click on any item form the list 
then this screen will display next the user can modify the settings and he can save the settings or he can reset the settings
*As a Farmer, I should be able to view an overlay to sort/filter the delivery lists on the my harvest screen.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import VView, Text,SafeAreaView,TouchableOpacity,Image,UIManager,LayoutAnimation
*/
import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,SafeAreaView,TouchableOpacity,Image,UIManager,LayoutAnimation} from "react-native";
import ToggleButton from "../../../components/ToggleButton";
import OceanSprayImages from "../../../constants/imageSource";
/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "./styles";

const propTypes = {
    onPressFirstButton:PropTypes.func,
    onPressSecondButton:PropTypes.func,
    onPressFirstButtonView:PropTypes.func,
    onPressSecondButtonView:PropTypes.func,
    handleButtonClick:PropTypes.func,
    onPressApplyButton:PropTypes.func,
    onPressResetButton:PropTypes.func,
    toggleBotton: PropTypes.element,
    onSubmit: PropTypes.func,
    onbackPress: PropTypes.func,
    onForgotUsername:PropTypes.func,

}

const defaultProps = {
    onPressFirstButton:()=>{},
    onPressSecondButton:()=>{},
    onPressFirstButtonView: ()=>{},
    onPressSecondButtonView: ()=>{},
    handleButtonClick:()=>{},
    onPressApplyButton:()=>{},
    onPressResetButton:()=>{},
    onSubmit: () => {},
    onbackPress: () => {},
}

/**
* @class MyHarvestSortAndFilterTemplate
* @extends Component
* @summary Represents MyHarvestSortAndFilterTemplate class.
* @description This is a MyHarvestSortAndFilterTemplate class. It extands react Component class for using the functions comes along with it.
*/
class MyHarvestSortAndFilterTemplate extends Component {

    /**
    * @function constructor: Its one of the main functions of react component. It acts as life cycle like componentWillMount for initializing the 
    * default values
    */
    constructor(props){
        super(props);
        this.state={
            buttonId: 1,
            expanded1: false,
            expanded2: false,
            expanded3: false,
            expanded4: false,
            expanded5: false,
            expanded6: false,
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
        /**
    * @function _animate:  In _animate() we are using the react-native animation to push the item top and bottom using animation
    * we have added a toggle button to push the items top and bottom
    */
    _animate = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
      
    }
    /**
    * @function toggle: this toggle is for expanding the listview we use react-native animation 
    * calling the animate() function
    */
    toggle=(key)=>{
        if(key==='expanded1'){
       this.setState({
                expanded1: !this.state.expanded1
             }, () => {
                 this._animate();
             });
           }else if(key==='expanded2'){
             this.setState({
               expanded2: !this.state.expanded2
            }, () => {
                this._animate();
            });
           }else if(key==='expanded3'){
             this.setState({
               expanded3: !this.state.expanded3
            }, () => {
                this._animate();
            });
           }else if(key==='expanded4'){
             this.setState({
               expanded4: !this.state.expanded4
            }, () => {
                this._animate();
            });
        }else if(key==='expanded5'){
            this.setState({
              expanded5: !this.state.expanded5
           }, () => {
               this._animate();
           });
          }else{
             this.setState({
               expanded6: !this.state.expanded6
            }, () => {
                this._animate();
            });
           }
      }
 
    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are fetching "handleSubmit" from the props and passing it to "onPress" event of then
    * submit button. "handleSubmit" submits the form after checking the validation, for apply and reset buttons we use two buttons
    */
    handleButtonClick(id){
        this.setState({
            buttonId:id
        });
      }



    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are fetching "handleSubmit" from the props and passing it to "onPress" event of then
    * submit button. "handleSubmit" submits the form after checking the validation, for apply and reset buttons we use two buttons
    */
    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} />
                <SafeAreaView style={styles.appContainer}>
                   <View style={styles.actionContainer}>
                        <TouchableOpacity style={styles.resetView} onPress={this.props.onPressResetButton}>
                                <Text style={styles.resetText}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.applyView}>
                                <Text style={styles.applyText} onPress={this.props.onPressApplyButton}>Apply</Text>
                        </TouchableOpacity>
                   </View>
                    <View style={styles.subContainer}>
                       <View style={styles.sortTextView}>
                            <Text style={styles.sortTextStyle}>Sort</Text>
                       </View>
                        <ToggleButton
                        firstButtonName="Date"
                        secondButtonName="Status"
                        firstViewContainer={styles.firstViewContainer}
                        buttonId={this.state.buttonId}
                        toggleButtonContainer={styles.toggleButtonContainer}
                        handleButtonClick={this.handleButtonClick}
                        onPressFirstButton={this.props.onPressFirstButton}
                        onPressSecondButton={this.props.onPressSecondButton}
                        />
                        <View style={styles.sortTextView}>
                            <Text style={styles.sortTextStyle}>Filter</Text>
                        </View>
                    </View>
                    {this.state.buttonId == 1 ? 
                        <View style={{ backgroundColor: "#FFF" }}>
                <View style={styles.mainViewForList}>
                    <TouchableOpacity
                        value={this.state.expanded1}
                        onPress={() => this.toggle("expanded1")}>
                        <View style={styles.subViewForMainList}>
                            <View style={styles.imageViewForMainList}>
                                <Image source={OceanSprayImages.calendar}></Image>
                            </View>
                            <View style={styles.loyaltyMemberGroupView}>
                                <Text style={styles.loyaltyMemberGroup}>Corp Year <Text style={styles.textSpan}>(all)</Text></Text>
                            </View>
                            <View style={styles.expandIconView}>
                                <Image source={this.state.expanded1 ? OceanSprayImages.arrowUp : OceanSprayImages.arrowDown} style={styles.expandIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {this.state.expanded1 &&
                        <View style={styles.flatListView}>
                            <Text>1</Text>
                        </View>
                    }
                </View>
                <View style={styles.mainViewForList}>
                    <TouchableOpacity
                        value={this.state.expanded2}
                        onPress={() => this.toggle("expanded2")}>
                        <View style={styles.subViewForMainList}>
                            <View style={styles.imageViewForMainList}>
                                <Image source={OceanSprayImages.dateRange} width="100%" height='100%' ></Image>
                            </View>
                            <View style={styles.loyaltyMemberGroupView}>
                                <Text style={styles.loyaltyMemberGroup} >Date Range <Text style={styles.textSpan}>(all)</Text></Text>
                            </View>
                            <View style={styles.expandIconView}>
                                <Image source={this.state.expanded2 ? OceanSprayImages.arrowUp : OceanSprayImages.arrowDown} style={styles.expandIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {this.state.expanded2 &&
                        <View style={styles.flatListView}>
                            <Text>4</Text>
                        </View>
                    }
                </View>
                <View style={styles.mainViewForList}>
                    <TouchableOpacity
                        value={this.state.expanded3}
                        onPress={() => this.toggle("expanded3")}>
                        <View style={styles.subViewForMainList}>
                            <View style={styles.imageViewForMainList}>
                                <Image source={OceanSprayImages.contractNumber} width="100%" height='100%' ></Image>
                            </View>
                            <View style={styles.loyaltyMemberGroupView}>
                                <Text style={styles.loyaltyMemberGroup} >Contact Number <Text style={styles.textSpan}>(all)</Text></Text>

                            </View>
                            <View style={styles.expandIconView}>
                                <Image source={this.state.expanded3 ? OceanSprayImages.arrowUp : OceanSprayImages.arrowDown} style={styles.expandIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {this.state.expanded3 &&
                        <View style={styles.flatListView}>
                            <Text>3</Text>
                        </View>
                    }
                </View>
                <View style={styles.mainViewForList}>
                    <TouchableOpacity
                        value={this.state.expanded4}
                        onPress={() => this.toggle("expanded4")}>
                        <View style={styles.subViewForMainList}>
                            <View style={styles.imageViewForMainList}>
                                <Image source={OceanSprayImages.blogName} width="100%" height='100%' ></Image>
                            </View>
                            <View style={styles.loyaltyMemberGroupView}>
                                <Text style={styles.loyaltyMemberGroup} >Blog Name <Text style={styles.textSpan}>(all)</Text></Text>

                            </View>
                            <View style={styles.expandIconView}>
                                <Image source={this.state.expanded4 ? OceanSprayImages.arrowUp : OceanSprayImages.arrowDown} style={styles.expandIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {this.state.expanded4 &&
                        <View style={styles.flatListView}>
                            <Text>5</Text>
                        </View>
                    }
                </View>
                <View style={styles.mainViewForList}>
                    <TouchableOpacity
                        value={this.state.expanded5}
                        onPress={() => this.toggle("expanded5")}>
                        <View style={styles.subViewForMainList}>
                            <View style={styles.imageViewForMainList}>
                                <Image source={OceanSprayImages.bedName} width="100%" height='100%' ></Image>
                            </View>
                            <View style={styles.loyaltyMemberGroupView}>
                                <Text style={styles.loyaltyMemberGroup} >Bed Name <Text style={styles.textSpan}>(all)</Text></Text>

                            </View>
                            <View style={styles.expandIconView}>
                                <Image source={this.state.expanded5 ? OceanSprayImages.arrowUp : OceanSprayImages.arrowDown} style={styles.expandIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {this.state.expanded5 &&
                        <View style={styles.flatListView}>
                            <Text>5</Text>
                        </View>
                    }
                </View>
                <View style={styles.mainViewForList}>
                    <TouchableOpacity
                        value={this.state.expanded6}
                        onPress={() => this.toggle("expanded6")}>
                        <View style={styles.subViewForMainList}>
                            <View style={styles.imageViewForMainList}>
                                <Image source={OceanSprayImages.variety} width="100%" height='100%' ></Image>
                            </View>
                            <View style={styles.loyaltyMemberGroupView}>
                                <Text style={styles.loyaltyMemberGroup} >Variety <Text style={styles.textSpan}>(all)</Text></Text>
                            </View>
                            <View style={styles.expandIconView}>
                                <Image source={this.state.expanded6 ? OceanSprayImages.arrowUp : OceanSprayImages.arrowDown} style={styles.expandIcon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {this.state.expanded6 &&
                        <View style={styles.flatListView}>
                            <Text>6</Text>
                        </View>
                    }
                </View>

            </View>
                        
                        :
                    <View>
                        <Text>hiheel</Text>
                    </View>
                }
                   
                    
                </SafeAreaView>
            </React.Fragment>
        );
    }
}

MyHarvestSortAndFilterTemplate.defaultProps = defaultProps;

MyHarvestSortAndFilterTemplate.propTypes = propTypes;

export default MyHarvestSortAndFilterTemplate;