import { createDrawerNavigator } from '@react-navigation/drawer';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import HomeNavigator from './HomeNavigator';


const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
        <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator