import 'react-native-gesture-handler';
import React, { useMemo, useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import Authentication from './screens/navigator/Authentication';
import { NavigationContainer } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import auth from "@react-native-firebase/auth";
import DrawerNavigator from './screens/navigator/DrawerNavigator';

//redux
import { Provider } from "react-redux";
import { store } from "./screens/actions/store";
import LoggedStack from './screens/navigator/LoggedStack';
const App = ({navigation}) => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <Provider store={store}>
            <NavigationContainer>
                {
                    user === null ? (

                        <Authentication navigation={navigation} />

                    ) : (

                            <LoggedStack navigation={navigation}/>

                        )
                }
                
            </NavigationContainer>
        </Provider>

    );
};


export default App;
