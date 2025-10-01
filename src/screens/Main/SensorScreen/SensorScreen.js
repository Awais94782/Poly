import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { fonts } from '../../../utils/Themes/Fonts';
import AppHeader from '../../../components/AppHeader/AppHeader';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import { Sensor} from "../../../utils/Data/index"

const SensorScreen=()=>{

 




return(
<SafeAreaView style={styles.mainview}>

<AppHeader    text={" Sensor"} />

<View style={{alignItems:"center",}}>
<CustomText text={"2 Devices"}  color={colors.olivegray} marginRight={35} />
</View>
<View style={{marginTop:sizeHelper.calHp(40)}}>
<CustomTextInput borderColor={colors.inputborder}
 borderWidth={3} 
 source={images.search}
  placeholder={"Search Devices"}
   borderRadius={55}
   margin={25}
   
   />


</View>
<View style={{marginTop:sizeHelper.calHp(35)}}>

<FlatList
data={Sensor}
contentContainerStyle={{ gap:sizeHelper.calHp(25)}}

renderItem={( {item} ) =>(  <TouchableOpacity style={styles.windowbox}>
<View style={{flexDirection:"row"}}>
<View style={styles.camreabox}>
<Image source={images.server} style={{ height: sizeHelper.calWp(40), width: sizeHelper.calWp(40),}}/>

</View>

<View style={{flexDirection:"row",gap:sizeHelper.calWp(60),top:sizeHelper.calHp(40)}}>
<CustomText   text={item.title}  fontSize={26}  />
<View style={{height:sizeHelper.calHp(30),width:sizeHelper.calWp(135),borderRadius:sizeHelper.calWp(40),backgroundColor:colors.connected,alignItems:"center",justifyContent:"center",right:30}}  >
<CustomText text={"Connected"} color={colors.connectedtext} fontSize={16}  />
</View>

</View>

</View>


<View style={{flex:1,flexDirection:"row",alignItems:"center",gap:sizeHelper.calHp(12),bottom:sizeHelper.calHp(30),marginHorizontal:sizeHelper.calWp(25)}}>
<Image   source={images.wifi} style={{height:sizeHelper.calWp(40),width:sizeHelper.calWp(40)}}  />
<CustomText   text={"60%"}   color={colors.PureBlack} fontSize={24} fontWeight={"700"} />
<Image   source={images.battery}  style={{height:sizeHelper.calWp(40),width:sizeHelper.calWp(40)}}  />  

<TouchableOpacity style={ styles.viewmap}
>
   

<Image source={images.mapicon} style={{ height:sizeHelper.calWp(25),width:sizeHelper.calWp(25)}}/>
<CustomText text={"View Map"}color={colors.box}fontSize={18}/>
</TouchableOpacity>
</View>
<View style={styles.borderline}>
</View>
<View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:sizeHelper.calWp(25),bottom:sizeHelper.calHp(30)}}>  
<CustomText  text={"Last Event"}/>
<CustomText  text={"Window opend at 8:30 Am"}/>

</View>


</TouchableOpacity>   ) }

/>



</View>




</SafeAreaView>





)





}

const styles=StyleSheet.create({

    mainview:{
        flex:1,
        margin:sizeHelper.calWp(20),
        top:sizeHelper.calHp(30),
        backgroundColor:colors.background,
        marginTop:sizeHelper.calHp(40),
    
    
    },
    windowbox:{
height:sizeHelper.calHp(280),
width:"100%",
backgroundColor:colors.box,borderRadius:sizeHelper.calWp(30)

    },
    camreabox:{
        width:sizeHelper.calWp(75),
        height:sizeHelper.calHp(60),
        backgroundColor:colors.background,
        borderRadius:sizeHelper.calWp(99),margin:sizeHelper.calWp(25),
        alignItems:"center",justifyContent:"center",top:sizeHelper.calHp(10)
       
    },
    viewmap:{
 height:sizeHelper.calHp(45),
 width:sizeHelper.calWp(170),
 borderWidth:sizeHelper.calWp(1),
 borderRadius:sizeHelper.calWp(30),
 backgroundColor:colors.PureBlack,
 flexDirection:"row",
 justifyContent:"space-evenly",
 alignItems:"center",
 left:sizeHelper.calWp(300),

    },




    borderline:{
       
        width:"90%",alignSelf:"center",
      bottom:sizeHelper.calHp(70),
        borderWidth:sizeHelper.calWp(1.2),
        borderColor:colors.PearlGrey
    },

})

export default SensorScreen;