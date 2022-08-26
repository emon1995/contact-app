import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Container from "../common/Container";
import Input from "../common/Input/index";
import CustomButton from "../common/CustomButton/index";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SIGNUP } from "../../constants/routeNames";

const LoginContainer = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require("../../../assets/images/logo.png")}
      />
      <View>
        <Text style={styles.title}>Welcome to EHContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            iconPosition="right"
            // error={"This is field is require"}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
          />
          <CustomButton primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(SIGNUP)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginContainer;
