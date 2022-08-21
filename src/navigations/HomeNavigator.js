import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_CREATE, CONTACT_DETAILS, CONTACT_LIST, SETTINGS } from '../constants/routeNames';
import Contacts from "../screens/Contacts/index";
import ContactsDetails from "../screens/ContactDetails/index";
import CreateContacts from "../screens/CreateContact/index";
import Settings from "../screens/Settings/index";


const HomeNavigator = () => {
    const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
        <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
        <HomeStack.Screen name={CONTACT_DETAILS} component={ContactsDetails} />
        <HomeStack.Screen name={CONTACT_CREATE} component={CreateContacts} />
        <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator