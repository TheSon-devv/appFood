import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { connect } from "react-redux";
import { monAnHOT } from "../../actions/monAn";
import { useEffect } from "react";


const SectionMenu = (props) => {

    useEffect(() => {
        props.monAnHOT();
    },[])

    return (
        <>
            <View style={styles.headerContainer}>
                <TouchableOpacity >
                    <View style={styles.category}>
                        <Ionicons name="restaurant" size={25} color="#FF6347" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <Ionicons name="fast-food" size={30} color="#FF6347" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeDetailMenu',{
                    menuParams: props.listMonAn
                })}>
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

const mapStateToProps = state => ({
    listMonAn: state.monAn.monAns
})


function mapDispatchToProps(dispatch) {
    return {
        monAnHOT: () => dispatch(monAnHOT())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SectionMenu);