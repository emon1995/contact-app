import { useState } from "react";
import LoginContainer from "../../components/Login/LoginContainer";

const Login = () => {
  const [value, onChangeText] = useState("");
  return (
    <LoginContainer />
  );
};

export default Login;