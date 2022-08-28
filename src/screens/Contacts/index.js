import { useContext, useEffect, useState } from "react";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";

const Contacts = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading, error},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);
  
  console.log("dt", data);
  console.log("error", error);

  return (
    <ContactsComponent
      data={data}
      loading={loading}
      error={error}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default Contacts;
