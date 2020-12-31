import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import HomeDetailMenu from "./HomeDetailMenu";

const StackHome = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
})

const HomeStack = () => {
    return (
        <StackHome.Navigator initialRouteName="Home">
            <StackHome.Screen name="Home" component={Home} options={navOptionHandler} />
            <StackHome.Screen name="HomeDetailMenu" component={HomeDetailMenu} options={navOptionHandler} />
        </StackHome.Navigator>
    )

}
export default HomeStack;