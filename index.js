/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BottomNavigator from "./screens/navigator/BottomNavigator";
import SplashScreen from "./screens/Authentication/SplashScreen";

AppRegistry.registerComponent(appName, () => App);
