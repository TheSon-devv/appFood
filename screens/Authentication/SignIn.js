import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Dimensions, Image, TouchableOpacity, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import foodStore from "../assets/image/foodStore.png";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';

import firebase from '@react-native-firebase/app';
import auth from "@react-native-firebase/auth";


const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check_textInputChange, setCheck_textInputChange] = useState(false)
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)


    const textInputChange = (value) => {
        if (value !== 0) {
            setEmail(value)
            setCheck_textInputChange(true)
        }
        else {
            setEmail(value)
            setCheck_textInputChange(false)
        }
    }

    const handlePasswordChange = (value) => {
        setPassword(value)
    }

    const updateSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry)
    }



    const Signin = () => {
        if (email == '') {
            Alert.alert("Bạn chưa nhập tài khoản !");
        }
        else if (password == '') {
            Alert.alert("Bạn chưa nhập mật khẩu");
        }
        else {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => props.navigation.navigate('DrawerNavigator'))
                .then(() => Alert.alert("Đăng nhập thành công !"))
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        setErrorMessage('Địa chỉ Email không hợp lệ !');
                    }
                    if (error.code === 'auth/wrong-password') {
                        setErrorMessage('Sai mật khẩu !');
                    }
                    if (error.code === 'auth/user-not-found') {
                        setErrorMessage('Không tìm thấy tài khoản !');
                    }
                })
            return true;
        }
        return false;
    }




    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            {/* 
                <View style={styles.buttonPress}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawerNavigator')}
                        style={styles.buttonSignIn}
                    >
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Roboto-Light' }}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 20, flexDirection: 'row' }}>
                    <Text style={{ color: '#C3C3C3' }}>Don't have an account ? </Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto-BoldItalic' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>  */}
            <View style={styles.header}>
                <View style={{ marginBottom: 60, marginHorizontal: 20 }}>
                    <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate" style={{ fontWeight: 'bold', fontSize: 30, color: "#fff" }}>Welcome !</Animatable.Text>
                </View>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <View style={styles.logoView}>
                    <TouchableOpacity style={styles.logo}>
                        <FontAwesome name="facebook" size={25} color="#2980B9" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>
                        <FontAwesome name="instagram" size={25} color="#CA6F1E" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>
                        <FontAwesome name="twitter" size={25} color="#5DADE2" />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10, marginTop: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, fontStyle: 'italic', color: "#494949" }}>hoặc sử dụng tài khoản đã có</Text>
                </View>
                <View >
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Email or Phone"
                            autoCapitalize="none"
                            style={{ width: '100%' }}
                            onChangeText={(email) => textInputChange(email)}
                            value={email}
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Password  (Tối thiểu 6 ký tự)"
                            autoCapitalize="none"
                            secureTextEntry={secureTextEntry ? true : false}
                            style={{ width: '90%' }}
                            onChangeText={(password) => handlePasswordChange(password)}
                            value={password}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {
                                secureTextEntry ? (
                                    <Feather name="eye-off" color="grey" size={20} />
                                ) : (
                                        <Feather name="eye" color="grey" size={20} />
                                    )
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', marginHorizontal: 10, alignItems: 'center', marginTop: 10 }}>
                        {errorMessage != null ? (
                            <>
                                <Text style={{ color: 'red', fontSize: 18 }}>
                                    {errorMessage}
                                </Text>
                            </>
                        ) : (
                                <>
                                
                                </>
                            )

                        }
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity onPress={Signin}>
                            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                                <Text style={{ color: '#fff' }}>Đăng nhập </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontStyle: 'italic', color: '#009387' }}>Chưa có tài khoản ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{color:'red'}}>Đăng ký</Animatable.Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Animatable.View>
        </View>
    )
}


// const { width } = Dimensions.get('window');
// const { height } = Dimensions.get('window');
// const itemWidth = (width - 150) / 2;
// const itemImageHeight = (itemWidth / 512) * 512;


const { height } = Dimensions.get('screen');
const height_logo = height * 0.2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    image: {
        width: height_logo,
        height: height_logo
    },
    input: {
        borderBottomWidth: 0.2,
        borderBottomColor: '#009387',
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    signIn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#009387',
        borderRadius: 100,
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoView: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginHorizontal: 15,
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#A7FFC1',
        borderWidth: 0.5
    }
})

export default SignIn;