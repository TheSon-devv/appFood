import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import swiper1 from "../../assets/image/swiper1.jpg";

import { connect } from "react-redux";
import { monAnLau} from "../../actions/monAn";
import { useEffect } from "react";

const SectionFood = (props) => {

    useEffect(() => {
        props.monAnLau();
    },[])

    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={{ marginLeft: 5, marginVertical: 5 }}>
                    <Text style={{ fontSize: 18, color: '#B57171' }}>Món Lẩu</Text>
                </View>
                <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                    {props.listMonAnLau.map((e, index) => (

                        <View style={styles.itemContainer} key={e.maMA}>
                            <TouchableOpacity >
                                <Image source={{uri:e.imgFood}} style={styles.itemImage} />
                            </TouchableOpacity>
                            <Text style={styles.itemName} numberOfLines={1}>{e.tenMA.toUpperCase()}</Text>

                        </View>
                    ))}
                </ScrollView>
            </View>

        </ScrollView>
    )
}
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const itemWidth = (width - 50) / 2;
const itemImageHeight = (itemWidth / 500) * 400;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 5,
        borderTopWidth: 1,
        borderTopColor: '#ffe6e6'
    },
    itemContainer: {
        width: itemWidth,
        paddingVertical: 5,
        marginRight: 10
    },
    itemImage: {
        width: itemWidth,
        height: itemImageHeight,
        borderRadius:5
    },
    itemName: {
        fontSize: 11,
        padding: 5,
        color: '#D58D8D'
    },
    itemPrice: {
        fontSize: 10,
        paddingLeft: 5,
        color: 'blue'
    },

})

const mapStateToProps = state => ({
    listMonAnLau: state.monAn.monAnLau
})


function mapDispatchToProps(dispatch) {
    return {
        monAnLau: () => dispatch(monAnLau())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SectionFood);