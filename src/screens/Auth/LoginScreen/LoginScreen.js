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
const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainview}>

            <TopHeader />
            <View style={{ gap: 5, }}>
                <CustomText text={"Welcome Back!"} fontSize={32} fontFamily={fonts.Roboto_Medium} fontWeight={"600"} />
                <CustomText text={"Securely log in to your personalized experience"} />
            </View>

            <CustomText text={"Email"} marginTop={10} fontFamily={fonts.Roboto_Regular} fontSize={26} />

            <View style={{ marginTop: sizeHelper.calHp(9), gap: 5 }}>
                <CustomTextInput placeholder={"Email"} source={images.email} />
                <CustomText text={"Password"} marginTop={10} fontFamily={fonts.Roboto_Regular} fontSize={26}/>
                <CustomTextInput placeholder={"password"} source={images.lock} rightSource={images.hide}  />


            </View>

            <CustomText text={"Forget Password?"} marginTop={5} alignSelf={"flex-end"} fontSize={23} />

            <View style={{ marginTop:sizeHelper.calHp(60) }}>
                <CustomButton onPress={()=>{

navigation.navigate("EnterEmail")

                }} />
            </View>

            <View style={{ marginTop:sizeHelper.calHp(60), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ height:sizeHelper.calHp(1), width: "42%", backgroundColor: colors.Lightwarmgray, }}>


                </View>
                <Text style={{ marginHorizontal: sizeHelper.calWp(10)}}>OR</Text>

                <View style={{ height:sizeHelper.calHp(2), width: "42%", backgroundColor: colors.Lightwarmgray, }}>


                </View>

            </View>


            <TouchableOpacity

                style={styles.googlebutton}>

                <Image source={images.google} style={{ height:sizeHelper.calWp(53), width:sizeHelper.calWp( 53) }} />
                <CustomText fontSize={25} fontFamily={fonts.Roboto_Medium} text={"Sign In with Google"} />
            </TouchableOpacity>


            <TouchableOpacity

                style={styles.applebutton}>

                <Image source={images.apple} style={{ height:sizeHelper.calWp(53), width:sizeHelper.calWp( 53) }} />
                <CustomText fontSize={25} fontFamily={fonts.Roboto_Medium} text={"Sign In with Apple"} />
            </TouchableOpacity>


            <View style={{ flexDirection: "row", justifyContent: "center", marginTop:sizeHelper.calHp(35) }}>
                <CustomText text={"Don't have an Account? "} color={colors.olivegray} fontFamily={fonts.Roboto_Medium} />

                <Text style={{ textDecorationLine: 'underline', color: colors.primary, fontFamily: fonts.Roboto_Medium }}> Sign Up</Text>
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
    googlebutton: {
        height:sizeHelper.calHp(85),
        width: "100%",
        backgroundColor: colors.secondary,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 35, flexDirection: "row", gap: 13,
        borderWidth: 1.8, borderColor: colors.Lightwarmgray


    },

    applebutton:{
        height:sizeHelper.calHp(85),
        width: "100%",
        backgroundColor: colors.secondary,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15, flexDirection: "row", gap: 13,
        borderWidth: 1.8, borderColor: colors.Lightwarmgray


    }


})



export default LoginScreen;