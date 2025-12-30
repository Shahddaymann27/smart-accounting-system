import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../ui/theme';

type Props = {
  title: string;
  value: string;
  trend: string; // e.g. '+12.5%'
  trendUp?: boolean;
  accent?: string;
  icon?: string;
};

export default function StatCard({ title, value, trend, trendUp = true, accent = Colors.gold, icon = 'analytics' }: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.accent, { backgroundColor: accent }]} />
      <View style={styles.content}>
        <View style={styles.rowTop}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.iconBox}>
            <MaterialIcons name={icon as any} size={18} color="#fff" />
          </View>
        </View>
        <Text style={styles.value}>{value}</Text>
        <Text style={[styles.trend, { color: trendUp ? Colors.green : Colors.danger }]}>{trend}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    minHeight: 110,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  accent: { height: 6, width: '100%' },
  content: { padding: 14 },
  rowTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: '#666', fontSize: 12, fontWeight: '700' },
  iconBox: { width: 36, height: 36, borderRadius: 8, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center' },
  value: { fontSize: 20, fontWeight: '800', color: '#111', marginTop: 8 },
  trend: { marginTop: 6, fontSize: 12, fontWeight: '700' },
});
