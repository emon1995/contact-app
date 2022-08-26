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

const CustomButton = ({
  title,
  primary,
  secondary,
  danger,
  loading,
  disabled,
  onPress,
}) => {
  const [focused, setFocused] = useState(false);

  const getBorderColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: getBorderColor() }]}
    >
      <View style={styles.loaderSection}>
        { loading && <ActivityIndicator color={primary? colors.secondary : colors.primary} />}
        {title && (
          <Text style={{ color: disabled ? "black" : colors.white, paddingLeft: loading ? 5 : 0 }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
