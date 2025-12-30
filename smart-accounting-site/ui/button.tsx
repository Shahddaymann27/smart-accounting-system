import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps {
  onPress?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  children: React.ReactNode;
  style?: ViewStyle;
}

function Button({
  onPress,
  variant = "default",
  size = "default",
  disabled = false,
  children,
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        styles.button,
        styles[`variant_${variant}`],
        styles[`size_${size}`],
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${variant}`],
          disabled && styles.disabledText,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  variant_default: {
    backgroundColor: "#8B0000",
  },
  variant_destructive: {
    backgroundColor: "#f44336",
  },
  variant_outline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  variant_secondary: {
    backgroundColor: "#e0e0e0",
  },
  variant_ghost: {
    backgroundColor: "transparent",
  },
  variant_link: {
    backgroundColor: "transparent",
  },
  size_default: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  size_sm: {
    height: 32,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  size_lg: {
    height: 48,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  size_icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
  text_default: {
    color: "#fff",
  },
  text_destructive: {
    color: "#fff",
  },
  text_outline: {
    color: "#333",
  },
  text_secondary: {
    color: "#333",
  },
  text_ghost: {
    color: "#333",
  },
  text_link: {
    color: "#8B0000",
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: "#999",
  },
});

export { Button };
