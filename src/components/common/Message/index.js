import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../../assets/theme/colors";
import styles from "./styles";

const Message = ({
  message,
  info,
  primary,
  danger,
  success,
  retry,
  retryFn,
  onDismiss,
}) => {
  const [userDismissed, setUserDismissed] = useState(false);

  const getBorderColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };

  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, { backgroundColor: getBorderColor() }]}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: colors.white,
              }}
            >
              {message}
            </Text>
            {retry && !typeof onDismiss === "function" && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}
                >
                  Retry
                </Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === "function" && (
              <TouchableOpacity
                onPress={() => {
                  setUserDismissed(true);
                  onDismiss();
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
