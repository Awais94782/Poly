
import React from 'react'; 


import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import TopHeader from '../../../components/TopHeader/TopHeader';
import CustomText from '../../../components/CustomText/CustomText';
import { fonts } from '../../../utils/Themes/Fonts';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { images } from '../../../assets/images';
import {dashbord} from "../../../utils/Data/index"
const SettingScreen = ({navigation})=>{


  return (
    
<SafeAreaView  style={styles.mainview}>
<View style={{alignItems:"center",marginTop:sizeHelper.calHp(40)}}>
<CustomText text={"Setting"} fontSize={29} fontFamily={fonts.Roboto_Medium} />
</View>
<TouchableOpacity 
onPress={()=>{
navigation.navigate("AccountSettings")


}}


style={{marginTop:20}}>
<View style={styles.imagebox}>
<Image source={images.homeimage} style={{height:sizeHelper.calWp(100),width:sizeHelper.calWp(100)}}/>

<View  style={{}}>

<CustomText text={"Zain Malik"} fontSize={26} fontFamily={fonts.Roboto_Medium}/>
<CustomText text={"zainmalik02323@gmail.com"} color={colors.olivegray}/>

</View>

</View>
</TouchableOpacity>

<View style={styles.dashbordbox}>

<FlatList
data={dashbord}
renderItem={( {item,index})  =>{
return(
  <View>
{

dashbord.length -1 !== index &&(

<TouchableOpacity style={{marginHorizontal:sizeHelper.calWp(20),marginTop:sizeHelper.calHp(15)}}>
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
    
    
    <View style={{ flexDirection: 'row', gap:sizeHelper.calWp(20)}}>
      <Image source={item.image} style={{ height: sizeHelper.calWp(45), width: sizeHelper.calWp(45),marginTop:sizeHelper.calHp(5)}} />
     

      <CustomText text={item.title} fontSize={25} fontFamily={fonts.Roboto_Medium} marginTop={3} />
     
    </View>

   
    <Image source={item.next} style={{ height: sizeHelper.calHp(25), width: sizeHelper.calWp(20) }}/>

  </View>

  {
                dashbord.length - 1 !== index && (
            <View style={styles.borderline} />           )
          }


  
  
</TouchableOpacity>




)


}
    



  </View>








)


}


}



/>


<TouchableOpacity style={{alignItems:"center",justifyContent:"center",flexDirection:"row",gap:sizeHelper.calWp(5)}}>
<Image source={images.logout} style={{  height: sizeHelper.calWp(50), width: sizeHelper.calWp(50) }}/>
<CustomText text={"Logout"}  color={colors.red} fontSize={27}/>
</TouchableOpacity>

</View>



</SafeAreaView>

 


  )
}
const styles=StyleSheet.create({

  mainview:{

    flex:1,
    margin:sizeHelper.calWp(40),top:sizeHelper.calHp(20),
    backgroundColor:colors.background,marginTop:sizeHelper.calHp(10)
    },
    imagebox:{
height:sizeHelper.calHp(120),
width:"100%",
backgroundColor:colors.box,
borderRadius:sizeHelper.calWp(30),
alignItems:"center",
padding:sizeHelper.calWp(30),flexDirection:"row",gap:sizeHelper.calWp(20)

    },


    borderline: {

      width: "98%", alignSelf: "center",

      borderWidth: sizeHelper.calWp(1.6),
      borderColor: colors.PearlGrey,
      marginTop: sizeHelper.calHp(20),
  },
    dashbordbox:{

      height:sizeHelper.calHp(870),
      width:"100%",
      backgroundColor:colors.box,
      borderRadius:sizeHelper.calWp(30),
marginTop:sizeHelper.calHp(20),




    }



})


export default SettingScreen;
