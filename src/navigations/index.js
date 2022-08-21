import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { Text, View } from "react-native";
import { GlobalContext } from "../context/Provider";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import HomeNavigator from "./HomeNavigator";

const AppNavContainer = () => {
  const {authState: {isLoggedIn}} = useContext(GlobalContext);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
