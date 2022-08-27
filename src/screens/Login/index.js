import { useContext, useState } from "react";
import LoginContainer from "../../components/Login/LoginContainer";
import loginUser from "../../context/actions/auth/loginUser";
import { GlobalContext } from "../../context/Provider";

const Login = () => {
  const [form, setForm] = useState({});
  const {
    authDispatch,
    authState: { error, loading },
  } = useContext(GlobalContext);

  const onSubmit = () => {
    console.log("login");
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginContainer
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
