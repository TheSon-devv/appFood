import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Hot from '../Hot/Hot';
import BookTable from '../BookTable/BookTable';
import HomeStack from '../Home/HomeStack';
import Cart from '../Cart/Cart';

const Tab = createBottomTabNavigator();

export default class BottomNavigator extends Component {
    render(){
        return(
            <Tab.Navigator
                tabBarOptions = {{
                    activeTintColor:'tomato',
                    inactiveTintColor:'gray'
                }}
            >
                <Tab.Screen name="HomeStack" component={HomeStack} 
                    options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({color}) => (
                        <Ionicons name="home-outline" size={26} color={color}/>
                    ),
                }}
                />
                <Tab.Screen name="Hot" component={Hot} 
                    options={{
                    tabBarLabel: 'Món ăn HOT',
                    tabBarIcon: ({color}) => (
                        <Ionicons name="flame-outline" size={26} color={color}/>
                    ),
                }}
                />
                <Tab.Screen name="BookTable" component={BookTable} 
                    options={{
                    tabBarLabel: 'Đặt bàn',
                    tabBarIcon: ({color}) => (
                        <Ionicons name="file-tray-full-outline" size={26} color={color}/>
                    ),
                }}
                />
                <Tab.Screen name="Cart" component={Cart} 
                    options={{
                    tabBarLabel: 'Giỏ hàng',
                    tabBarIcon: ({color}) => (
                        <Ionicons name="cart-outline" size={26} color={color}/>
                    ),
                }}
                />
            </Tab.Navigator>
        );
    }
}