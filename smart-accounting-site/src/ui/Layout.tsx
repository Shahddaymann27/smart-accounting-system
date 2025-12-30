import React from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.wrapper}>
      <Sidebar />
      <View style={styles.main}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', minHeight: '100%', backgroundColor: '#F8F9FA' },
  main: { flex: 1, padding: 20, overflow: 'scroll' },
});
