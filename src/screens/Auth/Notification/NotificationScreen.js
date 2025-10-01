
import React from 'react-native';
import { StatusBar, StyleSheet, useColorScheme, View,Text,SafeAreaView } from 'react-native';
import AppHeader from '../../../utils/Helpers';
import TopHeader from '../../../components/TopHeader/TopHeader';
import CustomText from '../../../components/CustomText/CustomText';
import { fonts } from '../../../utils/Themes/Fonts';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import NotificationCard from "../../../components/NotificationCard/NotificationCard"
import {notificationbox} from "../../../utils/Data/index"

const NotificationScreen = () => {


    return (

        <SafeAreaView  style={styles.mainview}>
<View style={{alignItems:"center",}}>

<CustomText  text={"Notification"}   fontFamily={fonts.Roboto_Regular}  fontSize={28} />
            
</View>
<View style={styles.box}>

{

notificationbox.map(( item ,index ) => 
{
return(
    <NotificationCard
    array={notificationbox}

     item={item} index={index} />

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
        backgroundColor:colors.background,marginTop:sizeHelper.calHp(10),
        marginTop:sizeHelper.calHp(50)
        },

box:{
    width:"100%",
    height:sizeHelper.calHp(270),
    borderRadius:sizeHelper.calWp(20),
    backgroundColor:colors.box,marginTop:sizeHelper.calHp(25)


},






})

export default NotificationScreen;
