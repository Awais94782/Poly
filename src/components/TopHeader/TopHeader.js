import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

import CustomText from "../CustomText/CustomText";
import { colors } from "../../utils/Themes/Colors";
import { images } from "../../assets/images/index";
import {useNavigation} from "@react-navigation/native"
import { fonts } from "../../utils/Themes/Fonts/index";
const TopHeader=({text,fontSize,fontWeight,marginTop,onPress,source,width,height})=>{
    const navigation=useNavigation()

return(
    
    <View style={{ flexDirection:"row",alignItems:"center",justifyContent:"center"}}>

        <TouchableOpacity style={styles.arrowview}    onPress={()=>{

navigation.goBack()

        }}>
            <Image source={source} style={{height:30,width:30}}
              />



        </TouchableOpacity>

        <View style={styles.logoview}>

<Image   source={images.applogo}   style={{resizeMode:"center"}} />

</View>
</View>

)


}



const styles=StyleSheet.create({

    arrowview:
    {
        width: 35,
        height: 35,
        borderRadius: 99,
        backgroundColor:colors.white,
        alignItems: "center",
        justifyContent: "center"
    },
    arrowimage: {
        height: 12, width: 25
    },

    logoview:{




    }
})
export default TopHeader;