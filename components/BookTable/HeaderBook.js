import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const HeaderHot = (props) => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.bars}>
                <TouchableOpacity>
                    <FontAwesome name="bars" size={25} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.trangChu}>
                <Text style={styles.textTrangChu}>Đặt Bàn </Text>
            </View>
            <View style={styles.information}>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#DC3E18',
        paddingVertical: 15,
        marginBottom: 10,
    },
    bars: {
        flex: 1,
        marginLeft: 10,
        justifyContent:'center'
    },
    trangChu: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTrangChu: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600'
    },
    information: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
        justifyContent:'center'
    }
})

export default HeaderHot;