import { useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import LoginContainer from "../../components/Login/LoginContainer";
import loginUser from "../../context/actions/auth/loginUser";
import { GlobalContext } from "../../context/Provider";

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {
    authDispatch,
    authState: { error, loading },
  } = useContext(GlobalContext);
  const {params} = useRoute();

  useEffect(() => {
    if(params?.data){
      setJustSignedUp(true);
      setForm({...form, userName: params.data.username})
    }
  }, [])
  
  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({ name, value }) => {
    setJustSignedUp(false);
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginContainer
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
