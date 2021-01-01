import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image
} from 'react-native';
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions/monAn';

import swiper1 from "../assets/image/swiper1.jpg";


function Cart({ items, IncreaseQuantity, DecreaseQuantity,DeleteCart }) {
    const { main, checkoutButton, checkoutTitle, wrapper,
        product, mainRight, productController,
        txtName, txtPrice, productImage, numberOfProduct,
        txtShowDetail, showDetailContainer } = styles;

    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {

        TotalCart += items.Carts[item].quantity * items.Carts[item].priceMA;
        ListCart.push(items.Carts[item]);
    });

    function TotalPrice(price, tongGia) {
        return Number(price * tongGia).toLocaleString();
    }

    return (
        <View style={wrapper}>
            <ScrollView style={main}>
                {
                    ListCart.map((item, key) => {
                        return (
                            <View style={product} key={item.maMA}>
                                <View>
                                    <Image source={item.imgFood} style={productImage} />
                                </View>
                                <View style={[mainRight]}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={txtName}>{item.tenMA}</Text>
                                        <TouchableOpacity onPress={() => DeleteCart(key)}>
                                            <Text style={{ fontFamily: 'Avenir', color: '#969696',fontSize:20 }}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={txtPrice}>{TotalPrice(item.priceMA,item.quantity)}</Text>
                                    </View>
                                    <View style={productController}>
                                        <View style={numberOfProduct}>
                                            <TouchableOpacity onPress={() => IncreaseQuantity(key)}>
                                                <View style={styles.buttonClick}>
                                                    <Text style={styles.textButton}>+</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <Text style={{ fontSize: 20 }}>{item.quantity}</Text>
                                            <TouchableOpacity onPress={() => DecreaseQuantity(key)}>
                                                <View style={styles.buttonClick}>
                                                    <Text style={styles.textButton}>-</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={showDetailContainer}>
                                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }

            </ScrollView>
            <TouchableOpacity style={checkoutButton}>
                <Text style={checkoutTitle}>CHỐT ĐƠN {Number(TotalCart)} VND </Text>
            </TouchableOpacity>
        </View>
    );
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 400;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    buttonClick: {
        backgroundColor: '#2ABB9C',
        width: 30,
        height: 30,
        alignItems: 'center',
        borderRadius: 100
    },
    textButton: {
        fontSize: 20,
        color: '#fff'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        resizeMode: 'center',
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between',

    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

const mapStateToProp = state => {
    return {
        items: state.monAn
    }
}
export default connect(mapStateToProp, { IncreaseQuantity, DecreaseQuantity ,DeleteCart})(Cart);