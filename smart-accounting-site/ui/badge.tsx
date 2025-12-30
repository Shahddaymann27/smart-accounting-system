import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline";
  children: React.ReactNode;
  style?: ViewStyle;
}

function Badge({
  variant = "default",
  children,
  style,
}: BadgeProps) {
  return (
    <View
      style={[
        styles.badge,
        styles[`badge_${variant}`],
        style,
      ]}
    >
      <Text style={[styles.badgeText, styles[`text_${variant}`]]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },
  badge_default: {
    backgroundColor: "#8B0000",
    borderColor: "#8B0000",
    borderWidth: 1,
  },
  badge_secondary: {
    backgroundColor: "#e0e0e0",
    borderColor: "#bbb",
    borderWidth: 1,
  },
  badge_destructive: {
    backgroundColor: "#f44336",
    borderColor: "#f44336",
    borderWidth: 1,
  },
  badge_outline: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  text_default: {
    color: "#fff",
  },
  text_secondary: {
    color: "#333",
  },
  text_destructive: {
    color: "#fff",
  },
  text_outline: {
    color: "#333",
  },
});

export { Badge };
