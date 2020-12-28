import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import{createBottomTabNavigator} from "react-navigation-tabs"
import { AppTabNavigator } from './components/AppTabNavigator'
import Loginscreen from "./screens/LoginScreen";
import ReadStory from "./screens/readStory"

export default class App extends React.Component {
  render(){
    return(
  <AppContainer/>
    )
}
}
 const TabNavigator = createBottomTabNavigator({
    login:{ screen :Loginscreen },
  Read:{ screen :ReadStory}
})

const AppContainer = createAppContainer(TabNavigator)
