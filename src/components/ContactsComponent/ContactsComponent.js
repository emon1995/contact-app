import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../assets/theme/colors";
import AppModal from "../common/AppModal/AppModal";
import Icon from "../common/Icon/Icon";
import Message from "../common/Message/index";
import styles from "./styles";

const ContactsComponent = ({
  modalVisible,
  data,
  loading,
  error,
  setModalVisible,
}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
        <Message info message="No Contacts to show" />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const { contact_picture, first_name, last_name, phone_number } = item;
    return (
      <>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.item}>
            {contact_picture ? (
              <Image
                style={{ width: 45, height: 45, borderRadius: 100 }}
                source={{ uri: contact_picture }}
              />
            ) : (
              <View
                style={{ width: 45, height: 45, backgroundColor: colors.grey }}
              ></View>
            )}
            <View style={{ flexDirection: "row" }}>
              <Text>{first_name}</Text>
              <Text>{last_name}</Text>
            </View>
            <Text>{phone_number}</Text>
          </View>
          <Icon name="right" type="ant" />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View>
      <AppModal
        modalBody={
          <View>
            <Text>Hello from the modal</Text>
          </View>
        }
        modalFooter={<></>}
        title="My Profile!"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {loading && (
        <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {!loading && (
        <View style={{ paddingVertical: 20 }}>
          <FlatList
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            data={data}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{ height: 150 }}></View>}
          />
        </View>
      )}
    </View>
  );
};

export default ContactsComponent;
