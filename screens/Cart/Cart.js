import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image, SafeAreaView
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

//redux
import { connect } from "react-redux";
import HeaderCart from '../../components/Cart/HeaderCart';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions/monAn';



function Cart({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart, navigation }) {
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
            <HeaderCart navigation={navigation} />
            {
                items.numberCart == 0 ? (
                    <View style={styles.empty}>
                        <Ionicons name="cart-outline" size={60} style={{marginVertical:10}}/>
                        <Text style={{fontStyle:'italic'}}>Hiện không có sản phẩm nào trong giỏ hàng</Text>
                    </View>
                ) : (<>
                    <ScrollView style={main}>
                        {
                            ListCart.map((item, key) => {
                                return (
                                    <View style={product} key={item.maMA}>
                                        <View>
                                            <Image source={{ uri: item.imgFood }} style={productImage} />
                                        </View>
                                        <View style={[mainRight]}>
                                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ width: 240 }}>
                                                    <Text style={txtName} numberOfLines={1}>{item.tenMA}</Text>
                                                </View>
                                                <TouchableOpacity onPress={() => DeleteCart(key)} style={{width:25,alignItems:'center'}}>
                                                    <Text style={{ fontFamily: 'Avenir', color: '#969696', fontSize: 20 }}>X</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <Text style={txtPrice}>{TotalPrice(item.priceMA, item.quantity)} VND</Text>
                                            </View>
                                            <View style={productController}>
                                                <View style={numberOfProduct}>
                                                    <TouchableOpacity onPress={() => DecreaseQuantity(key)}>
                                                        <View style={styles.buttonClick}>
                                                            <Text style={styles.textButton}>-</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <View style={{ marginHorizontal: 20 }}>
                                                        <Text style={{ fontSize: 20 }}>{item.quantity}</Text>
                                                    </View>
                                                    <TouchableOpacity onPress={() => IncreaseQuantity(key)}>
                                                        <View style={styles.buttonClick}>
                                                            <Text style={styles.textButton}>+</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </ScrollView>
                    <TouchableOpacity style={checkoutButton}>
                        <Text style={checkoutTitle}>ĐẶT MÓN {Number(TotalCart)} VND </Text>
                    </TouchableOpacity>
                </>
                    )
            }

        </View>
    );
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 400;

const styles = StyleSheet.create({
    empty : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },  
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
        borderRadius: 5
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
        justifyContent: 'center'
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
        fontSize: 14,
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
export default connect(mapStateToProp, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Cart);