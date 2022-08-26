import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, SIGNUP } from '../constants/routeNames';
import Login from "../screens/Login/index";
import SignUp from '../screens/SignUp/index';

const AuthNavigator = () => {
    const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={LOGIN} component={Login} />
        <AuthStack.Screen name={SIGNUP} component={SignUp} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator