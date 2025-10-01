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
                <View style={{gap:3}}>
                <CustomText text={"Forgot Your Password?"} fontSize={32} fontFamily={fonts.Roboto_Medium}  />
                <CustomText text={"Need a password reset? We’re here to help—simply"}/>
                <CustomText text={"verify your details."}/>

                </View>

           

            <CustomText text={"User Name"} marginTop={15} fontFamily={fonts.Roboto_Regular} fontSize={26} />

            <View style={{ marginTop:sizeHelper.calHp(10), gap: 5 }}>
                <CustomTextInput placeholder={"User Name"} source={images.person} />

                <CustomText text={"Email"} marginTop={10} fontFamily={fonts.Roboto_Regular} fontSize={26} />
 <View style={{ marginTop:sizeHelper.calHp(5), gap: 5 }}>
                <CustomTextInput placeholder={"Email"} source={images.email} />
                <CustomText text={"Enter Your Pet Name"} marginTop={20} fontFamily={fonts.Roboto_Regular} fontSize={26} />
                <CustomTextInput placeholder={"Enter Your Pet name"} />


            </View>

            </View>


            <View style={{ marginTop:sizeHelper.calHp(80) }}>
                <CustomButton text={"Reset Password"} fontFamily={fonts.Roboto_Medium} onPress={()=>{

navigation.navigate("PersonalInformation")


                }} />
            </View>

        



            <View style={{ flexDirection: "row", justifyContent: "center", }}>

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