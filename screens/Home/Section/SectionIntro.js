import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import meat from "../../assets/image/meat.png";
import luxury from "../../assets/image/luxury.png";
import food from "../../assets/image/food.png";

const SectionIntro = (props) => {

    return (
        <>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeDetailMenu', {
                    menuParams: props.menu
                })}>
                    <View style={styles.category}>
                        <Image source={meat} style={styles.imgIntro} />
                        <Text style={styles.textIntro}>Thực phẩm sạch</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <Image source={luxury} style={styles.imgIntro} />
                        <Text style={styles.textIntro}>Sang trọng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.category}>
                        <Image source={food} style={styles.imgIntro} />
                        <Text style={styles.textIntro}>Phục vụ tận tình</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        flex: 3,
        marginTop:10
    },
    category: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width:132
    },
    imgIntro: {
        width: 50,
        height: 50,
        marginBottom:10
    },
    textIntro : {
        fontStyle:'italic'
    }
})

export default SectionIntro;