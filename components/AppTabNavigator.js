import React,{Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../screens/LoginScreen';
import ReadStory from '../screens/readStory';

const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{screen: LoginScreen, navigationOptions:{
        /*  tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>, */
         tabBarLabel : "Login",}},
     RequestBooks:{screen: ReadStory, navigationOptions:{
         /* tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>, */
       tabBarLabel : "  Read Books",
     }}    
})