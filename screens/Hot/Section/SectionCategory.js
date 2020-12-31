import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import swiper6 from "../../assets/image/swiper6.jpg";


const SectionCategory = (props) => {
    return (
        <View>
            <View style={styles.container} key={props.data.id}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.borderImage}>
                        <Image source={{ uri: 'https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.image} />
                    </View>
                    <View style={styles.detailCustomer}>
                        <View >
                            <Text style={{ fontSize: 16 }} numberOfLines={1} ellipsizeMode="tail">{props.data.name}</Text>
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
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.bookTable} onPress={()=>props.navigation.navigate('HomeDetailMenu')}>
                        <Text>Xem chi tiết</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookTable}>
                        <Text>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
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
export default SectionCategory;