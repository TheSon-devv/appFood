import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import SignIn from '../Authentication/SignIn';
import DrawerNavigator from './DrawerNavigator';

const AuthenticationStack = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})

export default class Authentication extends Component {
    render(){
        return(
            <AuthenticationStack.Navigator initialRouteName="SignIn">  
                <AuthenticationStack.Screen name="SignIn" component={SignIn} options={navOptionHandler}/>
                <AuthenticationStack.Screen name="DrawerNavigator" component={DrawerNavigator} options={navOptionHandler}/>
            </AuthenticationStack.Navigator>
        );
    }
}