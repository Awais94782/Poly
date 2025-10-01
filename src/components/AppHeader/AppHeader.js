import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import CustomText from "../CustomText/CustomText";
import { colors } from "../../utils/Themes/Colors";
import { images } from "../../assets/images/index";
import {useNavigation} from "@react-navigation/native"
import { fonts } from "../../utils/Themes/Fonts/index";
import sizeHelper from "../../utils/Helpers";
const AppHeader=({text,fontSize,fontWeight,marginTop,onPress,source,width,height,marginLeft,marginRight})=>{
    const navigation=useNavigation()

return(
    
    <View style={{ flexDirection:"row"}}>

        <TouchableOpacity     onPress={()=>{

navigation.goBack()

        }}>
            <Image source={images.backarrow} style={{height:sizeHelper.calWp(50),width:sizeHelper.calWp(50)}}
              
              />



        </TouchableOpacity>

        <View style={{left:sizeHelper.calHp(130)}}>

<CustomText text={text} fontFamily={fonts.Roboto_Medium} fontSize={sizeHelper.calHp(45)}  marginLeft={ marginLeft || 52}  marginRight={marginRight}/>
</View>
</View>

)


}




export default AppHeader;