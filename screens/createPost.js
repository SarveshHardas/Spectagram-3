import React, { Component } from 'react';
import {Text, View, StyleSheet,SafeAreaView, Platform, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

let customFonts = {
    'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
  };

export default class CreatePost extends Component{
    constructor(){
        super()
        this.state={
            fontLoaded:false,
            previewImage:'image_1',
            dropDownPickerHeight:40
        }
    }

    _loadFontsAsync = async ()=>{
        await Font.loadAsync(customFonts);
        this.setState({
            fontLoaded:true
        })
    }
    componentDidMount(){
        this._loadFontsAsync();
    }

    render(){
        if(!this.state.fontLoaded){
            <AppLoading />
        }else{
            let preview_images = {
                image_1: require("../assets/image_1.png"),
                image_2: require("../assets/image_2.png"),
                image_3: require("../assets/image_3.png"),
                image_4: require("../assets/image_4.png"),
                image_5: require("../assets/image_5.png")
              };
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.androidSafeArea}/>
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image source={require("../assets/logo.png")} 
                             style={styles.iconImage}
                            ></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>New Post</Text>
                        </View>
                    </View>
                    <View style={styles.fieldsContainer}>
                        <ScrollView>
                            <Image source={preview_images[this.state.previewImage]}
                                style={styles.previewImage}>
                            </Image>
                            <View style={{height:RFValue(this.state.dropDownPickerHeight)}}>
                                <DropDownPicker 
                                items={[
                                    {label:"image 1", value:image_1},
                                    {label:"image 2", value:image_2},
                                    {label:"image 3", value:image_3},
                                    {label:"image 4", value:image_4},
                                    {label:"image 5", value:image_5},
                                    {label:"image 1", value:image_6},
                                    {label:"image 1", value:image_7}
                                ]}
                                defaultValue = {this.state.previewImage}
                                containerStyle={{
                                    height:40,
                                    borderRadius:20,
                                    marginBottom:10
                                }}

                                onopen={()=>{
                                    this.setState({dropDownPickerHeight:170})
                                }}

                                onClose={()=>{
                                    this.setState({dropDownPickerHeight:40})
                                }}

                                style={{backgroundColor:"transparent"}}
                                itemStyle={{justifyContent:"flex-start"}}
                                dropDownStyle={{backgroundColor:"#2a2a2a"}}
                                labelStyle={{color:'white'}}
                                arrowStyle={{color:"white"}}
                                onChange={item=>
                                    this.setState({
                                        previewImage:item.value
                                    })
                                }
                                />
                            </View>
                            <View>
                                <TextInput 
                                    style={styles.inputForm}
                                    onChangeText={caption=> this.setState({caption})}
                                    placeholder={'Caption'}
                                    placeholderTextColor={'white'} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{flex:0.08}} />
                </View>
            )
        }
    }
}
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#15193c"
        },
        droidSafeArea: {
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
        },
        appTitle: {
          flex: 0.07,
          flexDirection: "row"
        },
        appIcon: {
          flex: 0.3,
          justifyContent: "center",
          alignItems: "center"
        },
        iconImage: {
          width: "100%",
          height: "100%",
          resizeMode: "contain"
        },
        appTitleTextContainer: {
          flex: 0.7,
          justifyContent: "center"
        },
        appTitleText: {
          color: "white",
          fontSize: RFValue(28),
          fontFamily: "Bubblegum-Sans"
        },
        fieldsContainer: {
          flex: 0.85
        },
        previewImage: {
          width: "93%",
          height: RFValue(250),
          alignSelf: "center",
          borderRadius: RFValue(10),
          marginVertical: RFValue(10),
          resizeMode: "contain"
        },
        inputFont: {
          height: RFValue(40),
          borderColor: "white",
          borderWidth: RFValue(1),
          borderRadius: RFValue(10),
          paddingLeft: RFValue(10),
          color: "white",
          fontFamily: "Bubblegum-Sans"
        },
        inputFontExtra: {
          marginTop: RFValue(15)
        },
        inputTextBig: {
          textAlignVertical: "top",
          padding: RFValue(5)
        }
      });
