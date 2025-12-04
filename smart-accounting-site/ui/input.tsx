import React from "react";
import { TextInput, StyleSheet, ViewStyle, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  style?: ViewStyle;
}

function Input({
  style,
  placeholder,
  ...props
}: InputProps) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="#999"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#333",
    backgroundColor: "#fff",
    marginBottom: 8,
  },
});

export { Input };
