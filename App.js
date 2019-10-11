import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Slideshow from 'react-native-image-slider-show';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import DetailEpisode from './src/screen/DetailEpisode';
import Creation from './src/screen/Creation';
import Create from './src/screen/Create';
import EditProfile from './src/screen/EditProfile';
import LoginScreen from './src/screen/LoginScreen';
import CreateImage from './src/screen/CreateImage';
import UpdateScreen from './src/screen/UpdateScreen';
import UpdateImgScreen from './src/screen/UpdateImgScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        //headerTitle: 'home'
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
	Detail: DetailScreen,
	Detail_Ep: DetailEpisode,
	{
		initialRouteName: 'Login',
		defaultNavigationOptions: {
		  headerTitleStyle: {
			fontWeight: 'bold',
		  }, 
		}
	}
  }	
); 

export default createAppContainer(AppNavigator); 