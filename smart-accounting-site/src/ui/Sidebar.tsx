import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../ui/theme';

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { key: 'clients', label: 'Clients', icon: 'groups' },
  { key: 'transactions', label: 'Transactions', icon: 'swap-horiz' },
  { key: 'documents', label: 'Documents', icon: 'description' },
  { key: 'reports', label: 'Reports', icon: 'bar-chart' },
  { key: 'tax', label: 'Tax Consulting', icon: 'account-balance' },
];

export default function Sidebar({ active = 'dashboard' }: { active?: string }) {
  return (
    <View style={styles.sidebar}>
      <View style={styles.brandRow}>
        <Text style={styles.brand}>nilotaxes</Text>
      </View>

      <View style={styles.menu}>
        {items.map(i => (
          <TouchableOpacity key={i.key} style={[styles.menuItem, i.key === active ? styles.active : null]}>
            <MaterialIcons name={i.icon as any} size={18} color={i.key === active ? '#0b61ff' : '#555'} />
            <Text style={[styles.menuText, i.key === active ? { color: '#0b61ff' } : null]}>{i.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons name="settings" size={18} color="#555" />
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons name="logout" size={18} color="#555" />
          <Text style={styles.footerText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: { width: 260, backgroundColor: '#fff', padding: 18, justifyContent: 'space-between', height: '100%', borderRightWidth: 1, borderRightColor: '#eee' },
  brandRow: { marginBottom: 18 },
  brand: { fontSize: 20, fontWeight: '900', color: '#111' },
  menu: { flex: 1 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 8, borderRadius: 8 },
  menuText: { marginLeft: 10, color: '#444', fontWeight: '700' },
  active: { backgroundColor: '#E8F0FF' },
  footer: { marginTop: 12 },
  footerItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  footerText: { marginLeft: 10, color: '#666' }
});
