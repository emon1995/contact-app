import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import { GlobalContext } from '../context/Provider';
import HomeNavigator from './HomeNavigator';
import SideMenu from './SideMenu/SideMenu';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />
}

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    const {authDispatch} = useContext(GlobalContext);

  return (
    <Drawer.Navigator screenOptions={{
      drawerType: "slide"
    }} drawerContent={({navigation}) => getDrawerContent(navigation, authDispatch)}>
        <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator