import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, Image, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screens/Main/HomeScreen/HomeScreen";
import NotificationScreen from "../../screens/Auth/Notification/NotificationScreen";
import SettingScreen from "../../screens/Auth/SettingScreen/SettingScreen";
import { images } from "../../../src/assets/images/index";



import LoginScreen from "../../screens/Auth/LoginScreen/LoginScreen";
import EnterEmail from "../../screens/Auth/EnterEmail/EnterEmail";
import ForgotPassword from "../../screens/Auth/ForgotPassword/ForgotPassword";
import PersonalInformation from "../../screens/Auth/PersonalInformation/PersonalInformation";
import VerifyScreen from "../../screens/Auth/VerifyScreen/VerifyScreen";

import JoinScreen from "../../screens/Auth/JoinScreen/JoinScreen";
import DevicesScreen from "../../screens/Main/DeviceScreen/DevicesScreen";
import CamreasScreen from "../../screens/Main/CamerasScreen/CamreasScreen";
import SensorScreen from "../../screens/Main/SensorScreen/SensorScreen";
import FrontCamera from "../../screens/Main/FrontCamera/FrontCamera";
import NeighborsScreen from "../../screens/Main/Neighbors/NeighborsScreen";
import HistoryScreen from "../../screens/Main/HistoryScreen/HistoryScreen";
import SetupNewDevice from "../../screens/Main/SetupNewDevice/SetupNewDevice";
import ConnectDevice from "../../screens/Main/ConnectDevice/ConnectDevice";
import DeviceConfiguration from "../../screens/Main/DeviceConfiguration/DeviceConfiguration";
import AccountSettings from "../../screens/Main/AccountSettings/AccountSettings";


import sizeHelper from "../../utils/Helpers";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const AppStack = () => {
    return (
        <GestureHandlerRootView

            style={{ flex: 1 }}


        >
            <NavigationContainer>
                <Stack.Navigator>

                <Stack.Screen name="Screen" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="AccountSettings" component={AccountSettings} options={{ headerShown: false }} />

                <Stack.Screen name="ConnectDevice" component={ConnectDevice} options={{ headerShown: false }} />
                <Stack.Screen name="DeviceConfiguration" component={DeviceConfiguration} options={{ headerShown: false }} />

                    <Stack.Screen name="DevicesScreen" component={DevicesScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SetupNewDevice" component={SetupNewDevice} options={{ headerShown: false }} />

                    <Stack.Screen name="CamreasScreen" component={CamreasScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SensorScreen" component={SensorScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="FrontCamera" component={FrontCamera} options={{ headerShown: false }} />
                    <Stack.Screen name="NeighborsScreen" component={NeighborsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false }} />


                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />

                    <Stack.Screen name="EnterEmail" component={EnterEmail} options={{ headerShown: false }} />

                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />

                    <Stack.Screen name="PersonalInformation" component={PersonalInformation} options={{ headerShown: false }} />
                    <Stack.Screen name="VerifyScreen" component={VerifyScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="joinScreen" component={JoinScreen} options={{ headerShown: false }} />












                </Stack.Navigator>

            </NavigationContainer>

        </GestureHandlerRootView>

    )
}
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height:sizeHelper.calHp(140),
                   
                   
                    borderRadius:sizeHelper.calWp(35), 
                  
bottom:sizeHelper.calHp(30),marginHorizontal:sizeHelper.calWp(35),
                    
                    
                },
                tabBarIconStyle: {
                    marginTop:sizeHelper.calHp(35),
                    paddingBottom:sizeHelper.calHp(15) ,
                   
                },



            }}
            initialRouteName="Home Screen" >
            <Tab.Screen name="Home Screen"
                component={HomeScreen}
                options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (

                        <Image source={images.home} style={{ height:sizeHelper.calWp(45), width:sizeHelper.calWp(45),tintColor: focused ? '#AD9D6A' : "#85837A"}} />

                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#AD9D6A' : "#85837A"}}>Home</Text>
                      ),

                }}

            />
            <Tab.Screen name="Notification"
                component={NotificationScreen}
                options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (

                        <Image source={images.notification} style={{  height:sizeHelper.calWp(45), width:sizeHelper.calWp(45), tintColor: focused ? '#AD9D6A' : "#85837A"}} />






                    ),

                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#AD9D6A' : "#85837A"}}>Notification</Text>
                      ),
                }}



            />

            <Tab.Screen name="Setting"
                component={SettingScreen}
                options={{
                    headerShown: false, tabBarIcon: ({ focused }) => (


                        <Image source={images.setting} style={{ height:sizeHelper.calWp(45), width:sizeHelper.calWp(45),tintColor:focused ? '#AD9D6A' : "#85837A"}} />

                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#AD9D6A' : "#85837A"}}>Setting</Text>
                      ),

                }}

            />






        </Tab.Navigator>



    )

}
export default AppStack;