import React, { useEffect, useState } from "react";
import { View, Text, FlatList,Dimensions,StyleSheet ,Image,TouchableOpacity} from "react-native";
import HeaderHot from "../../components/Hot/HeaderHot";
import SectionCategory from "./Section/SectionCategory";
import { connect } from "react-redux";
import { actFetchProductsRequest, AddCart } from "../actions/monAn";

// const food = [
//     { id: 1, name: "Lẩu ngon tại nhà", price: '200000/1 người' },
//     { id: 2, name: "Buffer 199K", price: '300000/1 người' },
//     { id: 3, name: "Nướng Hàn Quốc", price: '500000/1 người' },
//     { id: 4, name: "Nướng Hàn Quốc", price: '600000/1 người' },
//     { id: 5, name: "Nướng Hàn Quốc", price: '700000/1 người' },
// ]


const Hot = (props) => {

    useEffect(() => {
        props.actFetchProductsRequest();
    }, [])
    return (
        <View style={{ backgroundColor: '#fff', marginBottom: 75 }}>
            <HeaderHot />
            <FlatList
                data={props.listMonAn}
                renderItem={({ item }) => (
                <View>
                    <View style={styles.container} key={item.id}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.borderImage}>
                                <Image source={{ uri: 'https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.image} />
                            </View>
                            <View style={styles.detailCustomer}>
                                <View >
                                    <Text style={{ fontSize: 16 }} numberOfLines={1} ellipsizeMode="tail">{item.tenMA}</Text>
                                </View>
                                <View>
                                    <Text>price</Text>
                                </View>
                                <View>
                                    <Text>Giảm tới 70%</Text>
                                    <Text>Có thể bán : </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.bookTable} onPress={() => props.navigation.navigate('HomeDetailMenu')}>
                                <Text>Xem chi tiết</Text>
                            </TouchableOpacity>
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
        backgroundColor:'#fff'
    },
    borderImage: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    detailCustomer: {
        width: '58%',
        marginLeft: 20,
    },
    image: {
        width: itemWidth,
        height: itemImageHeight,
        borderRadius: 5
    },
    bookTable: {
        alignItems: 'center',
        marginTop: 10, 
        width: '50%',
        borderTopWidth:0.2,

    }
})
const mapStateToProps = state => ({
    listMonAn: state.monAn.monAns
})

function mapDispatchToProps(dispatch) {
    return {
        actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
        AddCart: item => dispatch(AddCart(item))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hot);