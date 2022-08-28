import { useState } from "react";;
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";


const Contacts = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
  );
};

export default Contacts;
