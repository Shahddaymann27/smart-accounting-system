import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import AppRoutes from './src/AppRoutes';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <AppRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9F0' },
});
