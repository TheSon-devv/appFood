import React, { Component } from 'react';
import { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, Image, View, StyleSheet, Button, Alert } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { useEffect } from 'react';
import firebase from '@react-native-firebase/app';
import auth from "@react-native-firebase/auth";

const CustomDrawerContent = (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const { currentUser } = firebase.auth();
        setCurrentUser(currentUser)
    }, [])

    const onToggle = () => {
        setIsDarkTheme(true)
    }

    const handleSignOut = () => {

        // if(window.confirm("Bạn có chắc chắn muốn đăng xuất ?")){
        //     firebase
        //     .auth()
        //     .signOut()
        // }
        Alert.alert(
            'Bạn có chắc chắn muốn thoát ?',
            '',
            [
                {
                    text: 'OK',
                    onPress: () => {firebase.auth().signOut(),props.navigation.navigate('SplashScreen')}
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                }

            ],
            { cancelable: false });
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>


            <View style={styles.login}>
                <View style={styles.avatar}>

                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{currentUser && currentUser.email}</Text>
                </View>
            </View>
            <View style={styles.menuItem}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
                    <View style={{ marginVertical: 10 }}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.icon}>
                                <Ionicons name="home-outline" size={25} />
                            </View>
                            <View style={styles.nameItem}>
                                <Text style={styles.textItem}>Trang chủ</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
                    <View style={{ marginVertical: 10 }}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.icon}>
                                <Ionicons name="person-outline" size={25} />
                            </View>
                            <View style={styles.nameItem}>
                                <Text style={styles.textItem}>Tài khoản</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Contact')} >
                    <View style={{ marginVertical: 10 }}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.icon}>
                                <Ionicons name="settings-outline" size={25} />
                            </View>
                            <View style={styles.nameItem}>
                                <Text style={styles.textItem}>Liên hệ</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>

                {/* <View style={{ marginVertical: 10 }}>

                    <View style={{ flexDirection: 'row' }}>

                            <View style={styles.nameItem}>
                                <Text style={styles.textItem}>Chế độ tối</Text>
                            </View>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme}/>
                            </View>

                    </View>

                </View> */}

            </View>

            <View>
                <TouchableOpacity onPress={handleSignOut} >
                    {/* navigation.navigate('Home') */}
                    <View style={{ marginVertical: 10 }}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.icon}>
                                <Ionicons name="log-out-outline" size={25} />
                            </View>
                            <View style={styles.nameItem}>
                                <Text style={styles.textItem}>Đăng xuất</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    login: {
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 5
    },
    avatar: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 1000,
        marginHorizontal: 10
    },
    icon: {
        marginHorizontal: 10,
        width: 40, height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },
    nameItem: {
        justifyContent: 'center',
        marginLeft: 15,
    },
    textItem: {
        fontSize: 16,
        color: '#3A2828'
    }
})

const mapStateToProps = state => ({
    isLogin: state.loginReducer.isLogin
})

export default connect(mapStateToProps, null)(CustomDrawerContent);