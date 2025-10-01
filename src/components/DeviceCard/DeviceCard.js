
import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import sizeHelper from '../../utils/Helpers';
import { images } from '../../assets/images';
import CustomText from '../../components/CustomText/CustomText';
import { colors } from '../../utils/Themes/Colors';
import { fonts } from '../../utils/Themes/Fonts';

const DeviceCard=({item})=>{
return(

   

<TouchableOpacity  style={styles.cameraview}>
<View style={styles.camreabox}>
<Image source={item.image} style={{ height: sizeHelper.calWp(40), width: sizeHelper.calWp(40),}}/>

</View>
<View style={{justifyContent:"space-around",width:"68%"}}>
<CustomText text={item.title}  fontFamily={fonts.Roboto_Medium}fontSize={25}/>   
{

item.name &&  <CustomText text={item.name}/>


}


</View>
<View>
<Image source={item.nextimage} style={{ height: sizeHelper.calHp(30), width: sizeHelper.calWp(20),}}/>
</View>





</TouchableOpacity>



)

}
const styles=StyleSheet.create({


    cameraview:{
        width:"100%",
        height:sizeHelper.calHp(100),
        backgroundColor:colors.box,
        borderRadius:sizeHelper.calWp(30),
         flexDirection:"row",alignItems:"center",
        
        
        },

        camreabox:{
            width:sizeHelper.calWp(85),
            height:sizeHelper.calHp(70),
            backgroundColor:colors.background,
            borderRadius:sizeHelper.calWp(99),margin:sizeHelper.calWp(35),
            alignItems:"center",justifyContent:"center",
           
            
        
        },





})










export default DeviceCard;