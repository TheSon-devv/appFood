import React, { Component } from 'react';
import {StyleSheet, View,Image,Dimensions,Text,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import swiper1 from "../../screens/assets/image/swiper1.jpg";
import swiper2 from "../../screens/assets/image/swiper2.jpg";
import swiper3 from "../../screens/assets/image/swiper3.jpg";
import swiper4 from "../../screens/assets/image/swiper4.jpg";
import swiper5 from "../../screens/assets/image/swiper5.jpg";
import swiper6 from "../../screens/assets/image/swiper6.jpg";
import swiper7 from "../../screens/assets/image/swiper7.jpg";

const{ width } = Dimensions.get('window');
const{ height } = Dimensions.get('window');

export default class SwiperHome extends Component{

    render(){
        return(
        <ScrollView>
            <View style = {styles.wrapper}>
                <View style = {{flex : 4}}>
                    <Swiper autoplay activeDotColor="#ff563f">
                        <Image source={swiper1} style={styles.banner}/>
                        <Image source={swiper2} style={styles.banner}/>
                        <Image source={swiper3} style={styles.banner}/>
                        <Image source={swiper4} style={styles.banner}/>
                        <Image source={swiper5} style={styles.banner}/>
                        <Image source={swiper6} style={styles.banner}/>
                    </Swiper>
                </View>
            </View>
        
        </ScrollView>
        )
    }
}
const imgWidth = width - 20 ;
const imgHeight = imgWidth / 2;

const styles = StyleSheet.create({
    wrapper : {
        height : height * 0.28,
        padding:10
    },
    banner : {
        width : imgWidth ,
        height : imgHeight,
        borderRadius:10
    },
})