import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Dimensions, Image, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import firebase from '@react-native-firebase/app';
import auth from "@react-native-firebase/auth";

const SplashScreen = (props) => {

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            props.navigation.navigate(user ? 'DrawerNavigator' : 'SplashScreen')
        })
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
                    <Animatable.Image animation="bounceInDown" source={require('../assets/image/foodStore1.png')} style={styles.image} />
                </Animatable.View>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <View style={{ marginVertical: 10, marginTop: 40, alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: "#494949" }}>Chào mừng đến với nhà hàng !</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 12, color: "#494949" }}>Dịch vụ tốt nhất, trải nghiệm tuyệt vời</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <Animatable.View animation="jello" iterationCount="infinite" direction="alternate">
                        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                                <Text style={{ color: '#fff' }}>Đăng nhập </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
                {/* <View>
                    <ActivityIndicator size="large" color="black"/>
                </View> */}
            </Animatable.View>
        </View>
    )
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    image: {
        width: height_logo,
        height: height_logo
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    signIn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#009387',
        borderRadius: 100,
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center'
    }
})

export default SplashScreen;