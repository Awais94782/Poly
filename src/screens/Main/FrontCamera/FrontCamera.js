import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList, Text } from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { fonts } from '../../../utils/Themes/Fonts';
import AppHeader from '../../../components/AppHeader/AppHeader';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import { Event, TodayAlerts } from "../../../utils/Data/index"
import { useState } from 'react';





const FrontCamera = () => {

    const [ setOpetion,setSelectOpetion  ]=useState(null);

    console.log("array  lenght ",
        TodayAlerts.length)




    return (
        <SafeAreaView style={styles.mainview}>
            <View style={{ margin: sizeHelper.calWp(20) }}>
                <AppHeader text={"Front Door Camera"} marginLeft={10} />
            </View>

            <View style={{ marginTop: sizeHelper.calHp(30) }}>
                <Image source={images.outside2} style={{ height: sizeHelper.calHp(360), width: "100%", }} />
                <View style={{ width: "100%", height: sizeHelper.calHp(80), backgroundColor: "rgba(0,0,0,0.7)", position: "absolute", top: sizeHelper.calHp(280) }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: sizeHelper.calHp(20) }}>
                        <Image source={images.hotspot} style={{ height: sizeHelper.calWp(50), width: sizeHelper.calWp(50) }} />
                        <Image source={images.videobox} style={{ height: sizeHelper.calWp(50), width: sizeHelper.calWp(50) }} />
                        <Image source={images.stopvideo} style={{ height: sizeHelper.calWp(50), width: sizeHelper.calWp(50) }} />
                        <Image source={images.valum} style={{ height: sizeHelper.calWp(50), width: sizeHelper.calWp(50), tintColor: colors.box }} />
                        <Image source={images.fullscreen} style={{ height: sizeHelper.calWp(50), width: sizeHelper.calWp(50) }} />


                    </View>





                </View>

            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: sizeHelper.calWp(25) }}>
                <CustomText text={"Last Event"} fontSize={27} marginTop={20} fontFamily={fonts.Roboto_Medium}/>

                <CustomText text={"Motion detected at 9:30 AM"} fontSize={27} marginTop={20} />


            </View>
            <ScrollView>
                <View style={styles.borderline}>
                </View>

                <View style={{ flexDirection: "row", gap: sizeHelper.calWp(8), flexWrap: "wrap", justifyContent: "space-between", marginHorizontal: sizeHelper.calWp(45), bottom: sizeHelper.calHp(30) }}>
                    {

                        Event.map((item) => <View style={{ alignItems: "center", marginTop: 60, gap: sizeHelper.calHp(25) }}> <TouchableOpacity 
                        
                        onPress={()=> setSelectOpetion(item.id)  }
                        
                        
                        style={{

                            height: sizeHelper.calHp(125),
                            width: sizeHelper.calWp(160),
                            backgroundColor: setOpetion ===item.id  ?  colors.LightKhaki : colors.box   ,
                            shadowColor:colors.PureBlack,
                            shadowOpacity: 3,
                            shadowRadius: 8,
                            borderRadius: sizeHelper.calWp(30), alignItems: "center", justifyContent: "center",
                    
                    
                        }}>
                            <Image source={item.image} style={{ height: sizeHelper.calWp(60), width: sizeHelper.calWp(60) }} />








                        </TouchableOpacity>
                            <CustomText text={item.name} fontSize={24} />

                        </View>


                        )




                    }




                </View>

                <View>



                </View>
                <View style={{}}>
                    <View style={styles.borderline}>


                    </View>



                </View>
                <CustomText text={"Today's Alerts"} fontSize={28} marginTop={30} fontFamily={fonts.Roboto_Medium} marginLeft={35} />
                <View style={styles.bottombox}>
                    <View style={{
                        width: "90%",

                        borderRadius: sizeHelper.calWp(20),
                        height: sizeHelper.calHp(500), marginTop: sizeHelper.calHp(30), backgroundColor: colors.box,
                    }}   >

                        <FlatList
                            data={TodayAlerts}
                            renderItem={({ item, index }) => {
                               


                                return (

                                    <View style={{}}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: sizeHelper.calWp(30), top: sizeHelper.calHp(35), }}>
                                            <View style={{ alignItems: "center", gap: sizeHelper.calHp(40) }}>
                                                <View style={{ height: sizeHelper.calHp(15), width: sizeHelper.calWp(20), backgroundColor: colors.primary, borderRadius: sizeHelper.calWp(99), }}>

                                                </View>
                                                {
                                                    TodayAlerts.length - 1 !== index && (
                                                        <View style={{ height: sizeHelper.calHp(80), with: sizeHelper.calWp(20), width: 1, backgroundColor: colors.PearlGrey, bottom:sizeHelper.calHp(20)}} />
                                                    )
                                                }

                                            </View>
                                            <View style={{ gap: sizeHelper.calHp(5) }}>
                                                <CustomText text={item.title} />
                                                <CustomText text={item.time} />
                                            </View>
                                            <Image source={images.outside} style={{ height: sizeHelper.calHp(120), width: sizeHelper.calWp(230), borderRadius: sizeHelper.calWp(28), }} />





                                        </View>
                                    </View>
                                )
                            }}



                        />
                    </View>
                </View>















            </ScrollView>




        </SafeAreaView>



    )



}
const styles = StyleSheet.create({

    mainview: {
        flex: 1,

        top: sizeHelper.calHp(10),
        backgroundColor: colors.background,
        marginTop: sizeHelper.calHp(40),


    },
    borderline: {

        width: "90%", alignSelf: "center",

        borderWidth: sizeHelper.calWp(1.6),
        borderColor: colors.PearlGrey,
        marginTop: sizeHelper.calHp(20),
    },

  
    bottombox: {
        width: "100%",

        borderRadius: sizeHelper.calWp(20),
        height: sizeHelper.calHp(600),
        marginTop: sizeHelper.calHp(30),
        margin: sizeHelper.calWp(35),





    },

})

export default FrontCamera;