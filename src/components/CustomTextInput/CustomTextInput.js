import { StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import {colors} from "../../utils/Themes/Colors"
import sizeHelper from "../../utils/Helpers";

const CustomTextInput=({
    borderRadius,
    borderColor,placeholder,source
    ,rightSource,onRightSourcePress,
    secureTextEntry,
    paddingHorizontal,
    onChangeText,value,
    backgroundColor,
    borderWidth,marginTop,height,width,margin,placeholderTextColor,fontSize



})=>{

return(

<View style={{height:sizeHelper.calHp( height || 80),width:width  || "100%",
    borderRadius: sizeHelper.calWp(borderRadius  || 22),
    borderWidth:sizeHelper.calWp(borderWidth  || 0),
    backgroundColor:backgroundColor ||  colors.secondary,
    borderColor: borderColor  || colors.PureBlack ,
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:sizeHelper.calHp (paddingHorizontal  ||   14 ),
    }}>



<View style={{flexDirection:"row",alignItems:"center",gap:10}}>
    
    {
        source&&(
            <Image source={source}  style={{height:sizeHelper.calWp  (height ||   45),width:  sizeHelper.calWp (width || 45),resizeMode:"contain",margin:sizeHelper.calWp (margin  || 0)}}/>


        )
    }

    


<TextInput
secureTextEntry={secureTextEntry}
placeholder={placeholder}
value={value}
onChangeText={onChangeText}
placeholderTextColor={placeholderTextColor}
style={{width:"90%",fontSize:sizeHelper.calHp  ( fontSize  || 24 )     }}


/>

</View>

{

rightSource && (


<TouchableOpacity 

onPress={onRightSourcePress}

style={{alignItems:"center",width:sizeHelper.calWp(170),flexDirection:"row",justifyContent:"flex-end"}}

>
                        <Image
                         
                              source={rightSource}        
                            style={styles.icon}


                        />

                    </TouchableOpacity>




)




}





</View>


)


}


const styles=StyleSheet.create({


    icon: {
        width:sizeHelper.calWp(48),
        height:sizeHelper.calWp(48),
        tintColor: '#9F9B93',
        
    },




})


export default CustomTextInput;





