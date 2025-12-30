import React from "react";
import { useWindowDimensions, Platform } from "react-native";

// For React Native, always return true as it's mobile
export function useIsMobile(): boolean {
  const { width } = useWindowDimensions();
  
  // Check if the device width indicates it's a mobile device
  // or if it's iOS/Android platform
  return Platform.OS === "ios" || Platform.OS === "android" || width < 768;
}
