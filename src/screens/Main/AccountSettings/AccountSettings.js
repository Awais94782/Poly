import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { fonts } from '../../../utils/Themes/Fonts';
import AppHeader from '../../../components/AppHeader/AppHeader';
import NotificationCard from "../../../components/NotificationCard/NotificationCard"
import {settingbox} from "../../../utils/Data/index"
const AccountSettings=()=>{
return(
<SafeAreaView  style={styles.mainview}>
<View style={{marginTop:sizeHelper.calHp(40)}}>
    <AppHeader text={"Account Setting"} marginLeft={5}/>



</View>
<View style={{alignItems:"center",marginTop:sizeHelper.calHp(50)}}>
<Image   source={images.homeimage} style={{height:sizeHelper.calWp(160),width:sizeHelper.calWp(160),}}    />
<View style={styles.camerabox}>
<Image source={images.profilecamera} style={{height:sizeHelper.calWp(30),width:sizeHelper.calWp(30),}} />


</View>
<CustomText text={"Zain Malik"} fontFamily={fonts.Roboto_Medium} fontSize={27} marginTop={15}/>
<CustomText text={"zainmalik12323@gmail.com"} color={colors.olivegray}/>

</View>
<View style={styles.box}>

{

settingbox.map(( item ,index ) => 
{
return(
    <NotificationCard 
    array={settingbox}
    item={item} index={index}   />




)
}



)



}




</View>




</SafeAreaView>






)




}

const styles=StyleSheet.create({
  mainview:{

    flex:1,
    margin:sizeHelper.calWp(40),
    backgroundColor:colors.background,marginTop:sizeHelper.calHp(10)
    },
camerabox:{height:sizeHelper.calWp(60),
    width:sizeHelper.calWp(60),
    borderRadius:sizeHelper.calWp(50),
    backgroundColor:colors.box,
    alignItems:"center",
position:"absolute"  , 
 justifyContent:"center",
top:sizeHelper.calHp(80),
marginLeft:sizeHelper.calWp(130)

},
box:{
    width:"100%",
    height:sizeHelper.calHp(380),
    borderRadius:sizeHelper.calWp(20),
    backgroundColor:colors.box,marginTop:sizeHelper.calHp(25)


},


borderline: {

    width: "90%", alignSelf: "center",

    borderWidth: sizeHelper.calWp(1.6),
    borderColor: colors.PearlGrey,
    
},





})

export default AccountSettings