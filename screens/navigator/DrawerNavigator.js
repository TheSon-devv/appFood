import 'react-native-gesture-handler';
import React,{Component}from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home/Home';
import CustomDrawerContent from "./CustomDrawerContent";
import BottomNavigator from './BottomNavigator';
import Contact from "../Contact/Contact";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {

        return(
                <Drawer.Navigator 
                    initialRouteName="Home"
                    drawerContent={ () => <CustomDrawerContent navigation={props.navigation}/>}
                >
                    <Drawer.Screen
                        name="Home"
                        component={BottomNavigator}
                    />
                     <Drawer.Screen
                        name="Contact"
                        component={Contact}
                    />
                </Drawer.Navigator>
        )
    }

export default DrawerNavigator;