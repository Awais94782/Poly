import React from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CustomText from "../../../components/CustomText/CustomText"
import CustomTextInput from "../../../components/CustomTextInput/CustomTextInput"
import { colors } from "../../../utils/Themes/Colors";
import TopHeader from "../../../components/TopHeader/TopHeader"
import { images } from "../../../assets/images";
import { fonts } from "../../../utils/Themes/Fonts";
import CustomButton from "../../../components/CustomButton/CustomButton"
import sizeHelper from "../../../utils/Helpers";
const PersonalInformation = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainview}>

            <TopHeader source={images.backarrow} />
            <ScrollView>
            <View style={{ gap: 5, flex: 1 }}>
                <CustomText text={"Tell Us About Yourself!"} fontSize={33} fontFamily={fonts.Roboto_Medium} />
                <CustomText text={"Share some basic details to get started."} />



                <CustomText text={"User Name"} marginTop={10} fontFamily={fonts.Roboto_Regular} fontSize={26} />

                <View style={{ marginTop:sizeHelper.calHp(5), gap: 5 }}>
                    <CustomTextInput placeholder={"User Name"} source={images.person} />

                    <CustomText text={"Date of Birth"} marginTop={10} fontFamily={fonts.Roboto_Regular} fontSize={26} />
                    <View style={{ marginTop:sizeHelper.calHp(10), gap: 5 }}>
                        <CustomTextInput placeholder={"DD-MM-YY"} source={images.calander} />
                        <CustomText text={"Email"} marginTop={10} fontFamily={fonts.Roboto_Regular} fontSize={26} />
                        <CustomTextInput placeholder={"Email"} source={images.email} />


                        <CustomText text={"Phone Number"} marginTop={10} fontFamily={fonts.Roboto_Regular} fontSize={26} />
                        <CustomTextInput placeholder={"Phone Number"} source={images.phone} />

                        <CustomText text={"What is the name of your pet?"} marginTop={10} fontFamily={fonts.Roboto_Regular} fontSize={26} />
                        <CustomTextInput placeholder={"Type here"} />

                    </View>

                </View>


                <View style={{ marginTop:sizeHelper.calHp(50) }}>
                    <CustomButton text={"Continue"}  onPress={()=>{

navigation.navigate("VerifyScreen")


                    }}/>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop:sizeHelper.calHp(30) }}>
                    <CustomText text={"Already have an Account?"} color={colors.olivegray} />
                    <CustomText text={"Sign In"} textDecorationLine={"underline"} color={colors.primary} />

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

            </ScrollView>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    mainview: {
        padding: 20,
        flex: 1,
        backgroundColor: colors.background,


    },
    googlebutton: {
        height: 50,
        width: "100%",
        backgroundColor: colors.secondary,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 35, flexDirection: "row", gap: 13,
        borderWidth: 1.8, borderColor: colors.Lightwarmgray


    },

    applebutton: {
        height: 50,
        width: "100%",
        backgroundColor: colors.secondary,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15, flexDirection: "row", gap: 13,
        borderWidth: 1.8, borderColor: colors.Lightwarmgray


    }


})



export default PersonalInformation;