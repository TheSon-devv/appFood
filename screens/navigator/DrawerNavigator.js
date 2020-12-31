import 'react-native-gesture-handler';
import React,{Component}from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home/Home';
import CustomDrawerContent from "./CustomDrawerContent";
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {

        return(
                <Drawer.Navigator 
                    initialRouteName="Home"
                    drawerContent={ () => <CustomDrawerContent navigation={navigation}/>}
                >
                    <Drawer.Screen
                        name="Home"
                        component={BottomNavigator}
                    />
                </Drawer.Navigator>
        )
    }

export default DrawerNavigator;