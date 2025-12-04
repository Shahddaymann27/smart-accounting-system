import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: ViewStyle;
}

function Checkbox({
  checked = false,
  onCheckedChange,
  disabled = false,
  style,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handlePress = () => {
    if (!disabled) {
      const newValue = !isChecked;
      setIsChecked(newValue);
      onCheckedChange?.(newValue);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        styles.checkbox,
        isChecked && styles.checkboxChecked,
        disabled && styles.checkboxDisabled,
        style,
      ]}
    >
      {isChecked && (
        <MaterialIcons name="check" size={16} color="#fff" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#8B0000",
    borderColor: "#8B0000",
  },
  checkboxDisabled: {
    opacity: 0.5,
  },
});

export { Checkbox };
