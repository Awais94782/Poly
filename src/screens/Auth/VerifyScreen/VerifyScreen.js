import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

import CustomText from "../../../components/CustomText/CustomText"
import CustomTextInput from "../../../components/CustomTextInput/CustomTextInput"
import { colors } from "../../../utils/Themes/Colors";
import TopHeader from "../../../components/TopHeader/TopHeader"
import { images } from "../../../assets/images";
import { fonts } from "../../../utils/Themes/Fonts";
import CustomButton from "../../../components/CustomButton/CustomButton"
import { TextInput } from "react-native-gesture-handler";
import sizeHelper from "../../../utils/Helpers";


const VerifyScreen = ({ navigation }) => {

  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });



  return (
    <SafeAreaView style={styles.mainview}>
      <TopHeader />
      <View style={{ gap: 10 }}>
        <CustomText text={"Verify Your Email and Phone Number"} fontSize={29} fontFamily={fonts.Roboto_Medium} />
        <CustomText text={"Enter 6 digit code sent to your email and phone number."} />
      </View>

      <View style={styles.root}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

      </View>

<View>
      <CustomButton text={"Verify"} marginTop={180} onPress={()=>{

navigation.navigate("joinScreen")

      }}/>
      <View style={{alignItems:"center",marginTop:sizeHelper.calHp(30)}}>
<CustomText   text={"Resend Code in 00.26"}  color={colors.olivegray} />

</View>
<View style={{  marginTop:sizeHelper.calHp(290),alignItems:"center"}}>
                <CustomText color={colors.olivegray} text={"By continuing,you accept our"} marginLeft={15} />
                </View>
                <View style={{ flexDirection: "row", gap: 3,justifyContent:"center"}}>
                    <CustomText textDecorationLine={"underline"} text={"Term of Use"} color={colors.royalblue}  />
                    <CustomText text={"and"} color={colors.olivegray}  />
                    <CustomText textDecorationLine={"underline"} text={"privacy Policy"} color={colors.royalblue}/>
                </View>
            
                </View>
    </SafeAreaView>





  )



}

const styles = StyleSheet.create({

  mainview: {
    padding: sizeHelper.calWp(35),
    backgroundColor: colors.background,
    flex: 1,
  },
  root: { padding: sizeHelper.calWp(35), },
  codeFieldRoot: { marginTop: sizeHelper.calHp(80), justifyContent: 'center' },
  cell: {
    width: sizeHelper.calWp(100),
    height: sizeHelper.calHp(120),
    borderColor: 'red',
    textAlign: 'center',
    marginHorizontal: sizeHelper.calWp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizeHelper.calWp(20),
    backgroundColor: colors.secondary
  },
  focusCell: {
    borderColor: '#007AFF',
  },
  cellText: {
    fontSize: sizeHelper.calHp(40),
  },



})

export default VerifyScreen