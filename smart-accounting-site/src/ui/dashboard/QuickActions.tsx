import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../ui/theme';

export default function QuickActions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>
      <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.green }]}>
        <MaterialIcons name="add" size={18} color="#fff" />
        <Text style={styles.btnText}>  Add Transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.blue }]}>
        <MaterialIcons name="person-add" size={18} color="#fff" />
        <Text style={styles.btnText}>  New Client</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#7C3AED' }]}>
        <MaterialIcons name="bar-chart" size={18} color="#fff" />
        <Text style={styles.btnText}>  Generate Report</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', borderRadius: 12, padding: 12, borderWidth: 1, borderColor: '#f0f0f0', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 },
  title: { fontWeight: '800', marginBottom: 8 },
  btn: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 10, marginTop: 8 },
  btnText: { color: '#fff', fontWeight: '700' }
});
