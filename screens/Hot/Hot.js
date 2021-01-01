import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";
import HeaderHot from "../../components/Hot/HeaderHot";
import SectionCategory from "./Section/SectionCategory";
import { connect } from "react-redux";
import { monAnHOT, AddCart } from "../actions/monAn";

// const food = [
//     { id: 1, name: "Lẩu ngon tại nhà", price: '200000/1 người' },
//     { id: 2, name: "Buffer 199K", price: '300000/1 người' },
//     { id: 3, name: "Nướng Hàn Quốc", price: '500000/1 người' },
//     { id: 4, name: "Nướng Hàn Quốc", price: '600000/1 người' },
//     { id: 5, name: "Nướng Hàn Quốc", price: '700000/1 người' },
// ]


const Hot = (props) => {

    useEffect(() => {
        props.monAnHOT();
    }, [])
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <HeaderHot navigation={props.navigation}/>
            <FlatList
                data={props.listMonAn}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.container} key={item.id}>
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
            />
        </View>
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
const mapStateToProps = state => ({
    listMonAn: state.monAn.monAns
})

function mapDispatchToProps(dispatch) {
    return {
        monAnHOT: () => dispatch(monAnHOT()),
        AddCart: item => dispatch(AddCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hot);