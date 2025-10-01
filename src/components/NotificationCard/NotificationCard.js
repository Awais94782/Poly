import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import sizeHelper from '../../utils/Helpers';
import { colors } from '../../utils/Themes/Colors';
import { images } from '../../assets/images';
import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';
import  {notificationbox} from"../../utils/Data/index"

const NotificationCard=({item,index,array})=>{

return(


<View >
    <View style={{padding:sizeHelper.calWp(30),flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
       
       
       
        <View style={{flexDirection:"row",gap:sizeHelper.calWp(20),alignItems:"center"}}>
        {

item.image  && ( <Image source={item.image} style={{ height:sizeHelper.calWp(55),width:sizeHelper.calWp(55)}}/>
)



}

<CustomText text={item.title} fontSize={27}/>
</View>




<Image source={item.nextimage}style={{ height:sizeHelper.calHp(25),width:sizeHelper.calWp(20)}}/>







</View>

{

array?.length  -1 !== index &&(

<View style={styles.borderline} /> 


)



}






</View>















)





}
const styles=StyleSheet.create({

box:{
    width:"100%",
    height:sizeHelper.calHp(400),
    width:"100%",
    borderRadius:sizeHelper.calWp(20),
    backgroundColor:colors.box


},
borderline: {

    width: "90%", alignSelf: "center",

    borderWidth: sizeHelper.calWp(1.6),
    borderColor: colors.PearlGrey,
    
},





})

export default NotificationCard;