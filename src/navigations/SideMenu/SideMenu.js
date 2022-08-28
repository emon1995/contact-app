import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Container from "../../components/common/Container";
import { SETTINGS } from "../../constants/routeNames";
import logoutUser from "../../context/actions/auth/logoutUser";
import styles from "./styles";
import Icon from '../../components/common/Icon/Icon';

const SideMenu = ({ authDispatch }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // () => navigation.toggleDrawer() ;
    navigation.dispatch(DrawerActions.toggleDrawer());
    Alert.alert("Logout!", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="material" size={17} name="settings" />,
      name: "Settings",
      onPress: () => navigation.navigate(SETTINGS),
    },
    {
      icon: <Icon type="material" size={17} name="logout" />,
      name: "Logout",
      onPress: () => handleLogout(),
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require("../../../assets/images/logo.png")}
          style={styles.logoImage}
        />
        <View style={{ paddingHorizontal: 70 }}>
          {menuItems.map(({ name, icon, onPress }) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
