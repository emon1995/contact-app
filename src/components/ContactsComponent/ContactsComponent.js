import { Modal, Text, View } from "react-native";
import AppModal from "../common/AppModal/AppModal";
import CustomButton from "../common/CustomButton/index";

const ContactsComponent = ({ modalVisible, setModalVisible }) => {
  return (
    <View>
      <AppModal
        modalBody={<View><Text>Hello from the modal</Text></View>}
        modalFooter={<></>}
        title="My Profile!"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <CustomButton
        title="Open Modal"
        secondary
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default ContactsComponent;
