import React,{useState,useEffect} from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import HeaderHomeDetail from "../../components/Home/HeaderHomeDetail";


const HomeDetailMenu = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'#fff'}}>
            <HeaderHomeDetail navigation={navigation}/>
            
        </SafeAreaView>
    )
}
export default HomeDetailMenu;