import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import AppHeader from '../../../components/AppHeader/AppHeader';
import { fonts } from '../../../utils/Themes/Fonts';
import {qrscan} from "../../../utils/Data/index"
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';

const ConnectDevice=({navigation})=>{
return(
<SafeAreaView style={styles.mainview}>
<AppHeader  source={images.backarrow}text={"Connect Devices"} marginLeft={5} />

<View style={{marginTop:sizeHelper.calHp(30)}}>

<CustomText text={"Scan QR Code"} fontFamily={fonts.Roboto_Medium} fontSize={29} />
<View >
<View style={styles.scanbox}>
{

qrscan.map(  (item,index) =>
    <View style={{}}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: sizeHelper.calWp(30), top: sizeHelper.calHp(30), }}>
                                            <View style={{ alignItems: "center", gap: sizeHelper.calHp(20) }}>
                                                <View style={{ height: sizeHelper.calHp(15), width: sizeHelper.calWp(20), backgroundColor: colors.primary, borderRadius: sizeHelper.calWp(99),marginTop:sizeHelper.calHp(12) }}>

                                                </View>
                                                {
                                                    qrscan.length - 1 !== index && (
                                                        <View style={{ height: sizeHelper.calHp(80), with: sizeHelper.calWp(20), width: 1, backgroundColor: colors.PearlGrey, bottom:sizeHelper.calHp(10)}} />
                                                    )
                                                }

                                            </View>
                                            <View style={{ }}>
                                                <CustomText text={item.description} fontSize={24} marginLeft={20} />
                                            </View>




                                        </View>
                                        
                                    </View>





)





}



</View>



</View>



</View>

<View style={{bottom:70,alignItems:"center",flex:1}}>
<CustomButton backgroundColor={colors.PureBlack} height={73} text={"Scan"} width={"90%"}/>

<CustomText text={"Or manual entry for device serial number."} fontSize={29} fontFamily={fonts.Roboto_Medium} marginTop={60}/>

<View style={{backgroundColor:colors.box,height:sizeHelper.calHp(300),width:"100%",borderRadius:sizeHelper.calWp(30),marginTop:sizeHelper.calHp(30),padding:20,gap:sizeHelper.calHp(10)}}>
<CustomText text={"Enter Serial Number"} fontSize={23} fontFamily={fonts.Roboto_Medium}/>
<View style={{gap:sizeHelper.calHp(35)}}>
<CustomTextInput  placeholder={"Enter Serial Number"} height={80} placeholderTextColor={colors.stonegray}  />

<CustomButton height={70} text={"Device Configuration"}   onPress={()=>{

navigation.navigate("DeviceConfiguration")


}}  />
</View>
</View>


</View>


<View style={{flexDirection:"row",marginBottom:90,justifyContent:"center"}}>
<CustomText text={"How to find my devices ID?"} fontSize={26}/>
<CustomText textDecorationLine={"underline"}  text={"(help link)"} color={colors.royalblue} fontSize={26}/>
</View>

</SafeAreaView>




)




}

const styles=StyleSheet.create({

    mainview:{

        flex:1,
        margin:sizeHelper.calWp(40),top:sizeHelper.calHp(20),
        backgroundColor:colors.background,marginTop:sizeHelper.calHp(50)
        },
        scanbox:{
height:sizeHelper.calHp(500),
width:"100%",backgroundColor:colors.box,
borderRadius:sizeHelper.calWp(30),
marginTop:sizeHelper.calHp(30)

        },





})

export default ConnectDevice;