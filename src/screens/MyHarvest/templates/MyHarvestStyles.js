
import { StyleSheet, Platform, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

//Fonts fot both Android & ios
// const SFProTextMedium = "SFProText-Medium";
// const SFProTextRegular = "SFProText-Regular";
const SFProTextSemibold = "SFProText-Semibold";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";


const HarvestDetailsStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "rgb(235,240,243)",
    paddingTop: ((Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 30 : 0),
    //paddingTop: ((Platform.OS === 'ios' && deviceHeight === 667 && deviceWidth === 375) || (Platform.OS === 'ios' && deviceHeight === 736 && deviceWidth === 414)? 20 : 20)
  },
  closeButtonView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  closeButtonSubView: {
    alignSelf: 'flex-end',
    position: 'absolute',
    paddingRight: 16,
    paddingTop: 5,
  },
  closeButton: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    justifyContent: 'flex-end'
  },
  allBadge: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === "ios" ? 48 : 23,
    marginLeft: -3,
    backgroundColor: "#FFF"
  },
  starMedal: {
    height: 48,
    width: 25,
    marginLeft: -54
  },
  whiteMedal: {
    height: 48,
    width: 26,
    marginLeft: 11
  },
  goldMedal: {
    height: 48,
    width: 29,
    marginLeft: Platform.OS === "ios" ? 9 : 8,
  },
  silverMedal: {
    height: 48,
    width: 27,
    marginLeft: 9,
  },
  bronzeMedal: {
    height: 49,
    width: 26,
    marginLeft: 8,
    marginRight: -54
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFF",
    paddingBottom: 2,
    paddingTop: Platform.OS === "ios" ? 15 : 14,
  },
  titleViewMainText: {
    fontSize: 22,
    color: "#000",
    // fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
    paddingBottom: Platform.OS === "ios" ? 5 : 4,
  },
  titleViewSubText: {
    fontSize: 14,
    paddingBottom: 10,
    color: "#000",
    // fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
  },
  joinNowView: {
    marginTop: 10,
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  joinNowText: {
    color: '#fff',
    paddingVertical: 2,
    textAlign: "center",
    fontSize: 12,
    // fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
  },
  contentView: {
    paddingTop: 16,
    paddingHorizontal: 8,
    paddingBottom: 40,
    borderBottomColor: 'rgb(239, 239, 239)',
    borderBottomWidth: 1,
  },
  firstContent: {
    fontSize: 16,
    paddingHorizontal: 7,
    // fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
    color: "rgb(132,132,132)"
  }
  ,
  secondContent: {
    paddingTop: Platform.OS === "ios" ? 15 : 13,
    paddingHorizontal: 7,
    fontSize: 16,
    // fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
    color: "rgb(132,132,132)"
  },
  loyaltyHeading: {
    paddingTop: 15,
    paddingLeft: 6,
    color: '#000',
    fontSize: 16,
    // fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
  },
  subListSeperator: {
    marginLeft: 0,
    marginRight: 0,
    height: 0.1,
  },
  mainViewForList: {

  },
  subViewForMainList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgb(239, 239, 239)',
    borderBottomWidth: 1,
    paddingTop: 19,
    paddingBottom: 19,
  },
  imageViewForMainList: {
    flex: 0.18,
    justifyContent: "flex-start",
    alignSelf: "center",
    paddingLeft: 15,
  },
  imageForMainList: {
    height: 61,
    width: 61,
  },
  loyaltyMemberGroup: {
    fontSize: 20,
    marginTop: 8,
    // fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
    // fontWeight: "bold",
    color: "#000",
  },
  loyaltyMemberText: {
    fontSize: 20,
    marginTop: 8,
    // fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
    fontWeight: "bold",
    color: "#000",
  },
  loyaltyMemberGroupView: {
    height: 45,
    width: deviceWidth - 30,
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: 'row',
    marginLeft: 16,
    // marginRight:30,
    //paddingLeft:22
  },
  loyaltyPoints: {
    fontSize: 14,
    paddingTop: 5,
    // fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
  },
  expandIconView: {
    flex: 1,
    // backgroundColor:"red",
    justifyContent: "flex-end",
    alignSelf: "center",
    paddingRight: Platform.OS === "ios" ? 20 : 20,
  },
  expandIcon: {

  },
  flatListView: {
    paddingTop: 17,
    paddingBottom: 20,
    backgroundColor: "#FAFAFA",
    borderBottomColor: 'rgb(239, 239, 239)',
    borderBottomWidth: 1,
  },
  mainViewforSubListView: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 9,
  },
  imageforSubContentView: {
    flex: 0.2,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    paddingLeft: 17,
    paddingTop: 6,
  },
  imageforSubContent: {
    height: 27,
    width: 27,
    resizeMode: "contain",
    marginLeft: 2,
    paddingTop: 5
  },
  subTextContentView: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  subTextContent: {
    color: "#848484",
    fontSize: 14,
    // fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
    paddingRight: 15,
    paddingTop: 1
  },
  pendingView:{ 
    flex: 1, 
    backgroundColor: "rgb(248,182,44)", 
    margin: 16, 
    width: deviceWidth - 30, 
    height: 50 
  },
  pendingText : { 
    color: "white", 
    fontSize: 16, 
    textAlign: "center", 
    paddingTop: 13, 
    fontWeight: "600" 
  },
  ImageStyle : { 
    marginLeft: 16, 
    marginRight: 16, 
    width: deviceWidth - 30, 
    height: 253 
  },
  listviewStyles : {
     width: deviceWidth - 30, 
     height: 810, 
     backgroundColor: "white", 
     marginTop: 17, 
     borderWidth: 1, 
     marginLeft: 16, 
     borderColor: "rgb(210, 215, 217)" 
    },
    whiteRowStyles : {
      height: 45, 
      flexDirection: "row" 
    },
    textStyle: {
      color: "rgb(43,43,43)", 
      fontSize: 16, 
      marginLeft: 20, 
      marginTop: 10, 
      textAlign: "center"
     },
     listTextStyle : {
      color: "rgb(43,43,43)", 
      fontWeight: "600", 
      fontSize: 16, 
      justifyContent: "flex-start", 
      alignItems: "flex-start", 
      marginTop: 10
     },
     grayRowStyles : { 
       height: 45,
       backgroundColor: "rgb(235,240,243)", 
       borderWidth: 1, 
       borderColor: "rgb(210, 215, 217)" , 
       flexDirection: "row" 
      },
      grayRowTextStyle:{ 
        color: "rgb(43,43,43)", 
        fontSize: 16, 
        marginLeft: 20, 
        marginTop: 10, 
        textAlign: "center" 
      },
      darkTextStyle:{ 
        color: "rgb(43,43,43)", 
        fontWeight: "600", 
        fontSize: 16, 
        justifyContent: "flex-start", 
        alignItems: "flex-start", 
        marginTop: 10 
      },
      ButtonViewStyles: { 
        flexDirection: "row", 
        marginTop: 26, 
        marginBottom: 26 
      },
      PreviousButtonView : { 
        width: 186, 
        height: 57, 
        marginLeft: 16, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "rgb(255,255,255)"
      },
      PreviousText : { 
        color: "rgb(0,38,127)", 
        fontWeight: "600" 
      },
      NextButtonView: {
       width: 186, 
       height: 57, 
       marginLeft: 12, 
       justifyContent: "center", 
       alignItems: "center", 
       backgroundColor: "rgb(255,255,255)" 
      }
});

export default HarvestDetailsStyles;