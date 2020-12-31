import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SectionMenu = (props) => {

    return (
        <>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeDetailMenu',{
                    menuParams: props.menu
                })}>
                    <View style={styles.category}>
                        <Ionicons name="restaurant" size={25} color="#FF6347" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <Ionicons name="fast-food" size={30} color="#FF6347" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <Ionicons name="pizza" size={35} color="#FF6347" />
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <Ionicons name="restaurant" size={25} color="#FF6347" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <MaterialCommunityIcons name="food-fork-drink" size={30} color="#FF6347" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <MaterialCommunityIcons name="food" size={35} color="#FF6347" />
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    category: {
        backgroundColor: '#fff6e6',
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25
    }
})

export default SectionMenu;