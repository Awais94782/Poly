
import React, { useState } from 'react';

import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import { images } from '../../../assets/images';
import CustomText from '../../../components/CustomText/CustomText';
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { fonts } from '../../../utils/Themes/Fonts';
import Swiper from 'react-native-swiper'; 

const HomeScreen = ({navigation}) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const data =[
{
id:1,
image:require("../../../../src/assets/images/outside.png"),
name:"Outside the Gate",


},
{
    id:2,
    image:require("../../../../src/assets/images/Maskgroup4.png"),
    name:"Outside the windo",
    
    
    },

    {
        id:3,
        image:require("../../../../src/assets/images/Maskgroup.png"),
        name:"Outside the road",
        
        
        },

    ]


    return (

        <SafeAreaView style={styles.mainview}>
           
            <View style={{ flexDirection: "row", alignItems: "center", gap: sizeHelper.calWp(30) }}>
                <Image source={images.homeimage}
                    style={{ height: sizeHelper.calWp(85), width: sizeHelper.calWp(85), resizeMode: "contain" }} />
                <CustomText text={"Welcome to POLY "} fontSize={sizeHelper.calHp(38)} fontFamily={fonts.Roboto_Medium} />

            </View>
            <View style={styles.borderline}>
            </View>
            <ScrollView>

            <Swiper
                dotColor='#DBD9D7'
                activeDotColor='#000000'
                
                loop={false} style={{ height: sizeHelper.calHp(550),}}  paginationStyle={{ position: 'absolute', bottom: sizeHelper.calHp(80) }} >





                <View style={{ gap: 10, }}>
                    <CustomText text={"Sensors"} fontWeight={"600"} fontSize={28} marginTop={15} fontFamily={fonts.Roboto_Medium} />

                    <View style={{ gap: sizeHelper.calWp(20), flexDirection: "row" }}>






                        <TouchableOpacity style={styles.device}
                        
                        onPress={()=>{

navigation.navigate("DevicesScreen")



                        }}
                        
                        >

                            <View style={{ margin: 15, flexDirection: "row" }}>

                                <CustomText text={5} fontSize={30} fontWeight={"600"} fontFamily={fonts.Roboto_SemiBold} />

                                <View style={styles.computerimage}>
                                    <Image source={images.computer} style={{ height: sizeHelper.calWp(35), width: sizeHelper.calWp(35), }} />

                                </View>

                            </View>
                            <View style={{ bottom: sizeHelper.calHp(55), margin: sizeHelper.calWp(25) }}>

                                <CustomText text={"Devices"} />

                            </View>


                        </TouchableOpacity>

                        <TouchableOpacity style={styles.device}>
                            <View style={{ margin: 15, flexDirection: "row" }}>

                                <CustomText text={3} fontSize={30} fontWeight={"600"} fontFamily={fonts.Roboto_SemiBold} />

                                <View style={styles.computerimage}>
                                    <Image source={images.camera} style={{ height: sizeHelper.calWp(35), width: sizeHelper.calWp(35), }} />

                                </View>

                            </View>
                            <View style={{ bottom: sizeHelper.calHp(55), margin: sizeHelper.calWp(25) }}>

                                <CustomText text={"Cameras"} />

                            </View>

                        </TouchableOpacity>



                    </View>
                    <View style={{ gap: sizeHelper.calWp(20), flexDirection: "row" }}>

                        <TouchableOpacity style={styles.device}>

                            <View style={{ margin: 15, flexDirection: "row" }}>

                                <CustomText text={4} fontSize={30} fontWeight={"600"} fontFamily={fonts.Roboto_SemiBold} />

                                <View style={styles.computerimage}>
                                    <Image source={images.link} style={{ height: sizeHelper.calWp(35), width: sizeHelper.calWp(35), }} />

                                </View>

                            </View>
                            <View style={{ bottom: sizeHelper.calHp(55), margin: sizeHelper.calWp(25) }}>

                                <CustomText text={"Linked"} />
                                <CustomText text={"Connections"} />

                            </View>


                        </TouchableOpacity>

                        <TouchableOpacity style={styles.device}>
                            <View style={{ margin: 15, flexDirection: "row" }}>

                                <CustomText text={16} fontSize={30} fontWeight={"600"} fontFamily={fonts.Roboto_SemiBold} />

                                <View style={styles.computerimage}>
                                    <Image source={images.complain} style={{ height: sizeHelper.calWp(35), width: sizeHelper.calWp(35), }} />

                                </View>

                            </View>
                            <View style={{ bottom: sizeHelper.calHp(55), margin: sizeHelper.calWp(25) }}>

                                <CustomText text={"Security"} />
                                <CustomText text={"Reports"} />

                            </View>

                        </TouchableOpacity>



                    </View>
                </View>



                <View style={{
                    marginTop: sizeHelper.calHp(20)
                }}>


                    <CustomText text={"Current System"} fontSize={28} fontFamily={fonts.Roboto_SemiBold} marginTop={10}/>
                    <View style={styles.currentbox}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", margin: 10 }}>
                            <View style={{ }}>
                                <TouchableOpacity
                                    onPress={() => setSelectedOption("disarmed")}
                                    style={{
                                        height: sizeHelper.calHp(80),
                                        width: sizeHelper.calWp(100),
                                        backgroundColor: selectedOption === "disarmed" ? colors.PureBlack : colors.offwhite,
                                        borderRadius: sizeHelper.calWp(99),
                                        alignItems: "center",
                                        justifyContent: "center", marginTop: sizeHelper.calHp(30)
                                    }}>
                                    <Image
                                        source={images.group}
                                        style={{
                                            height: sizeHelper.calWp(40),
                                            width: sizeHelper.calWp(40),
                                            tintColor: selectedOption === "disarmed" ? colors.box : colors.olivegray,
                                        }}
                                    />
                                </TouchableOpacity>
                                <CustomText
                                    text={"Disarmed"}
                                    color={selectedOption === "disarmed" ? colors.PureBlack : colors.olivegray} marginTop={25}
                                />
                            </View>

                            <View style={{ borderWidth: sizeHelper.calHp(0.3), width: sizeHelper.calWp(100), borderColor: colors.olivegray, borderStyle: "dashed" }}>

                            </View>

                            <View style={{ alignItems: "center" }}>
                                <TouchableOpacity
                                    onPress={() => setSelectedOption("home")}
                                    style={{
                                        height: sizeHelper.calHp(80),
                                        width: sizeHelper.calWp(100),
                                        backgroundColor: selectedOption === "home" ? colors.PureBlack : colors.offwhite,
                                        borderRadius: sizeHelper.calWp(99),
                                        alignItems: "center",
                                        justifyContent: "center", marginTop: sizeHelper.calHp(30)
                                    }}>
                                    <Image
                                        source={images.shield}
                                        style={{
                                            height: sizeHelper.calWp(40),
                                            width: sizeHelper.calWp(40),
                                            tintColor: selectedOption === "home" ? colors.box : colors.olivegray,
                                        }}
                                    />
                                </TouchableOpacity>
                                <CustomText
                                    text={"Home"}
                                    color={selectedOption === "home" ? colors.PureBlack : colors.olivegray} marginTop={25}
                                />
                            </View>
                            <View style={{ borderWidth: sizeHelper.calHp(0.3), width: sizeHelper.calWp(100), borderColor: colors.olivegray, borderStyle: "dashed" }}>
                            </View>

                            <View style={{ alignItems: "center", marginTop: sizeHelper.calHp(40) }}>
                                <TouchableOpacity
                                    onPress={() => setSelectedOption("away")}
                                    style={{
                                        height: sizeHelper.calHp(80),
                                        width: sizeHelper.calWp(100),
                                        backgroundColor: selectedOption === "away" ? colors.PureBlack : colors.offwhite,
                                        borderRadius: sizeHelper.calWp(99),
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Image
                                        source={images.running}
                                        style={{
                                            height: sizeHelper.calWp(40),
                                            width: sizeHelper.calWp(40),
                                            tintColor: selectedOption === "away" ? colors.box : colors.olivegray,
                                        }}
                                    />
                                </TouchableOpacity>
                                <CustomText
                                    text={"Away"}
                                    color={selectedOption === "away" ? colors.PureBlack : colors.olivegray} marginTop={25}
                                />
                            </View>
                        </View>
                        <View style={{ width: "100%", height: sizeHelper.calHp(1), backgroundColor: colors.PearlGrey, marginTop: sizeHelper.calHp(20) }}>
                        </View>
                        <View style={{ marginTop: sizeHelper.calHp(20), margin: sizeHelper.calWp(30), flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ height: sizeHelper.calHp(45), width: sizeHelper.calWp(200), borderRadius: sizeHelper.calWp(30), backgroundColor: colors.offwhite, alignItems: "center", justifyContent: "center" }} >
                                <CustomText text={"4 New Events"} color={colors.red} fontSize={17} />

                            </View>
                            

                                <TouchableOpacity
                                onPress={()=> {

navigation.navigate("HistoryScreen")


                                }  }
                                
                                style={{flexDirection: "row",gap: sizeHelper.calHp(15)}}>
                                
                                <Image source={images.watch} style={{ height: sizeHelper.calWp(40), width: sizeHelper.calWp(40),top:sizeHelper.calHp(3) }} />
                               
                                <CustomText text={"History"} />
                                </TouchableOpacity>

                        </View> 
                    </View>


                </View>


                <View StyleSheet={{}}>
                    <CustomText text={"saved Feed"} fontFamily={fonts.Roboto_Medium} fontSize={30} marginTop={20} />
                    <View style={styles.savedfeed}>
                        <View style={{ margin: sizeHelper.calWp(20), flexDirection: "row", gap: sizeHelper.calHp(20),}}>
                            <TouchableOpacity>
                                <Image source={images.Maskgroup1} style={{ height: sizeHelper.calHp(140), width: sizeHelper.calWp(400), borderRadius: sizeHelper.calWp(20) }} />
                                <CustomText text={"Outside the Door"} position={"absolute"} color={colors.box} marginTop={100} marginLeft={15} fontSize={19} />


                                <Image source={images.play} style={{
                                    position: "absolute",
                                    top: "30%",
                                    left: "45%",

                                    height: sizeHelper.calWp(40),
                                    width: sizeHelper.calWp(40),
                                }} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={images.Maskgroup4} style={{ height: sizeHelper.calHp(140), width: sizeHelper.calWp(210), borderRadius: sizeHelper.calWp(20) }} />
                                <CustomText text={"TV Lougne"} position={"absolute"} marginTop={100} color={colors.box} marginLeft={10} fontSize={19}/>
                                <Image source={images.play} style={{
                                    position: "absolute",
                                    top: "35%",
                                    left: "35%",

                                    height: sizeHelper.calWp(40),
                                    width: sizeHelper.calWp(40),
                                }} />

                            </TouchableOpacity>
                        </View>


                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: sizeHelper.calWp(20), bottom: sizeHelper.calHp(40) }}>
                            <TouchableOpacity>
                                <Image source={images.Maskgroup2} style={{ height: sizeHelper.calWp(180), width: sizeHelper.calWp(200), borderRadius: sizeHelper.calWp(15) }} />
                                <CustomText text={"At Doorbell"} position={"absolute"} color={colors.box} marginTop={110} marginLeft={15} fontSize={19}/>
                                <Image source={images.play} style={{
                                    position: "absolute",
                                    top: "35%",
                                    left: "35%",

                                    height: sizeHelper.calWp(40),
                                    width: sizeHelper.calWp(40),
                                }} />

                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Image source={images.Maskgroup} style={{ height: sizeHelper.calWp(180), width: sizeHelper.calWp(200), borderRadius: sizeHelper.calWp(15) }} />
                                <CustomText text={"In Street"} position={"absolute"} color={colors.box} marginTop={110} marginLeft={15} fontSize={19}/>
                                <Image source={images.play} style={{
                                    position: "absolute",
                                    top: "35%",
                                    left: "35%",

                                    height: sizeHelper.calWp(40),
                                    width: sizeHelper.calWp(40),
                                }} />

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={images.Maskgroup4} style={{ height: sizeHelper.calWp(180), width: sizeHelper.calWp(200), borderRadius: sizeHelper.calWp(15) }} />
                                <CustomText text={"Save Feeds"} position={"absolute"} color={colors.box} marginTop={115} marginLeft={15} fontSize={19}/>
                                <Image source={images.save} style={{
                                    position: "absolute",
                                    top: "35%",
                                    left: "35%",


                                    height: sizeHelper.calWp(40),
                                    width: sizeHelper.calWp(40),
                                }} />

                            </TouchableOpacity>


                        </View>
                    </View>



                </View>
                <View style={{}}>
                    <CustomText text={"Neighbor Maps"} fontFamily={fonts.Roboto_Medium} fontSize={28} marginTop={20} />

                    <TouchableOpacity
                    
                    onPress={()=>{

navigation.navigate("NeighborsScreen")


                    }}
                    
                    style={styles.neighbormaps}  >
                       
                        <Image source={images.map} style={{ height: sizeHelper.calHp(250), width: sizeHelper.calWp(668), borderTopLeftRadius: sizeHelper.calWp(30), borderTopRightRadius: sizeHelper.calWp(30), }} />
                        <View style={{height:sizeHelper.calHp(65),
                            width:sizeHelper.calWp(220),
                            borderWidth:sizeHelper.calWp(1),
                            position:"absolute",
                            borderRadius:sizeHelper.calWp(40),
                            backgroundColor:colors.PureBlack,
                            justifyContent:"center",
                            flexDirection:"row",
                            justifyContent:"space-evenly",
                            alignItems:"center",
                            top:sizeHelper.calHp(120)
                            }}
>
   

<Image source={images.mapicon} style={{ height:sizeHelper.calWp(35),width:sizeHelper.calWp(35)}}/>
<CustomText text={"View Map"}color={colors.box}fontSize={21}/>
</View>
                        <View style={styles.mapsbottom}>

                            <CustomText text={"42 Security Events in Your Area"} color={colors.PureBlack}/>

                        </View>

                    </TouchableOpacity>




                </View>

            </Swiper>
<View style={{bottom:40,gap:10}}>
            <CustomText text={"Live Feeds"} fontFamily={fonts.Roboto_Medium} fontSize={27} />

<View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10,}}>
<TouchableOpacity style={styles.irfence} >
<View style={{gap:sizeHelper.calHp(5)}}>
<CustomText text={"IR Fence"} fontFamily={fonts.Roboto_Medium} />
<View style={{flexDirection:"row",alignItems:"center",gap:sizeHelper.calWp(10)}}>
<View style={{height:sizeHelper.calHp(15),width:sizeHelper.calWp(15),borderRadius:sizeHelper.calWp(99),backgroundColor:colors.parrot  }}>
</View>
<CustomText text={"Online"}/>

</View>
</View>
<View style={{height:sizeHelper.calHp(70),width:sizeHelper.calWp(70),borderRadius:sizeHelper.calWp(99),alignItems:"center",justifyContent:"center",backgroundColor:colors.offwhite }}>
<Image source={images.gps} style={{height:sizeHelper.calWp(40),width:sizeHelper.calWp(40)}} />
</View>


</TouchableOpacity>

<TouchableOpacity style={{alignItems:"center",justifyContent:"center"}}>
<Image source={images.map} style={{height:sizeHelper.calHp(130),width:sizeHelper.calWp(300),borderRadius:sizeHelper.calWp(30)}}/>
<View style={{height:sizeHelper.calHp(55),width:sizeHelper.calWp(170),borderWidth:sizeHelper.calWp(1),position:"absolute",borderRadius:sizeHelper.calWp(30),backgroundColor:colors.PureBlack,justifyContent:"center",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}
>
   

<Image source={images.mapicon} style={{ height:sizeHelper.calWp(25),width:sizeHelper.calWp(25)}}/>
<CustomText text={"View Map"}color={colors.box}fontSize={18}/>
</View>

</TouchableOpacity>

</View>
<View>



  <FlatList
    data={data}
    horizontal



    renderItem={({ item }) =>( <TouchableOpacity  style={styles.bottomview}   >
<Image   source={item.image} style={{ height:sizeHelper.calHp(260),width:sizeHelper.calWp(600),borderTopLeftRadius:sizeHelper.calWp(30),borderTopRightRadius:sizeHelper.calWp(30)}}/>
<Image source={images.play} style={{ height:sizeHelper.calWp(50),width:sizeHelper.calWp(50),position:'absolute',left:"48%",top:"35%"}}/>
<View style={{position:"absolute",height:sizeHelper.calHp(40),width:sizeHelper.calWp(110),backgroundColor:colors.box,left:"7%",top:"8%",borderRadius:sizeHelper.calWp(30),justifyContent:"center",alignItems:"center"}}>
    <CustomText text={"Now"} color={colors.primary}/>
</View>

<View style={{flexDirection:"row",justifyContent:"space-around",gap:sizeHelper.calWp(70),top:sizeHelper.calHp(10)}}>
<CustomText text={item.name} fontFamily={fonts.Roboto_Medium} />
<View style={{flexDirection:"row",gap:sizeHelper.calWp(20)}}>
<Image source={images.wifi} style={{height:sizeHelper.calWp(40),width:sizeHelper.calWp(40) }}/>
<Image source={images.battery} style={{height:sizeHelper.calWp(40),width:sizeHelper.calWp(40) }}/>
<Image source={images.valum} style={{height:sizeHelper.calWp(40),width:sizeHelper.calWp(40) }}/>
</View>

</View>

    </TouchableOpacity >)}
  />
</View>







{/* <View style={{gap:10}}>
<TouchableOpacity  style={styles.bottomview}>

<Image source={images.outside}style={{height:sizeHelper.calHp(260),width:sizeHelper.calWp(670),borderTopLeftRadius:sizeHelper.calWp(30),borderTopRightRadius:sizeHelper.calWp(30)}}/>
<View style={{height:sizeHelper.calHp(60),width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
<CustomText text={"Outside the Gate"} color={colors.PureBlack} fontSize={28} marginLeft={20} fontFamily={fonts.Roboto_Medium}/>

<View style={{flexDirection:"row",gap:sizeHelper.calWp(25),right:sizeHelper.calWp(35),alignItems:"center"}}>
<Image source={images.wifi} style={{height:sizeHelper.calWp(40),width:sizeHelper.calWp(40) }}/>
<Image source={images.battery} style={{height:sizeHelper.calWp(40),width:sizeHelper.calWp(40) }}/>
<Image source={images.valum} style={{height:sizeHelper.calWp(40),width:sizeHelper.calWp(40) }}/>

</View>
</View>
</TouchableOpacity>


</View> */}
            </View>


            </ScrollView>
        </SafeAreaView>




    )
}
const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        padding: sizeHelper.calWp(40),
        marginTop: sizeHelper.calHp(10),
        backgroundColor: colors.background,
    },

    borderline: {

        height: sizeHelper.calHp(1.8),
        backgroundColor: colors.borderline,
        with: "100%", marginTop: sizeHelper.calHp(20)
    },
    device: {
        height: sizeHelper.calHp(165),
        width: sizeHelper.calWp(320),
        backgroundColor: colors.box,
        borderRadius: sizeHelper.calWp(25), 

    },

    computerimage: {
        height: sizeHelper.calHp(60),
        width: sizeHelper.calWp(80),
        backgroundColor: colors.offwhite,
        borderRadius: sizeHelper.calWp(99),
        alignItems: "center",
        justifyContent: "center",
        marginLeft: sizeHelper.calWp(150),
    },
    currentbox: {
        height: sizeHelper.calHp(320),
        width: "100%",
        backgroundColor:colors.offwhite,
        borderRadius: sizeHelper.calWp(25), marginTop: sizeHelper.calHp(15),
    },



    awaybox: {
        height: sizeHelper.calHp(75),
        width: sizeHelper.calWp(100),
        backgroundColor: colors.offwhite,
        borderRadius: sizeHelper.calWp(99),
        alignItems: "center",
        justifyContent: "center",
    },
    savedfeed: {

        height: sizeHelper.calHp(330),
        width: "100%",
        borderRadius: sizeHelper.calWp(20),
        backgroundColor: colors.box,
        gap: sizeHelper.calHp(20), marginTop: sizeHelper.calHp(15)
    },
    neighbormaps: {

        height: sizeHelper.calHp(330),
        width: "100%",
        borderRadius: sizeHelper.calWp(40),
        backgroundColor: colors.box,
        alignItems: "center", marginTop: sizeHelper.calHp(20),


    },
    mapsbottom: {

height:sizeHelper.calHp(55),
width:sizeHelper.calWp(450),
borderRadius:sizeHelper.calWp(20),
backgroundColor:colors.offwhite,
borderRadius:sizeHelper.calWp(30),
alignItems:"center",
justifyContent:"center",marginRight:sizeHelper.calWp(150),
marginTop:sizeHelper.calHp(12)


    },


    irfence:{
        height:sizeHelper.calHp(125),
        width:sizeHelper.calWp(340),
     backgroundColor:colors.box,borderRadius:sizeHelper.calWp(20),
    flexDirection:"row",justifyContent:"space-around",alignItems:"center",
    },
    bottomview:{
        height:sizeHelper.calHp(320),
        width:sizeHelper.calWp("100%"),
    borderRadius:sizeHelper.calWp(30),
    backgroundColor:colors.box,margin:10
    
    }

    

})


export default HomeScreen;
