import react, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { colors } from "../../utils/Themes/Colors"
import CustomText from "../CustomText/CustomText";
import { fonts } from "../../utils/Themes/Fonts";
import sizeHelper from "../../utils/Helpers";

const CustomButton = ({ 
    height,
    borderRadius,
    width,
    text,
    onPress,
    backgroundColor,
    color,
    fontFamily,
    marginTop }) => {




    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ height: sizeHelper.calHp(height || 90), width: width || "100%", backgroundColor: backgroundColor || colors.primary, borderRadius: sizeHelper.calWp(borderRadius || 22), alignItems: "center", justifyContent: "center", marginTop: sizeHelper.calHp(marginTop || 0) }}>


            <CustomText fontSize={27} color={color || "white"} text={text || "Log in"} fontFamily={fontFamily || fonts.Roboto_Medium} />
        </TouchableOpacity>


    )



}
export default CustomButton;