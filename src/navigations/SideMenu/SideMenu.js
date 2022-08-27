import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/common/Container";
import { SETTINGS } from "../../constants/routeNames";
import styles from "./styles";

const SideMenu = () => {
    const navigation = useNavigation();

    const menuItems = [
        {icon: <Text>T</Text>, name: "Settings", onPress: () => navigation.navigate(SETTINGS)},
        {icon: <Text>T</Text>, name: "Logout", onPress: () => navigation.navigate(SETTINGS)},
    ]
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require("../../../assets/images/logo.png")}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress}  key={name} style={styles.item}>
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
