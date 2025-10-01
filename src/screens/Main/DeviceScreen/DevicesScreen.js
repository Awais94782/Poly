
import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { fonts } from '../../../utils/Themes/Fonts';
import AppHeader from '../../../components/AppHeader/AppHeader';
import {Devices} from "../../../utils/Data/index";

const DevicesScreen=({navigation})=>{




return(
<SafeAreaView style={styles.mainview}>

<AppHeader  source={images.backarrow}text={"Your Devices"} marginLeft={5} />



<View style={{marginTop:sizeHelper.calHp(25)}}>
{

Devices.map( (item) =>
<TouchableOpacity
onPress={()=>{

if(item.id === 1) {

navigation.navigate("CamreasScreen")



} if (item.id=== 2) {   


navigation.navigate("SensorScreen")


}



}}


style={styles.cameraview}>

<View style={styles.camreabox}>
<Image source={item.image} style={{ height: sizeHelper.calWp(40), width: sizeHelper.calWp(40),}}/>

</View>
<View style={{justifyContent:"space-around",width:"68%"}}>
<CustomText text={item.title}  fontFamily={fonts.Roboto_Medium}fontSize={25}/>    
<CustomText text={item.name} color={colors.olivegray}/>
</View>
<View>
<Image source={item.nextimage} style={{ height: sizeHelper.calHp(30), width: sizeHelper.calWp(20),}}/>
</View>
</TouchableOpacity>       )

}



</View>


<View style={{flex:1,alignItems:"center",justifyContent:"center",left:sizeHelper.calWp(190)}}>
<TouchableOpacity

onPress={()=>{
navigation.navigate("SetupNewDevice")



}}

style={styles.bottomsetup}>
<Image source={images.add} style={{height:sizeHelper.calWp(35),width:sizeHelper.calWp(35)}}/>
<CustomText  text={"Setup New Device"}  color={colors.box}/>


</TouchableOpacity>

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

cameraview:{
width:"100%",
height:sizeHelper.calHp(110),
backgroundColor:colors.box,
borderRadius:sizeHelper.calWp(30),
 flexDirection:"row",alignItems:"center",marginTop:sizeHelper.calHp(24)


},
camreabox:{
    width:sizeHelper.calWp(85),
    height:sizeHelper.calHp(70),
    backgroundColor:colors.background,
    borderRadius:sizeHelper.calWp(99),margin:sizeHelper.calWp(35),
    alignItems:"center",justifyContent:"center",
   
    

},
bottomsetup:{

    width:sizeHelper.calWp(300),
    height:sizeHelper.calHp(65),
    borderRadius:sizeHelper.calWp(40),
    backgroundColor:colors.primary,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
gap:sizeHelper.calWp(10)
}


})

export default DevicesScreen;