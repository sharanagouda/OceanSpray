import { StyleSheet , Platform } from 'react-native';

const styles  = StyleSheet.create({
      appContainer: {
        flex: 1,
        backgroundColor:"#ebf0f3",
    },
    subContainer:{
        height:120,
        backgroundColor:"#ebf0f3",
    },
    actionContainer:{
        height:50,
        flexDirection:"row",
        backgroundColor:"#FFF",
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    resetView:{
        justifyContent:"center",
        alignItems:"flex-start"
    },
    applyView:{
        justifyContent:"center",
        alignItems:"flex-end"
    },
    resetText:{
        color:"rgb(0, 38, 127)",
        fontWeight:"400",
    },
    applyText:{
        color:"rgb(0, 38, 127)",
        fontWeight:"600",
    },
    sortTextView:{
        paddingTop:15,
        paddingBottom:5,
        
    },
    sortTextStyle:{
        paddingLeft:20
    },
    mainViewForList:{
     
    },
    subViewForMainList:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomColor:'rgb(239, 239, 239)',
      borderBottomWidth:1,
      paddingTop:22,
      paddingBottom:22,
    },
    imageViewForMainList:{
      flex:0.1,
      justifyContent:"flex-start",
      alignSelf:"center", 
      paddingLeft:20,
      
    },
    imageForMainList:{ 
      height: 61, 
      width: 61, 
    },
    loyaltyMemberGroup:{ 
      fontSize: 15,
      marginTop:-1, 
      fontWeight: "400",
      color: "#000",
      
    },
    loyaltyMemberGroupView:{
      flex:0.8, 
      justifyContent:"center",
      flexDirection:'column',
    },
    
    expandIconView:{
      flex:0.1, 
       justifyContent:"center", 
    //   alignSelf:"center",
      paddingRight:Platform.OS === "ios" ? 10 : 5,
  },
    expandIcon:{
        height:15
    },
    flatListView:{
      paddingTop:17,
      paddingBottom:20,
      backgroundColor:"#FAFAFA",
      borderBottomColor:'rgb(239, 239, 239)',
      borderBottomWidth:1,
    },
    mainViewforSubListView:{  
      flex:1,
      flexDirection: "row",
      paddingVertical:9,
    },
    imageforSubContentView:{
      flex:0.2,
      justifyContent:"flex-start",
      alignSelf:"flex-start",
      paddingLeft:17,
      paddingTop:6,
    },
    imageforSubContent:{ 
      height: 27, 
      width: 27,
      resizeMode:"contain",
      marginLeft:2,
      paddingTop:5
    },
  subTextContentView:{ 
    flex:1.2,
    justifyContent:"center",
    alignItems:"flex-start",
  },
    subTextContent:{ 
    color:"#848484",
    fontSize:14,
    paddingRight:15,
    paddingTop:1
},
textSpan : {
    color:'rgb(147,147,147)',
    fontSize:14
}
  });

export default styles;