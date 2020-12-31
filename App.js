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


//login
import { AuthContext } from "./components/context";
import DrawerNavigator from './screens/navigator/DrawerNavigator';

//redux
import { Provider } from "react-redux";
import { store } from "./screens/actions/store";
const App = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const authContext = useMemo(() => ({
        signIn: () => {
            setUserToken('son');
            setIsLoading(false);
        },
        signOut: () => {
            setUserToken(null);
            setIsLoading(false);
        },
        signUp: () => {
            setUserToken('son');
            setIsLoading(false);
        }
    }), [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    return (
        <Provider store={store}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    {/* {
                    userToken != null ? (

                        <DrawerNavigator navigation={navigation}/>

                    )
                        :
                        (
                            <Authentication />
                        )
                } */}
                    <Authentication />
                </NavigationContainer>

            </AuthContext.Provider>
        </Provider>

    );
};


export default App;
