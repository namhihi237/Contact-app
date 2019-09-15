/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import MainContact from './components/MainContact';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
AppRegistry.registerComponent(appName, () => App);
