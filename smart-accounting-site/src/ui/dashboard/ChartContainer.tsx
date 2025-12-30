import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../ui/theme';

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function ChartContainer({ title, subtitle, children }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 14, borderWidth: 1, borderColor: '#f0f0f0', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 },
  header: { marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '800', color: '#111' },
  subtitle: { fontSize: 12, color: '#666' },
  body: { minHeight: 160, alignItems: 'center', justifyContent: 'center' },
});
