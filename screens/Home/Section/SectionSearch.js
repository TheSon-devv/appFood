import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SectionSearch = (props) => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.textHeader}>
                <Text style={{fontSize:14,fontWeight:'800'}}>Tìm nhà hàng còn chỗ phù hợp , dễ dàng</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    placeholder="Ăn sáng | 22/10/2020 | 2 người"
                    style={styles.textInput}
                />
                <TouchableOpacity style={styles.search}>
                    <Text style={{color:"#fff"}}>
                        Tìm
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#F7F7F7",
        paddingVertical: 10,
        marginBottom : 10
    },
    textHeader : {
        paddingBottom: 10,
        paddingHorizontal:10
    },
    textInput: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 25,
        width: "75%",
        backgroundColor: '#fff',
        marginHorizontal:5
    },
    search: {
        marginHorizontal:5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: 'red',
        width: "20%",
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 25
    }
})

export default SectionSearch;