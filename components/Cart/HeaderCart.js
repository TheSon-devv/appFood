import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const HeaderCart = ({ navigation }) => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.bars}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="bars" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.trangChu}>
                <Text style={styles.textTrangChu}>Giỏ hàng</Text>
            </View>
            <View style={styles.information}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        marginBottom: 10,
        backgroundColor:'#fff'
    },
    bars: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    trangChu: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTrangChu: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600'
    },
    information: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
        justifyContent: 'center'
    }
})

export default HeaderCart;