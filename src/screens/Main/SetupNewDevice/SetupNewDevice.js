import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { fonts } from '../../../utils/Themes/Fonts';
import AppHeader from '../../../components/AppHeader/AppHeader';
import DeviceCard from '../../../components/DeviceCard/DeviceCard';
import {newDevices} from "../../../utils/Data/index"

const SetupNewDevice=()=>{
return(
<SafeAreaView style={styles.mainview}>

<AppHeader  source={images.backarrow}text={"Set Up New Device"}  marginLeft={5} />


<View >
<FlatList
data={newDevices}
contentContainerStyle={{gap:sizeHelper.calHp(20)}}
renderItem={({item,index }) =>{
return(
<DeviceCard item={item}/>










)








} }


/>





</View>





</SafeAreaView>


)



}


const styles=StyleSheet.create({

    mainview:{

        flex:1,
        margin:sizeHelper.calWp(30),top:sizeHelper.calHp(20),
        backgroundColor:colors.background,marginTop:sizeHelper.calHp(40)
        },
        cameraview:{
            width:"100%",
            height:sizeHelper.calHp(100),
            backgroundColor:colors.box,
            borderRadius:sizeHelper.calWp(30),
             flexDirection:"row",alignItems:"center",marginTop:sizeHelper.calHp(15)
            
            
            },
    
            camreabox:{
                width:sizeHelper.calWp(85),
                height:sizeHelper.calHp(70),
                backgroundColor:colors.background,
                borderRadius:sizeHelper.calWp(99),margin:sizeHelper.calWp(35),
                alignItems:"center",justifyContent:"center",
               
                
            
            },




})


export default SetupNewDevice