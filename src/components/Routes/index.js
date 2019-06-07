import PropTypes from "prop-types";
import React, {Component} from "react";
import {BackHandler, Image} from "react-native";
import {Router, Scene} from "react-native-router-flux";

import  MyHarvestDetailsPending  from "../../screens/MyHarvest/templates/MyHarvestPending";
import  LanguageContainer  from "../../screens/Language/containers";
import LoginContainer from '../../screens/Login/containers';
import ForgotPasswordContainer from "../../screens/ForgotPassword/containers"
import ForgotUserNameContainer from '../../screens/ForgotUsername/containers';
import MyHarvestSortAndFilterContainer from "../../screens/MyHarvestSortAndFilter/containers";
import FlowchartTemplate from "../../screens/Flowchart/Templates"

const propTypes = {
    isLoggedin: PropTypes.bool
};

const defaultProps = {
    isLoggedin: false
};



export default class Routes extends Component {

    constructor(props) {
        super(props);
        this.renderHomeIcon = this.renderHomeIcon.bind(this);
        this.renderMyHarvestIcon = this.renderMyHarvestIcon.bind(this);
        this.renderMyFarmIcon = this.renderMyFarmIcon.bind(this);
        this.renderCommunityIcon = this.renderCommunityIcon.bind(this);
        this.rendermoreIcon = this.rendermoreIcon.bind(this);
}

    handleBackButton() {
        BackHandler.exitApp();
        return true;
    }

    renderHomeIcon({focused})  {
        let image = focused ? require('../../assets/Home.png') : require('../../assets/Home.png');
        return ( <Image source={image} /> );
    }

    renderMyHarvestIcon({focused})  {
        let image = focused ? require('../../assets/MyHarvest.png') : require('../../assets/MyHarvest.png');
        return ( <Image source={image} /> );
    }

    renderMyFarmIcon({focused})  {
        let image = focused ? require('../../assets/MyFarm.png') : require('../../assets/MyFarm.png');
        return ( <Image source={image} /> );
    }

    renderCommunityIcon({focused})  {
        let image = focused ? require('../../assets/Community.png') : require('../../assets/Community.png');
        return ( <Image source={image} /> );
    }

    rendermoreIcon({focused})  {
        let image = focused ? require('../../assets/more.png') : require('../../assets/more.png');
        return ( <Image source={image} /> );
    }

    render() {
        const {isLoggedin} = this.props;
        return (
            <Router {...this.props}  backAndroidHandler={this.handleBackButton.bind(this)}>
                <Scene initial={true}>
                           <Scene tabs  key="Home"  hideNavBar={true}  tabBarPosition="bottom" swipeEnabled={true} tabBarStyle={{height: 65, backgroundColor:'#ffffff', paddingVertical: 4}}>
                                 <Scene key="Home" hideNavBar={true}  icon={this.renderHomeIcon} component={LanguageContainer} />
                                 <Scene key="My Harvest"  hideNavBar={true}  icon={this.renderMyHarvestIcon} component={MyHarvestDetailsPending}  />
                                 <Scene key="My Farm" hideNavBar={true}  icon={this.renderMyFarmIcon} component={LoginContainer}  />
                                 <Scene key="Community" hideNavBar={true}  icon={this.renderCommunityIcon} component={FlowchartTemplate}  />
                                 <Scene key="More" hideNavBar={true}  icon={this.rendermoreIcon} component={MyHarvestSortAndFilterContainer} />
                            </Scene>
                <Scene key="myHarvestFilterContainer" hideNavBar={true} component={MyHarvestSortAndFilterContainer} title="MyHarvest filter"/>    
                <Scene key="MyHarvestDetailsPending" hideNavBar={true} component={MyHarvestDetailsPending} title="MyHarvestDetailsPending" />
                    <Scene key="languageContainer" hideNavBar={true} component={LanguageContainer} title="LanguageContainer" />
                    <Scene key="loginContainer" hideNavBar={true} component={LoginContainer} title="Login" />
                    <Scene key="forgotUsername" hideNavBar={true} component={ForgotUserNameContainer} title="Forgot Username" />
                    <Scene key="forgotPassword" hideNavBar={true} component={ForgotPasswordContainer} title="Forgot Password" />
                </Scene>
            </Router>
        );
    }
}

Routes.defaultProps = defaultProps;

Routes.propTypes = propTypes;
