import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { connect } from "react-redux";
import { monAnBuffet,monAnLau,monAnPizza } from "../../actions/monAn";
import { useEffect } from "react";


const SectionMenu = (props) => {

    useEffect(() => {
        props.monAnPizza();
        props.monAnLau();
        props.monAnBuffet();
    },[])

    return (
        <>
            <View style={styles.headerContainer}>
                <TouchableOpacity  onPress={() => props.navigation.navigate('HomeDetailMenu',{
                    menuParams: props.listMonAnLau
                })}>
                    <View style={styles.category}>
                        <Ionicons name="restaurant" size={25} color="#FF6347" />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate('HomeDetailMenu',{
                    menuParams: props.listMonAnBuffet
                })}>
                    <View style={styles.category}>
                        <Ionicons name="fast-food" size={30} color="#FF6347" />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate('HomeDetailMenu',{
                    menuParams: props.listMonAnPizza
                })}>
                    <View style={styles.category}>
                        <Ionicons name="pizza" size={35} color="#FF6347" />
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <Ionicons name="beer" size={30} color="#FF6347" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <MaterialCommunityIcons name="pasta" size={30} color="#FF6347" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <MaterialCommunityIcons name="hamburger" size={30} color="#FF6347" />
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
    listMonAnLau: state.monAn.monAnLau,
    listMonAnPizza: state.monAn.monAnPizza,
    listMonAnBuffet: state.monAn.monAnBuffet
})


function mapDispatchToProps(dispatch) {
    return {
        monAnLau: () => dispatch(monAnLau()),
        monAnPizza: () => dispatch(monAnPizza()),
        monAnBuffet: () => dispatch(monAnBuffet())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SectionMenu);