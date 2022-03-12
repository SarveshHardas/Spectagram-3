import React, { Component } from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CreatePost from '../screens/createPost';
import Feed from '../screens/feed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from 'expo-status-bar';

const Tab=createMaterialBottomTabNavigator()
const BottomTabNavigator=()=>{
  return(
    <Tab.Navigator 
        labeled={false}
        barStyle={styles.bottomStyle}
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
            var iconName
            if (route.name==='Feed'){
            iconName=focused?'book':'book-outline'
            }
            else if (route.name==='CreateStory'){
            iconName=focused?'create':'create-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} style={styles.icons}/>
            }
            })

        }
        tabBarOptions={{
            activeTintColor:'red',
            inactiveTintColor:'orange'
            }}

        >
        <Tab.Screen name='Feed'component={Feed}/>
        <Tab.Screen name='CreatePost'component={CreatePost}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomStyle: {
    backgroundColor: '#2f345d',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});

export default BottomTabNavigator