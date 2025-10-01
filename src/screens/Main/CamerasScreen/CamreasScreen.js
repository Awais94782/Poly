import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { fonts } from '../../../utils/Themes/Fonts';
import AppHeader from '../../../components/AppHeader/AppHeader';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';


const CamreasScreen=({navigation})=>{

const camera =[

    {
        id:1,
        title:"Backyard Camera",
        name:"Live Feed",
        image:require("../../../assets/images/Maskgroup2.png"),
        playimage:require("../../../assets/images/play.png")
        
        },
        {
            id:2,
            title:"Front Door Camera ",
            name:"Live Feed",
            image:require("../../../assets/images/Maskgroup4.png"),
            playimage:require("../../../assets/images/play.png")
        
            
            },{
                id:3,
                title:"TV Lounge Camera",
                name:"Live Feed",
                image:require("../../../assets/images/Maskgroup.png"),
                playimage:require("../../../assets/images/play.png")
        
                
                },

]


return(
<SafeAreaView style={styles.mainview}>

<AppHeader    text={" Cameras"} marginRight={30} />

<View style={{alignItems:"center",}}>
<CustomText text={"3 Devices"}  color={colors.olivegray}  />
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
<ScrollView>
<View style={{ top:sizeHelper.calHp(30), margin:sizeHelper.calWp(10),}}>
<FlatList
    data={camera}
   contentContainerStyle={{ gap:sizeHelper.calHp(20)}}
    renderItem={({ item }) =>( <View  style={styles.backyardcamrea}   >
<View style={{flexDirection:"row"}}>
<View style={styles.camreabox}>
<Image source={images.camera} style={{ height: sizeHelper.calWp(40), width: sizeHelper.calWp(40),}}/>

</View>

<View style={{flexDirection:"row",gap:sizeHelper.calWp(60),top:sizeHelper.calHp(40)}}>
<CustomText   text={item.title}  fontFamily={fonts.Roboto_Medium} fontSize={28}  />
<View style={{height:sizeHelper.calHp(35),width:sizeHelper.calWp(140),borderRadius:sizeHelper.calWp(40),backgroundColor:colors.connected,alignItems:"center",justifyContent:"center"}}  >
<CustomText text={"Connected"} color={colors.connectedtext} fontSize={18}/>
</View>

</View>



</View>
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:15}}>
<CustomText  text={item.name} fontSize={27} fontFamily={fonts.Roboto_Medium} />
<TouchableOpacity style={{height:sizeHelper.calHp(45),width:sizeHelper.calWp(170),borderWidth:sizeHelper.calWp(1),borderRadius:sizeHelper.calWp(30),backgroundColor:colors.PureBlack,justifyContent:"center",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}
>
   

<Image source={images.mapicon} style={{ height:sizeHelper.calWp(25),width:sizeHelper.calWp(25)}}/>
<CustomText text={"View Map"}color={colors.box}fontSize={18}/>
</TouchableOpacity>

</View>
<View>
<TouchableOpacity 
  onPress={()=>{
if(item.id === 1)
{

navigation.navigate("FrontCamera");

}






  }}
>
<Image source={item.image} style={{height:sizeHelper.calHp(325),width:sizeHelper.calWp(650),borderRadius:sizeHelper.calWp(25),margin:sizeHelper.calWp(22)}}/>
<View style={{height:sizeHelper.calHp(17),
    width:sizeHelper.calWp(20),
    borderRadius:sizeHelper.calWp(99),
    backgroundColor:colors.red,
    borderWidth:sizeHelper.calWp(2),
    borderColor:colors.box,
    position:"absolute",
    top:sizeHelper.calHp(50),left:sizeHelper.calWp(60)
    
    }}>

</View>
<CustomText text={"Live"} position={"absolute"} marginLeft={100} marginTop={45} color={colors.box}fontSize={18} />
<Image source={images.wifi} style={{position:"absolute",left:sizeHelper.calWp(460),top:sizeHelper.calHp(288),height:sizeHelper.calWp(45),width:sizeHelper.calWp(45),tintColor:colors.box}}/>
<Image source={images.persent} style={{position:"absolute",left:sizeHelper.calWp(530),top:sizeHelper.calHp(295),height:sizeHelper.calHp(20),width:sizeHelper.calWp(60),}}/>
<Image source={images.battery} style={{position:"absolute",left:sizeHelper.calWp(600),top:sizeHelper.calHp(287),height:sizeHelper.calWp(45),width:sizeHelper.calWp(45),tintColor:colors.box}}/>
<Image source={item.playimage} style={{position:"absolute",left:sizeHelper.calWp(300),top:sizeHelper.calHp(130),height:sizeHelper.calWp(45),width:sizeHelper.calWp(45)}}/>


<View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:15}}>
<CustomText text={"Last Event"}   />
<CustomText text={"Motion detected at 8:30 AM"}   />

</View>

</TouchableOpacity>





</View>


</View>   )  }


/>                       




</View>

</ScrollView>
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
backyardcamrea:{
    width:"100%",
    height:sizeHelper.calHp(590),
    backgroundColor:colors.box,
    borderRadius:sizeHelper.calWp(40),
 
   


},

camreabox:{
    width:sizeHelper.calWp(85),
    height:sizeHelper.calHp(70),
    backgroundColor:colors.background,
    borderRadius:sizeHelper.calWp(99),margin:sizeHelper.calWp(35),
    alignItems:"center",justifyContent:"center",
   
    

},

})

export default CamreasScreen;