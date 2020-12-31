import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HeaderHomeDetail = ({navigation}) => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.bars}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={25} color="black"/>
                </TouchableOpacity>
            </View>
            <View style={styles.trangChu}>
                <Text style={styles.textTrangChu}>Restaurant</Text>
            </View>
            <View style={styles.information}>
                {/* <TouchableOpacity>
                    <FontAwesome name="info" size={25} color="black" />
                </TouchableOpacity> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
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
        color: 'black',
        fontWeight: '600'
    },
    information: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
        justifyContent:'center'
    }
})

export default HeaderHomeDetail;