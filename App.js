import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainContact from './components/MainContact';
import EditContact from './components/AddContact';
import AddContact from './components/AddContact';
const AppStack = createStackNavigator({ Home: MainContact, Edit: AddContact, Add: EditContact });
export default createAppContainer(createSwitchNavigator(
  {
    autoLoading: MainContact,
    App: AppStack
  }
));