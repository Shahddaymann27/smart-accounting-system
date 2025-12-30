import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ViewStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface AccordionContextType {
  expandedItems: string[];
  toggleItem: (id: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

function Accordion({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <AccordionContext.Provider value={{ expandedItems, toggleItem }}>
      <View style={styles.accordion}>{children}</View>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within Accordion");

  return (
    <View style={styles.item}>
      {children}
    </View>
  );
}

function AccordionTrigger({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");

  const isExpanded = context.expandedItems.includes(id);

  return (
    <TouchableOpacity
      style={styles.trigger}
      onPress={() => context.toggleItem(id)}
      activeOpacity={0.7}
    >
      <Text style={styles.triggerText}>{children}</Text>
      <MaterialIcons
        name={isExpanded ? "expand-less" : "expand-more"}
        size={24}
        color="#8B0000"
      />
    </TouchableOpacity>
  );
}

function AccordionContent({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within Accordion");

  const isExpanded = context.expandedItems.includes(id);

  return isExpanded ? (
    <View style={styles.content}>
      <Text style={styles.contentText}>{children}</Text>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  accordion: {
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  item: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
  },
  trigger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  triggerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#f9f9f9",
  },
  contentText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
