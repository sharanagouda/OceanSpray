import {StyleSheet,Platform,Dimensions } from 'react-native';


const styles = StyleSheet.create({

    toggleButtonContainer: {
            height: 40,
            borderRadius:8,
            borderWidth: 2,
            borderColor: 'rgb(210, 215, 217)',
            alignItems:'center',
            flexDirection: "row",
            justifyContent: "space-between",
            width:Dimensions.get("window").width-30,
            marginLeft:15,
           
        },
        fistViewContainer:{
            flex:1,
            height: 39,
            justifyContent:"center",
            alignItems:"center",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            backgroundColor: "rgb(0, 38, 127)",
        },
        secondButtonView:{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius:8,
            borderBottomRightRadius:8
        },
        secondViewcontainer:{
            flex:1,
            height: 39,
            justifyContent:"center",
            alignItems:"center",
        },
        textStyles:{
            color:"rgb(255, 255, 255)",
            fontWeight:"600",
        },

        secondButtonTextStyles:{
            color:"rgb(0, 38, 127)",
            fontWeight:"600",
        }
  
});


  export default styles;