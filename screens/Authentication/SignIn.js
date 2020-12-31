import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Button, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import foodStore from "../assets/image/foodStore.png";
import { AuthContext } from "../../components/context";


const SignIn = ({ navigation }) => {
    const [data, useData] = useState({
        email: '',
        password: '',
        isLoggin: '',
        errorMessage: null
    });

    const { signIn } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <View >
                    <Image source={foodStore} style={styles.imageBook} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: "#ff563f", fontSize: 25, fontFamily: 'BigShouldersStencilDisplay-Bold' }}>Restaurant</Text>
                </View>

            </View>
            <View style={styles.formLogin}>

                <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
                    {data.errorMessage &&
                        <Text style={{ color: 'red', fontSize: 18 }}>
                            {data.errorMessage}
                        </Text>
                    }
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TextInput
                        placeholder="Email or Phone"
                        autoCapitalize="none"
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry
                        style={styles.textInput}
                    />

                    <View style={{ marginVertical: 10, marginLeft: 150 }}>
                        <TouchableOpacity>
                            <Text style={{ color: '#ff563f', fontFamily: 'Roboto-Italic' }}>Forgot your password ? </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.buttonPress}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DrawerNavigator')}
                        style={styles.buttonSignIn}
                    >
                    {/* //navigation.navigate('DrawerNavigator') */}
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Roboto-Light' }}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 20, flexDirection: 'row' }}>
                    <Text style={{ color: '#C3C3C3' }}>Don't have an account ? </Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Roboto-BoldItalic' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const itemWidth = (width - 150) / 2;
const itemImageHeight = (itemWidth / 512) * 512;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    formLogin: {
        marginTop: 30,
        alignItems: 'center'
    },
    imageBook: {
        width: itemWidth,
        height: itemImageHeight,
        marginBottom: 10,

    },
    textLogin: {
        fontSize: 25,
        color: 'red',
        fontWeight: 'bold'
    },
    textInput: {
        height: 50,
        width: '80%',
        borderColor: 'gray',
        borderBottomWidth: 0.5,
        marginVertical: 8,
        fontSize: 16,
        color: '#000000'
    },
    buttonPress: {
        marginTop: 8,
        width: '80%',
    },
    buttonSignIn: {
        backgroundColor: "#ff563f",
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 5
    }
})

export default SignIn;