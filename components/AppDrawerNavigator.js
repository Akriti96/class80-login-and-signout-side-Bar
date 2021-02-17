import React from 'react';
import { Image,View,Text,StyleSheet } from 'react-native';
import {createDrawerNavigator} from "react-navigation-drawer"
import {AppTabNavigator} from "./AppTabNavigator"
import CustomSideBarMenu from "./CustomSideBar"

export const AppDrawerNavigator =createDrawerNavigator({
   Home:{
       screen :AppTabNavigator
   },
},

{
    contentComponent:CustomSideBarMenu
},

{
    initialRouteName:"Home"
})