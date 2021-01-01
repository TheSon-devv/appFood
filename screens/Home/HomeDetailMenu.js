import React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView,Image,TouchableOpacity,Dimensions,StyleSheet } from "react-native";
import HeaderHomeDetail from "../../components/Home/HeaderHomeDetail";
import { connect } from "react-redux";
import { AddCart } from "../actions/monAn";

const HomeDetailMenu = (props) => {
    const { menuParams } = props.route.params;
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <HeaderHomeDetail navigation={props.navigation} />
            <FlatList
                data={menuParams}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.container} >
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.borderImage}>
                                    <Image source={{uri:item.imgFood}} style={styles.image} />
                                </View>
                                <View style={styles.detailCustomer}>
                                    <View style={{ marginBottom: 5 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF7575' }} numberOfLines={1} ellipsizeMode="tail">{item.tenMA}</Text>
                                    </View>
                                    <View style={{ marginBottom: 5 }}>
                                        <Text style={{ fontSize: 12, color: '#FFA3A3' }}>{item.priceMA} VND / suất</Text>
                                    </View>
                                    <View>
                                        <Text>Giảm tới 70%</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.bookTable} onPress={() => props.AddCart(item)}>
                                    <Text>Thêm vào giỏ hàng</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>)
                }
                keyExtractor={item => `${item.maMA}`}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const itemWidth = (width - 100) / 2;
const itemImageHeight = (itemWidth / 350) * 250;


const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        paddingTop: 10,
        elevation: 1,
        backgroundColor: '#fff'
    },
    borderImage: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    detailCustomer: {
        width: '50%',
        marginLeft: 30,
        padding: 5
    },
    image: {
        width: itemWidth,
        height: itemImageHeight,
        borderRadius: 5
    },
    bookTable: {
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 0.2,
        padding: 5,
        borderColor: '#F7F7F7',
        backgroundColor: '#F7F7F7'
    }
})

function mapDispatchToProps(dispatch) {
    return {
        AddCart: item => dispatch(AddCart(item))
    }
}
export default connect(null, mapDispatchToProps)(HomeDetailMenu);