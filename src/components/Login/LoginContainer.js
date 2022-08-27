import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Container from "../common/Container";
import Input from "../common/Input/index";
import CustomButton from "../common/CustomButton/index";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SIGNUP } from "../../constants/routeNames";
import Message from "../common/Message";

const LoginContainer = ({ form, onChange, onSubmit, error, loading }) => {
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
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="invalid credentials"
            />
          )}
          {error?.error && <Message onDismiss danger message={error?.error} />}
          <Input
            label="Username"
            placeholder="Enter Username"
            iconPosition="right"
            onChangeText={(value) => onChange({ name: "userName", value })}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
            onChangeText={(value) => onChange({ name: "password", value })}
          />
          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            primary
            title="Submit"
          />
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
