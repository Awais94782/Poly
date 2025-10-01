import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import AppHeader from '../../../components/AppHeader/AppHeader';
import { fonts } from '../../../utils/Themes/Fonts';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../../components/CustomButton/CustomButton';




const DeviceConfiguration=()=>{
return(
<SafeAreaView style={styles.mainview}>



<AppHeader text={"Device Configuration"} marginLeft={5}/>
<CustomText text={"Set Up Your Device"} fontFamily={ fonts.Roboto_Medium} fontSize={28} marginTop={30}/>
<View style={{flex:1}}>
<View style={styles.setupbox}>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:20,marginTop:sizeHelper.calHp(25)}}>
<CustomText text={"Enter Your Wifi Connection"} fontFamily={ fonts.Roboto_Medium} fontSize={25} />
<CustomText text={"Change"} color={colors.olivegray} />
</View>
<View style={{paddingHorizontal:sizeHelper.calWp(35),}}>

<CustomTextInput placeholder={"Enter Your wifi Connection"} placeholderTextColor={colors.stonegray}/>
<View style={{gap:sizeHelper.calHp(10),marginTop:sizeHelper.calHp(25)}}>
<CustomText text={"Password"} fontSize={23} />

<CustomTextInput placeholder={"Enter Password  "}  placeholderTextColor={colors.stonegray}/>
</View>
</View>
<View style={{alignItems:"center"}}>
<CustomButton height={80} backgroundColor={colors.PureBlack} text={"Connect"} marginTop={50} width={"90%"} />
</View>
</View>
<CustomText text={"Customize Device Name"} fontSize={27} fontFamily={fonts.Roboto_Medium} marginTop={30}/>
<View style={{height:sizeHelper.calHp(190),width:"100%",backgroundColor:colors.box,borderRadius:sizeHelper.calWp(30),marginTop:sizeHelper.calHp(25),padding:20 }}>
<View style={{gap:sizeHelper.calHp(10)}}>
<CustomText text={"Device Name"} fontSize={23}  />
<CustomTextInput placeholder={"Device Name (Opetional)"} placeholderTextColor={colors.olivegray} />
</View>


</View>




</View>
<View style={{marginBottom:sizeHelper.calHp(45)}}>
<CustomButton text={"Save & Continue"} height={75} />
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

        setupbox:{

            height:sizeHelper.calHp(470),
            width:"100%",backgroundColor:colors.box,
            borderRadius:sizeHelper.calWp(30),marginTop:sizeHelper.calHp(25)
           



        }






})

export default DeviceConfiguration;