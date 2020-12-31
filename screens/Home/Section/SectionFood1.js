import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import swiper5 from "../../assets/image/swiper5.jpg";



const SectionFood1 = (props) => {

    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={{ marginLeft: 5, marginVertical: 5 }}>
                    <Text style={{ fontSize: 18, color: '#B57171' }}>Món Ngon</Text>
                </View>
                <ScrollView horizontal={true} style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                    {props.menu1.map((e, index) => (

                        <View style={styles.itemContainer} key={e.id}>
                            <TouchableOpacity>
                                <Image source={swiper5} style={styles.itemImage} />
                            </TouchableOpacity>
                            <Text style={styles.itemName} numberOfLines={1}>{e.name.toUpperCase()}</Text>

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

export default SectionFood1;