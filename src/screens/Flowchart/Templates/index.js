import React, {Component} from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions} from 'react-native';
import ToggleButton from "../../../components/ToggleButton";
import {navigateTo} from "../../../utils/utility";

class FlowchartTemplate extends Component<Props> {


    constructor(props){
        super(props);
        this.state={
            buttonId: 1,
            buttonId2: 1,
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleButtonClick2 = this.handleButtonClick2.bind(this);
    }

    handleButtonClick(id){
        this.setState({
            buttonId:id
        });
      }
      handleButtonClick2(id){
        this.setState({
            buttonId2:id
        });
      }


  render() {
    return (
      <View style={styles.container}>
        <Text>dshfhdshf</Text>
        <ToggleButton
                        firstButtonName="Date"
                        secondButtonName="Status"
                        buttonId={this.state.buttonId}
                        
                        handleButtonClick={this.handleButtonClick}
                        onPressFirstButton={this.props.onPressFirstButton}
                        onPressSecondButton={this.props.onPressSecondButton}
                        />
                        <ToggleButton
                        firstButtonName="Regional"
                        secondButtonName="My Farm"
                        firstViewContainer={styles.firstViewContainer}
                        buttonId={this.state.buttonId2}
                        toggleButtonContainer={styles.toggleButtonContainer}
                        textStyles={styles.textStyles}
                        handleButtonClick={this.handleButtonClick2}
                        onPressFirstButton={this.props.onPressFirstButton}
                        onPressSecondButton={this.props.onPressSecondButton}
                        secondButtonTextStyles={styles.secondButtonTextStyles}
                        />
      </View>
    );
  }
}



export default FlowchartTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
firstViewContainer:{
    backgroundColor: "#fff",
    borderColor:'rgb(186, 16, 44)',
    borderWidth:1
},
toggleButtonContainer: {
    height: 40,
    borderRadius:8,
    borderWidth: 2,
    borderColor: 'rgb(210, 215, 217)',
    backgroundColor:'#fff',
    alignItems:'center',
    flexDirection: "row",
    justifyContent: "space-between",
    width:Dimensions.get("window").width-140,
    marginLeft:70,
   marginTop:20
},
textStyles:{
    color:'rgb(186, 16, 44)'
},
secondButtonTextStyles:{
    color:'rgb(43, 43, 43)'
}
});