import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, ImageBackground } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import footer from "../../assets/image/footer.png";


const SectionFooter = (props) => {

    return (
        <View style={styles.headerContainer}>
            <ImageBackground source={footer} style={styles.image}>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Text style={styles.textFooter}>Cảm ơn đã tin tưởng và sử dụng dịch vụ của nhà hàng !</Text>
                </View>
                <View style={styles.logoView}>
                    <TouchableOpacity style={styles.logo}>
                        <Ionicons name="logo-facebook" size={25} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>
                        <Ionicons name="logo-instagram" size={25} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>
                        <Ionicons name="call-outline" size={25} color="#fff" />
                    </TouchableOpacity>


                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: "column",
        marginTop: 20
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        height: 150,
        paddingTop:20
    },
    textFooter: {
        color: '#fff'
    },
    logoView : {
        flexDirection:'row',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    logo : {
        marginHorizontal:15,
    }
})

export default SectionFooter;