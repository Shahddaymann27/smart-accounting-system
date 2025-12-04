import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface AlertProps {
  variant?: "default" | "destructive";
  children: React.ReactNode;
}

function Alert({ variant = "default", children }: AlertProps) {
  return (
    <View
      style={[
        styles.alert,
        variant === "destructive" && styles.alertDestructive,
      ]}
    >
      {children}
    </View>
  );
}

function AlertTitle({ children }: { children: React.ReactNode }) {
  return <Text style={styles.alertTitle}>{children}</Text>;
}

function AlertDescription({ children }: { children: React.ReactNode }) {
  return <Text style={styles.alertDescription}>{children}</Text>;
}

const styles = StyleSheet.create({
  alert: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#f9f9f9",
    marginBottom: 16,
  },
  alertDestructive: {
    backgroundColor: "#ffebee",
    borderColor: "#f44336",
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  alertDescription: {
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
  },
});

export { Alert, AlertTitle, AlertDescription };
