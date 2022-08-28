import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useState } from "react";
import SignupContainer from "../../components/Register/SignupContainer";
import { LOGIN } from "../../constants/routeNames";
import register, { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

const Signup = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, data, loading },
  } = useContext(GlobalContext);
  const navigation = useNavigation();

  // console.log("authState", authState);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );


  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== "") {
      if (name === "password") {
        if (value.length < 8) {
          setErrors((prev) => {
            return { ...prev, [name]: "This field min 8 character" };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: "This field is require" };
      });
    }
  };

  const onSubmit = () => {
    //validation
    console.log("form", form);

    if (!form.userName) {
      setErrors((prev) => {
        return { ...prev, userName: "Please add a username" };
      });
    }

    if (!form.firstName) {
      setErrors((prev) => {
        return { ...prev, firstName: "Please add a first name" };
      });
    }

    if (!form.lastName) {
      setErrors((prev) => {
        return { ...prev, lastName: "Please add a last name" };
      });
    }

    if (!form.email) {
      setErrors((prev) => {
        return { ...prev, email: "Please add a email" };
      });
    }

    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: "Please add a password" };
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigation.navigate(LOGIN, {data: response});
      })
    }
  };

  return (
    <SignupContainer
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      data={data}
      loading={loading}
    />
  );
};

export default Signup;
