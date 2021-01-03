import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../Authentication/SignIn';
import SplashScreen from '../Authentication/SplashScreen';
import DrawerNavigator from './DrawerNavigator';

const StackLogged = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
})

export default class LoggedStack extends Component {
    render() {
        return (
            <StackLogged.Navigator initialRouteName="DrawerNavigator">
                <StackLogged.Screen name="SplashScreen" component={SplashScreen} options={navOptionHandler} />
                <StackLogged.Screen name="DrawerNavigator" component={DrawerNavigator} options={navOptionHandler} />
            </StackLogged.Navigator>
        );
    }
}