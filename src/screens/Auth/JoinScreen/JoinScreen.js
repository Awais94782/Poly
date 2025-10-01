import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CustomText from "../../../components/CustomText/CustomText"
import CustomTextInput from "../../../components/CustomTextInput/CustomTextInput"
import { colors } from "../../../utils/Themes/Colors";
import TopHeader from "../../../components/TopHeader/TopHeader"
import { images } from "../../../assets/images";
import { fonts } from "../../../utils/Themes/Fonts";
import CustomButton from "../../../components/CustomButton/CustomButton"
import sizeHelper from "../../../utils/Helpers";
const JoinScreen = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <SafeAreaView style={styles.mainview}>

            <TopHeader source={images.backarrow} />
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ gap: sizeHelper.calHp(3) }}>
                        <CustomText text={"Join the Journey! "} fontSize={32} fontFamily={fonts.Roboto_Medium} />
                        <CustomText text={"Begin your journey with just a few steps."} />

                    </View>



                    <CustomText text={"Email"} marginTop={15} fontSize={24} />

                    <View style={{ marginTop: sizeHelper.calHp(10), gap:sizeHelper.calHp(10) }}>
                        <CustomTextInput placeholder={"Email"} source={images.email} />

                        <CustomText text={"Password"} marginTop={10} fontFamily={fonts.Roboto_Regular} fontSize={26} />
                        <View style={{ marginTop: sizeHelper.calHp(5), gap: 5 }}>
                            <CustomTextInput placeholder={"Password"}
                                source={images.lock}
                                secureTextEntry={hidePassword}

                                onRightSourcePress={() => setHidePassword(!hidePassword)}
                                rightSource={
                                    hidePassword ?
                                        images.hide


                                        : images.visible
                                }

                            />


                            <CustomText text={"Confiem Password"} marginTop={20} fontFamily={fonts.Roboto_Regular} fontSize={26} />

                            <CustomTextInput placeholder={"Confirm Password"}
                                source={images.lock}
                                secureTextEntry={hidePassword}

                                onRightSourcePress={() => setHidePassword(!hidePassword)}
                                rightSource={
                                    hidePassword ?
                                        images.hide


                                        : images.visible
                                }

                            />


                        </View>

                    </View>


                    <View style={{ marginTop: sizeHelper.calHp(80) }}>
                        <CustomButton text={"Sign Up"} fontFamily={fonts.Roboto_Medium} onPress={() => {

                    navigation.navigate("")

                        }} />


<View style={{ flexDirection: "row", justifyContent: "center", marginTop:sizeHelper.calHp(30) }}>
                    <CustomText text={"Already have an Account?"} color={colors.olivegray} />
                    <CustomText text={"Sign In"} textDecorationLine={"underline"} color={colors.primary} />

                </View>
                    </View>





                    <View style={{ flexDirection: "row", justifyContent: "center", }}>

                    </View>
                </View>
                <View style={{ paddingTop: sizeHelper.calHp(250), alignItems: "center" }}>
                    <CustomText color={colors.olivegray} text={"By continuing,you accept our"} marginLeft={15} />
                </View>
                <View style={{ flexDirection: "row", gap: sizeHelper.calWp(6), justifyContent: "center" }}>
                    <CustomText textDecorationLine={"underline"} text={"Term of Use"} color={colors.royalblue} />
                    <CustomText text={"and"} color={colors.olivegray} />
                    <CustomText textDecorationLine={"underline"} text={"privacy Policy"} color={colors.royalblue} />
                </View>
            </ScrollView>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    mainview: {
        padding: sizeHelper.calWp(35),
        flex: 1,
        backgroundColor: colors.background


    },



})



export default JoinScreen;