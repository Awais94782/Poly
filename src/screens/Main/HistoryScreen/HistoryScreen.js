import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList,Text} from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { fonts } from '../../../utils/Themes/Fonts';
import AppHeader from '../../../components/AppHeader/AppHeader';
import {todayAlerts,yesterdayalerts,alaramsalerts,lightsalerts} from "../../../utils/Data/index"


const HistoryScreen=()=>{

const [ setToday,setSelectedToday]=useState(false)





const [ setHistory,setSelectdHistory]=useState("History")

return(
    <SafeAreaView style={styles.mainview}>
    <View style={{ margin: sizeHelper.calWp(20) }}>
        <AppHeader text={"History"} marginLeft={10} />
    </View>
    <View style={styles.securitybox}>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:sizeHelper.calWp(8)}}> 
<TouchableOpacity

onPress={()=>   setSelectdHistory ("cameras")   }

style={{height:sizeHelper.calHp(75),width:"33%", backgroundColor:setHistory === "cameras" ? colors.primary: colors.box ,borderRadius:sizeHelper.calWp(20),top:sizeHelper.calHp(6),alignItems:"center",justifyContent:"center"}}>
<CustomText  text={"Cameras"}   fontSize={25}  color={setHistory === "cameras" ? colors.box :colors.PureBlack } />



</TouchableOpacity>












<TouchableOpacity
onPress={()=> setSelectdHistory  ("alarams" )}


style={{height:sizeHelper.calHp(75),width:"33%", backgroundColor:setHistory === "alarams" ? colors.primary:colors.box ,borderRadius:sizeHelper.calWp(20),top:sizeHelper.calHp(6),alignItems:"center",justifyContent:"center"}}>
<CustomText  text={"Alarams"}   fontSize={25}  color={setHistory === "alarams" ? colors.box : colors.PureBlack} />


</TouchableOpacity>

<TouchableOpacity 
 onPress={()=> setSelectdHistory  ("lights" )}

style={{height:sizeHelper.calHp(75),width:"33%", backgroundColor:setHistory === "lights" ? colors.primary:colors.box  ,borderRadius:sizeHelper.calWp(20),top:sizeHelper.calHp(6),alignItems:"center",justifyContent:"center"}}>

<CustomText  text={"Lights"}   fontSize={25}color={setHistory === "lights" ? colors.box : colors.PureBlack}  />



</TouchableOpacity>
</View>
</View>


<View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:sizeHelper.calHp(30)}}> 
<CustomText text={"Today's Alerts"}  fontSize={28} fontFamily={fonts.Roboto_Medium} />



<TouchableOpacity style={{height:sizeHelper.calWp(45),width:sizeHelper.calWp(45),backgroundColor:colors.box,borderWidth:2,borderRadius:sizeHelper.calWp(12),alignItems:"center",justifyContent:"center"}}>


<Image source={images.check} style={{height:sizeHelper.calWp(20),width:sizeHelper.calHp(20)
}}/>


</TouchableOpacity>

</View>

<View style={{bottom:385}}>
                {

setHistory === "alarams" ?   (


<View style={{height:sizeHelper.calHp(700),width:"100%",marginTop:400,backgroundColor:colors.box,borderRadius:sizeHelper.calWp(30)}}>
<View style={styles.bottombox2}>
                    <View style={{
                        width: "100%",

                        borderRadius: sizeHelper.calWp(20),
                        height: sizeHelper.calHp(900), marginTop: sizeHelper.calHp(10), backgroundColor: colors.box,
                    }}   >

                        <FlatList

contentContainerStyle={{gap:sizeHelper.calHp(5),
    }}
                            data={alaramsalerts}
                            renderItem={({ item, index }) => {
                               


                                return (

                                    <TouchableOpacity style={{}}>
                                        <View style={{ flexDirection: "row",gap:sizeHelper.calWp(20), marginHorizontal: sizeHelper.calWp(30), top: sizeHelper.calHp(35), }}>
                                            <View style={{ alignItems: "center", gap: sizeHelper.calHp(45) }}>
                                                <View style={{ height: sizeHelper.calHp(15), width: sizeHelper.calWp(20), backgroundColor: colors.primary, borderRadius: sizeHelper.calWp(99),top:sizeHelper.calHp(10) }}>

                                                </View>
                                                {
                                                    alaramsalerts.length - 1 !== index && (
                                                        <View style={{ height: sizeHelper.calHp(80), with: sizeHelper.calWp(20), width: 1, backgroundColor: colors.PearlGrey, bottom:sizeHelper.calHp(20)}} />
                                                    )
                                                }

                                            </View>
                                            <View style={{  }}>
                                                <CustomText text={item.title} fontSize={24} fontFamily={fonts.Roboto_Medium} />
                                                <CustomText text={item.camera} color={colors.olivegray} />

                                                <CustomText text={item.time}   color={colors.olivegray}/>
                                            </View>





                                        </View>
                                    </TouchableOpacity>
                                )
                            }}



                        />
                    </View>
                </View>


</View>
):(

<></>

)

}    
</View>

<View style={{bottom:385
    
}}>


                {

setHistory === "lights" ?   (

<View style={{height:sizeHelper.calHp(400),width:"100%",marginTop:400,backgroundColor:colors.box,borderRadius:sizeHelper.calWp(30)}}>
<View style={styles.bottombox2}>
                    <View style={{
                        width: "100%",

                        borderRadius: sizeHelper.calWp(20),
                        height: sizeHelper.calHp(280), marginTop: sizeHelper.calHp(10), backgroundColor: colors.box,
                    }}   >

                        <FlatList

contentContainerStyle={{gap:sizeHelper.calHp(5),
    }}
                            data={lightsalerts}
                            renderItem={({ item, index }) => {
                               


                                return (

                                    <TouchableOpacity style={{}}>
                                        <View style={{ flexDirection: "row",gap:sizeHelper.calWp(20), marginHorizontal: sizeHelper.calWp(30), top: sizeHelper.calHp(35), }}>
                                            <View style={{ alignItems: "center", gap: sizeHelper.calHp(45) }}>
                                                <View style={{ height: sizeHelper.calHp(15), width: sizeHelper.calWp(20), backgroundColor: colors.primary, borderRadius: sizeHelper.calWp(99),top:sizeHelper.calHp(10) }}>

                                                </View>
                                                {
                                                    lightsalerts.length - 1 !== index && (
                                                        <View style={{ height: sizeHelper.calHp(80), with: sizeHelper.calWp(20), width: 1, backgroundColor: colors.PearlGrey, bottom:sizeHelper.calHp(20)}} />
                                                    )
                                                }

                                            </View>
                                            <View style={{  }}>
                                                <CustomText text={item.title} fontSize={24} fontFamily={fonts.Roboto_Medium} />
                                                <CustomText text={item.camera} color={colors.olivegray} />

                                                <CustomText text={item.time}   color={colors.olivegray}/>
                                            </View>





                                        </View>
                                    </TouchableOpacity>
                                )
                            }}



                        />
                    </View>
                </View>


</View>



):(

<></>

)

}


</View>



<ScrollView>
<View style={styles.bottombox}>
                    <View style={{
                        width: "100%",

                        borderRadius: sizeHelper.calWp(20),
                        height: sizeHelper.calHp(500), marginTop: sizeHelper.calHp(30), backgroundColor: colors.box,
                    }}   >

                        <FlatList
                            data={todayAlerts}
                            renderItem={({ item, index }) => {
                               


                                return (

                                    <TouchableOpacity
                                    onPress={()=> setSelectedToday (item) }
                                    
                                    
                                    
                                    style={{}}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: sizeHelper.calWp(30), top: sizeHelper.calHp(35), }}>
                                            <View style={{ alignItems: "center", gap: sizeHelper.calHp(45) }}>
                                                <View style={{ height: sizeHelper.calHp(15), width: sizeHelper.calWp(20), backgroundColor: colors.primary, borderRadius: sizeHelper.calWp(99),top:sizeHelper.calHp(12) }}>

                                                </View>
                                                {
                                                    todayAlerts.length - 1 !== index && (
                                                        <View style={{ height: sizeHelper.calHp(80), with: sizeHelper.calWp(20), width: 1, backgroundColor: colors.PearlGrey, bottom:sizeHelper.calHp(20)}} />
                                                    )
                                                }

                                            </View>
                                            <View style={{  }}>
                                                <CustomText text={item.title} fontSize={24} fontFamily={fonts.Roboto_Medium} />
                                                <CustomText text={item.camera} color={colors.olivegray} />

                                                <CustomText text={item.time}   color={colors.olivegray}/>
                                            </View>
                                            <Image source={item.image} style={{ height: sizeHelper.calHp(120), width: sizeHelper.calWp(230), borderRadius: sizeHelper.calWp(28), }} />

                                            <View style={styles.checkbox}>

</View> 


                                        </View>
                                    </TouchableOpacity>
                                )
                            }}



                        />
                    </View>
                </View>
                <CustomText text={"Yesterday's Alerts"}  fontSize={28} fontFamily={fonts.Roboto_Medium} />
                <View style={styles.bottombox2}>
                    <View style={{
                        width: "100%",

                        borderRadius: sizeHelper.calWp(20),
                        height: sizeHelper.calHp(900), marginTop: sizeHelper.calHp(30), backgroundColor: colors.box,
                    }}   >

                        <FlatList

contentContainerStyle={{gap:sizeHelper.calHp(20),
    paddingBottom:sizeHelper.calHp(100)}}
                            data={yesterdayalerts}
                            renderItem={({ item, index }) => {
                               


                                return (

                                    <TouchableOpacity style={{}}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: sizeHelper.calWp(30), top: sizeHelper.calHp(35), }}>
                                            <View style={{ alignItems: "center", gap: sizeHelper.calHp(45) }}>
                                                <View style={{ height: sizeHelper.calHp(15), width: sizeHelper.calWp(20), backgroundColor: colors.primary, borderRadius: sizeHelper.calWp(99),top:sizeHelper.calHp(12) }}>

                                                </View>
                                                {
                                                    yesterdayalerts.length - 1 !== index && (
                                                        <View style={{ height: sizeHelper.calHp(80), with: sizeHelper.calWp(20), width: 1, backgroundColor: colors.PearlGrey, bottom:sizeHelper.calHp(20)}} />
                                                    )
                                                }

                                            </View>
                                            <View style={{  }}>
                                                <CustomText text={item.title} fontSize={24} fontFamily={fonts.Roboto_Medium} />
                                                <CustomText text={item.camera} color={colors.olivegray} />

                                                <CustomText text={item.time}   color={colors.olivegray}/>
                                            </View>
                                            <Image source={item.image} style={{ height: sizeHelper.calHp(120), width: sizeHelper.calWp(230), borderRadius: sizeHelper.calWp(28), }} />

                                            <View style={styles.checkbox}>


</View>



                                        </View>
                                    </TouchableOpacity>
                                )
                            }}



                        />
                    </View>
                </View>
                </ScrollView>


</SafeAreaView>




)




}

const styles=StyleSheet.create({

    mainview:{

        flex:1,
        margin:sizeHelper.calWp(20),top:sizeHelper.calHp(20),
        backgroundColor:colors.background,marginTop:sizeHelper.calHp(40)
        },

        securitybox:{

            height:sizeHelper.calHp(90),
            width:'100%',
            borderRadius:sizeHelper.calWp(20),
            backgroundColor:colors.box,
            borderRadius:sizeHelper.calWp(20),
         
            marginTop:sizeHelper.calHp(25),
            

        },

        bottombox: {
            width: "100%",
    
            borderRadius: sizeHelper.calWp(20),
            height: sizeHelper.calHp(600),
            marginTop: sizeHelper.calHp(10),
    
        },

checkbox:{height:sizeHelper.calWp(40),
    width:sizeHelper.calWp(40),
    backgroundColor:colors.box,
    borderWidth:2,
    borderRadius:sizeHelper.calWp(12),
    alignItems:"center",
    justifyContent:"center",marginTop:sizeHelper.calHp(30)

},
bottombox2: {
    width: "100%",

    borderRadius: sizeHelper.calWp(20),
    height: sizeHelper.calHp(900),


},

})


export default HistoryScreen