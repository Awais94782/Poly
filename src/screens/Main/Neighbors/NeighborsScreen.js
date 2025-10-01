import { FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { images } from '../../../assets/images';
import AppHeader from '../../../components/AppHeader/AppHeader';
import CustomText from '../../../components/CustomText/CustomText';
import { NeighborFeeds } from "../../../utils/Data/index";
import sizeHelper from '../../../utils/Helpers';
import { colors } from '../../../utils/Themes/Colors';
import { fonts } from '../../../utils/Themes/Fonts';
import { Text } from 'react-native-gesture-handler';
import { useState } from 'react';


const NeighborsScreen=()=>{

    const [ selected,setSelected]=useState("Security")

return(

    <SafeAreaView style={styles.mainview}>
    <View style={{ margin: sizeHelper.calWp(20) }}>
        <AppHeader text={"Neighbors"} marginLeft={10} />
    </View>
<CustomText text={"Neighbors Maps"} fontSize={28} fontFamily={fonts.Roboto_Medium}/>
    <TouchableOpacity
                    
                    onPress={()=>{

navigation.navigate("NeighborsScreen")


                    }}
                    
                    style={styles.neighbormaps}  >
                       
                        <Image source={images.map} style={{ height: sizeHelper.calHp(250), width: sizeHelper.calWp(668), borderTopLeftRadius: sizeHelper.calWp(30), borderTopRightRadius: sizeHelper.calWp(30), }} />

                        <View style={styles.mapsbottom}>

                            <CustomText text={"42 Security Events in Your Area"} color={colors.PureBlack}/>

                        </View>

                    </TouchableOpacity>

<View style={styles.securitybox}>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:5}}> 
<TouchableOpacity

onPress={()=>  setSelected("Security")  }

style={{height:sizeHelper.calHp(75),width:"50%", backgroundColor: selected === 'Security' ? colors.primary : colors.box,borderRadius:sizeHelper.calWp(20),top:sizeHelper.calHp(8),alignItems:"center",justifyContent:"center"}}>
<CustomText  text={"Security Events"}  color={selected === 'Security' ? colors.box : colors.PureBlack} fontSize={25}  />



</TouchableOpacity>
<TouchableOpacity 
 onPress={() => setSelected('crimes')}

style={{height:sizeHelper.calHp(75),width:"50%",backgroundColor: selected === 'crimes' ? colors.primary : colors.box,borderRadius:sizeHelper.calWp(20),top:sizeHelper.calHp(8),alignItems:"center",justifyContent:"center"}}>

<CustomText  text={"General Crimes"}   fontSize={25}  color={selected === 'crimes' ? colors.box : colors.PureBlack} />



</TouchableOpacity>
</View>


</View>
<CustomText  text={"Neighbor Feeds"}  fontSize={27}  fontFamily={fonts.Roboto_Medium} marginTop={20} />
<View style={{marginTop:sizeHelper.calHp(20),flex:1}}>
<FlatList
contentContainerStyle={{gap:sizeHelper.calHp(20),paddingBottom:sizeHelper.calHp(100)}}
data={NeighborFeeds}
renderItem={  (  {  item})  =>  {
    console.log(NeighborFeeds);
return(

<View style={{width:"100%",backgroundColor:colors.box,borderRadius:sizeHelper.calWp(30),gap:sizeHelper.calHp(10),padding:10,}}>
<CustomText text={item.time} lineHeight={40} />
<CustomText text={item.description} fontSize={24} fontFamily={fonts.Roboto_Medium} lineHeight={40} />
<View style={{flexDirection:"row",justifyContent:"space-between",bottom:sizeHelper.calHp(15)}}>
<CustomText  text={item.date}/>
<CustomText  text={item.distance}/>


</View>
<View style={styles.borderline}>
</View>
<View style={{flexDirection:"row",bottom:sizeHelper.calHp(20),left:sizeHelper.calWp(15),gap:sizeHelper.calWp(15)}}>
<TouchableOpacity>
<Image source={item.like} style={{height:sizeHelper.calWp(45),width:sizeHelper.calWp(45)}} />
</TouchableOpacity>
<CustomText  text={"12"} fontSize={24}/>
<TouchableOpacity>
<Image source={item.comment} style={{height:sizeHelper.calWp(45),width:sizeHelper.calWp(45)}} />
</TouchableOpacity>

<CustomText  text={"3"} fontSize={24}/>
<TouchableOpacity>
<Image source={item.share} style={{height:sizeHelper.calWp(45),width:sizeHelper.calWp(45)}} />
</TouchableOpacity>



</View>


</View>




)




} }

/>



</View>



<View style={{left:sizeHelper.calWp(350),bottom:sizeHelper.calHp(80)}}>
<TouchableOpacity style={styles.bottomsetup}>
<Image source={images.add} style={{height:sizeHelper.calWp(35),width:sizeHelper.calWp(35)}}/>
<CustomText  text={"Add New Thread"}  color={colors.box}/>


</TouchableOpacity>

</View>



</SafeAreaView>




)



}

const styles=StyleSheet.create({

    mainview: {
        flex: 1,
        padding: sizeHelper.calWp(40),
        marginTop: sizeHelper.calHp(10),
        backgroundColor: colors.background,
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
            securitybox:{

                height:sizeHelper.calHp(90),
                width:'100%',
                borderRadius:sizeHelper.calWp(20),
                backgroundColor:colors.box,
                borderRadius:sizeHelper.calWp(20),
             
                marginTop:sizeHelper.calHp(25),
                

            },
            borderline: {

                height: sizeHelper.calHp(1.8),
                backgroundColor: colors.borderline,
                with: "100%", marginTop: sizeHelper.calHp(20),bottom:sizeHelper.calHp(25)
            },
            bottomsetup:{

                width:sizeHelper.calWp(300),
                height:sizeHelper.calHp(65),
                borderRadius:sizeHelper.calWp(40),
                backgroundColor:colors.primary,
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"row",gap:sizeHelper.calHp(10),
            
            }

})
export default NeighborsScreen;