import React from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../../../components/CustomText/CustomText"
import CustomTextInput from "../../../components/CustomTextInput/CustomTextInput"
import { colors } from "../../../utils/Themes/Colors";
import TopHeader from "../../../components/TopHeader/TopHeader"
import { images } from "../../../assets/images";
import { fonts } from "../../../utils/Themes/Fonts";
import CustomButton from "../../../components/CustomButton/CustomButton"
import sizeHelper from "../../../utils/Helpers";
const EnterEmail = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainview}>

            <TopHeader  source={images.backarrow} />
            <View style={{ flex:1 }}>

                
            <CustomText text={"Forgot Your Password?"} fontSize={sizeHelper.calHp(48)} fontFamily={fonts.Roboto_Medium} fontWeight={"600"} />
            <View style={{gap:2,marginTop:sizeHelper.calHp(15)}}>
                <CustomText text={"It happens! Enter your email, and we'll send "} />
                <CustomText text={"verification code  to reset your password.  "} />
                </View>

           

            <CustomText text={"Email"} marginTop={sizeHelper.calHp(40)} fontFamily={fonts.Roboto_Regular} fontSize={sizeHelper.calHp(43)} />

            <View style={{ marginTop:sizeHelper.calHp(10), gap: 5 }}>
                <CustomTextInput placeholder={"Email"} source={images.email} />


            </View>


            <View style={{ marginTop:sizeHelper.calHp (70) }}>
                <CustomButton text={"Reset Password"} fontFamily={fonts.Roboto_Medium} onPress={()=>{


navigation.navigate("ForgotPassword")

                }}/>
            </View>

            <View style={{ marginTop:sizeHelper.calHp(40), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          

            
            </View>


  


            <View style={{ flexDirection: "row", justifyContent: "center", }}>
                <CustomText text={"Email not recognized? Try another way  "} color={colors.royalblue}/>

            </View>
            </View>
            <View style={{  marginTop:sizeHelper.calHp(60),alignItems:"center"}}>
                <CustomText color={colors.olivegray} text={"By continuing,you accept our"} marginLeft={15} />
                </View>
                <View style={{ flexDirection: "row", gap: 3,justifyContent:"center"}}>
                    <CustomText textDecorationLine={"underline"} text={"Term of Use"} color={colors.royalblue}  />
                    <CustomText text={"and"} color={colors.olivegray}  />
                    <CustomText textDecorationLine={"underline"} text={"privacy Policy"} color={colors.royalblue}/>
                </View>


        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    mainview: {
        padding:sizeHelper.calWp(35),
        flex: 1,
backgroundColor:colors.background


    },



})



export default EnterEmail;