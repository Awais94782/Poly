import React from "react";
import { View,Text} from "react-native";
import { fonts } from "../../utils/Themes/Fonts";
import {colors} from "../../utils/Themes/Colors"
import sizeHelper from "../../utils/Helpers";


     const CustomText=({text,fontSize,fontWeight,color,fontFamily,textAlign,marginRight,marginHorizontal,marginLeft,alignSelf,marginTop,textDecorationLine,position,lineHeight})=>{
return(

<Text style={{ fontSize:sizeHelper.calHp(fontSize   || 21) ,
    fontWeight:fontWeight   || "500",
    color:color  ||  colors.PureBlack ,
     fontFamily:fontFamily    ||  fonts.Roboto_Regular,
     marginTop:sizeHelper.calHp(marginTop   || 0) ,
     alignSelf:alignSelf ,
      marginLeft:sizeHelper.calWp(marginLeft   || 0) ,
     marginHorizontal:sizeHelper.calWp(marginHorizontal  || 0) ,  
      marginRight:sizeHelper.calWp(marginRight  || 0),
    textAlign:textAlign,
    textDecorationLine:textDecorationLine,position:position,
    lineHeight:sizeHelper.calHp(lineHeight || 40)

    }} >


{text}


</Text>




)



}
export default CustomText;