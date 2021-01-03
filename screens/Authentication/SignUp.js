import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Dimensions, Image, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import foodStore from "../assets/image/foodStore.png";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';

import firebase from '@react-native-firebase/app';
import auth from "@react-native-firebase/auth";


const SignUp = (props) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [check_textInputChange, setCheck_textInputChange] = useState(false)
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)


    const textInputChange = (value) => {
        setEmail(value)
    }

    const nameInputChange = (value) => {
        setName(value)
    }

    const handlePasswordChange = (value) => {
        setPassword(value)
    }

    const updateSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry)
    }

    const SignUp = () => {
        if (email == '') {
            Alert.alert("Bạn chưa nhập tài khoản !");
        }
        else if (password == '') {
            Alert.alert("Bạn chưa nhập mật khẩu");
        }
        else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => Alert.alert("Đăng ký thành công !"))
                .catch(error => setErrorMessage(error.message))
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
                <View style={{ marginBottom: 60, marginLeft: 220}}>
                    <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate" style={{ fontWeight: 'bold', fontSize: 30, color: "#fff" }}>Welcome !</Animatable.Text>
                </View>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">

                <View style={{ marginVertical: 10, marginTop: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#34495E" }}>Đăng ký tài khoản</Text>
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
                            placeholder="Tên đăng nhập "
                            autoCapitalize="none"
                            style={{ width: '100%' }}
                            onChangeText={(name) => nameInputChange(name)}
                            value={name}
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
                        {errorMessage &&
                            <Text style={{ color: 'red', fontSize: 18 }}>
                                {errorMessage}
                            </Text>
                        }
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity onPress={SignUp}>
                            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                                <Text style={{ color: '#fff' }}>Đăng ký </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontStyle: 'italic', color: '#009387' }}>Đã có tài khoản ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ color: 'red' }}>Đăng nhập</Animatable.Text>
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

export default SignUp;