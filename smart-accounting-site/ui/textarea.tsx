import React from "react";
import { TextInput, StyleSheet, ViewStyle } from "react-native";

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  numberOfLines?: number;
  style?: ViewStyle;
}

function Textarea({
  placeholder,
  value,
  onChangeText,
  numberOfLines = 4,
  style,
  ...props
}: TextareaProps) {
  return (
    <TextInput
      style={[styles.textarea, style]}
      placeholder={placeholder}
      placeholderTextColor="#999"
      value={value}
      onChangeText={onChangeText}
      multiline
      numberOfLines={numberOfLines}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  textarea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#333",
    backgroundColor: "#fff",
    textAlignVertical: "top",
    marginBottom: 8,
  },
});

export { Textarea };
