import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Container from "../common/Container";
import Input from "../common/Input/index";
import CustomButton from "../common/CustomButton/index";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeNames";

const SignupContainer = ({form,error, loading, data, errors, onSubmit, onChange}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require("../../../assets/images/logo.png")}
      />
      <View>
        <Text style={styles.title}>Welcome to EHContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          {error?.error && <Text>{error.error}</Text>}
          <Input
            label="Username"
            placeholder="Enter Username"
            iconPosition="right"
            onChangeText={(value) => onChange({name: "userName", value})}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="First Name"
            placeholder="Enter First Name"
            iconPosition="right"
            onChangeText={(value) => onChange({name: "firstName", value})}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            iconPosition="right"
            onChangeText={(value) => onChange({name: "lastName", value})}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            iconPosition="right"
            onChangeText={(value) => onChange({name: "email", value})}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
            onChangeText={(value) => onChange({name: "password", value})}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton loading={loading} disabled={loading} onPress={onSubmit} primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignupContainer;
