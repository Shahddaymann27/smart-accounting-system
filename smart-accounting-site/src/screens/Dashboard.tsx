import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Layout from '../ui/Layout';
import StatCard from '../ui/dashboard/StatCard';
import ChartContainer from '../ui/dashboard/ChartContainer';
import QuickActions from '../ui/dashboard/QuickActions';

export default function Dashboard() {
  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.title}>Dashboard Overview</Text>
            <Text style={styles.subtitle}>Welcome back! Here's what's happening with your business today.</Text>
          </View>
          <View style={styles.profileRow}>
            <View style={styles.avatar}>
              <Text style={{ color: '#fff', fontWeight: '800' }}>JD</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: '800' }}>John Doe</Text>
              <Text style={{ color: '#666' }}>Admin</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <StatCard title="Total Revenue" value="$328,000" trend="+12.5%" accent="#16A34A" icon="attach-money" />
          <StatCard title="Total Expenses" value="$214,000" trend="+8.2%" trendUp={true} accent="#F97316" icon="payments" />
          <StatCard title="Net Profit" value="$114,000" trend="+23.1%" accent="#0EA5E9" icon="trending-up" />
          <StatCard title="Active Clients" value="145" trend="+5.4%" accent="#7C3AED" icon="groups" />
          <StatCard title="Documents" value="1,247" trend="+18.2%" accent="#EC4899" icon="description" />
          <StatCard title="Profit Margin" value="34.8%" trend="+2.3%" accent="#4F46E5" icon="pie-chart" />
        </View>

        <View style={styles.chartsRow}>
          <View style={{ flex: 2, marginRight: 12 }}>
            <ChartContainer title="Revenue vs Expenses" subtitle="Jan - Jun">
              <View style={styles.chartPlaceholder}>
                <Text style={{ color: '#888' }}>Area chart placeholder (Revenue vs Expenses)</Text>
              </View>
            </ChartContainer>

            <View style={{ height: 12 }} />

            <ChartContainer title="Monthly Transactions">
              <View style={styles.chartPlaceholder}>
                <Text style={{ color: '#888' }}>Bar chart placeholder</Text>
              </View>
            </ChartContainer>
          </View>

          <View style={{ flex: 1 }}>
            <ChartContainer title="Transaction Types">
              <View style={styles.chartPlaceholder}>
                <Text style={{ color: '#888' }}>Pie chart placeholder</Text>
              </View>
            </ChartContainer>

            <View style={{ height: 12 }} />

            <ChartContainer title="Client Distribution">
              <View style={styles.chartPlaceholder}>
                <Text style={{ color: '#888' }}>Doughnut chart placeholder</Text>
              </View>
            </ChartContainer>

            <View style={{ height: 12 }} />

            <QuickActions />

            <View style={{ height: 12 }} />

            <ChartContainer title="Upcoming Events">
              <View style={{ width: '100%' }}>
                <View style={styles.eventItem}><Text style={styles.eventTitle}>Client Meeting</Text><Text style={styles.eventDate}>Dec 24</Text></View>
                <View style={styles.eventItem}><Text style={styles.eventTitle}>Tax Filing Deadline</Text><Text style={styles.eventDate}>Jan 15</Text></View>
                <View style={styles.eventItem}><Text style={styles.eventTitle}>Quarterly Report</Text><Text style={styles.eventDate}>Feb 02</Text></View>
              </View>
            </ChartContainer>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  page: { paddingBottom: 40 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  title: { fontSize: 28, fontWeight: '900' },
  subtitle: { color: '#666' },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 48, height: 48, borderRadius: 12, backgroundColor: '#0b61ff', alignItems: 'center', justifyContent: 'center' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 18 },
  chartPlaceholder: { width: '100%', height: 180, borderRadius: 8, backgroundColor: '#FBFBFB', borderWidth: 1, borderColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center' },
  chartsRow: { flexDirection: 'row', gap: 12 },
  eventItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  eventTitle: { fontWeight: '700' },
  eventDate: { color: '#666' }
});
