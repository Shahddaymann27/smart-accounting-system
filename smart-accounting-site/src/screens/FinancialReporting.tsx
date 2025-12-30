import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFadeIn } from '../../ui/animations';
import { Colors, Fonts } from '../../ui/theme';

const TABS = [
  { id: 'overview', label: 'Overview', icon: 'chart-line' },
  { id: 'clients', label: 'Clients', icon: 'account-multiple' },
  { id: 'documents', label: 'Documents', icon: 'file-document-multiple' },
  { id: 'reports', label: 'Reports', icon: 'file-chart' },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const REVENUE_DATA = [45000, 50000, 48000, 60000, 55000, 52000, 65000, 72000, 68000, 75000, 72000, 78000];
const EXPENSES_DATA = [28000, 29000, 27000, 32000, 30000, 31000, 35000, 40000, 38000, 42000, 40000, 45000];
const PROFIT_DATA = [18000, 20500, 19500, 26000, 24000, 22000, 28500, 31000, 29000, 32000, 31000, 33000];

export default function FinancialReporting() {
  const [activeTab, setActiveTab] = useState('overview');
  const headerAnim = useFadeIn(500, 80);
  const statsAnim = useFadeIn(600, 150);
  const chartAnim = useFadeIn(700, 250);

  const getTrendColor = (value: number) => {
    return value > 0 ? '#27AE60' : '#E74C3C';
  };

  const getTrendIcon = (value: number) => {
    return value > 0 ? 'trending-up' : 'trending-down';
  };

  const maxRevenue = Math.max(...REVENUE_DATA);
  const maxExpenses = Math.max(...EXPENSES_DATA);
  const chartMax = Math.max(maxRevenue, maxExpenses);

  const maxProfit = Math.max(...PROFIT_DATA);
  const minProfit = Math.min(...PROFIT_DATA);
  const profitRange = maxProfit - minProfit;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Animated.View style={[styles.header, headerAnim.style as any]}>
        <View style={styles.headerTop}>
          <View style={styles.logoSection}>
            <View style={styles.logoBg}>
              <Text style={styles.logoText}>N</Text>
            </View>
            <Text style={styles.headerTitle}>Nilotaxes Dashboard</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, activeTab === tab.id && styles.activeTab]}
              onPress={() => setActiveTab(tab.id)}
            >
              <MaterialIcons
                name={tab.icon as any}
                size={18}
                color={activeTab === tab.id ? Colors.burgundy : Colors.muted}
              />
              <Text style={[styles.tabLabel, activeTab === tab.id && styles.activeTabLabel]}>
                {tab.label}
              </Text>
              {activeTab === tab.id && <View style={styles.tabUnderline} />}
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      {/* Overview Content */}
      {activeTab === 'overview' && (
        <>
          {/* Stats Cards */}
          <Animated.View style={[styles.statsSection, statsAnim.style as any]}>
            <View style={styles.statsGrid}>
              {/* Total Revenue */}
              <View style={styles.statCard}>
                <Text style={styles.statLabel}>Total Revenue</Text>
                <Text style={styles.statValue}>€774K</Text>
                <View style={styles.statTrend}>
                  <MaterialIcons name={getTrendIcon(12.5)} size={16} color={getTrendColor(12.5)} />
                  <Text style={[styles.trendText, { color: getTrendColor(12.5) }]}>+12.5%</Text>
                </View>
              </View>

              {/* Total Expenses */}
              <View style={[styles.statCard, { borderLeftColor: '#E74C3C' }]}>
                <Text style={styles.statLabel}>Total Expenses</Text>
                <Text style={[styles.statValue, { color: '#E74C3C' }]}>€445K</Text>
                <View style={styles.statTrend}>
                  <MaterialIcons name={getTrendIcon(8.3)} size={16} color={getTrendColor(8.3)} />
                  <Text style={[styles.trendText, { color: getTrendColor(8.3) }]}>+8.3%</Text>
                </View>
              </View>

              {/* Net Profit */}
              <View style={[styles.statCard, { borderLeftColor: '#27AE60' }]}>
                <Text style={styles.statLabel}>Net Profit</Text>
                <Text style={[styles.statValue, { color: '#27AE60' }]}>€329K</Text>
                <View style={styles.statTrend}>
                  <MaterialIcons name={getTrendIcon(18.7)} size={16} color={getTrendColor(18.7)} />
                  <Text style={[styles.trendText, { color: getTrendColor(18.7) }]}>+18.7%</Text>
                </View>
              </View>
            </View>
          </Animated.View>

          {/* Revenue vs Expenses Chart */}
          <Animated.View style={[styles.chartSection, chartAnim.style as any]}>
            <View style={styles.chartHeader}>
              <Text style={styles.chartTitle}>Revenue vs Expenses</Text>
              <TouchableOpacity style={styles.exportBtn}>
                <MaterialCommunityIcons name="download" size={18} color={Colors.burgundy} />
                <Text style={styles.exportText}>Export</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.chartContainer}>
              <View style={styles.yAxis}>
                <Text style={styles.yAxisLabel}>100000</Text>
                <Text style={styles.yAxisLabel}>75000</Text>
                <Text style={styles.yAxisLabel}>50000</Text>
                <Text style={styles.yAxisLabel}>25000</Text>
                <Text style={styles.yAxisLabel}>0</Text>
              </View>

              <View style={styles.barsContainer}>
                {MONTHS.map((month, idx) => {
                  const revenueHeight = (REVENUE_DATA[idx] / chartMax) * 100;
                  const expensesHeight = (EXPENSES_DATA[idx] / chartMax) * 100;
                  const anim = useFadeIn(400, 300 + idx * 40);
                  
                  return (
                    <Animated.View key={idx} style={[styles.barGroup, anim.style as any]}>
                      <View style={styles.barWrapper}>
                        <View
                          style={[
                            styles.bar,
                            {
                              height: `${revenueHeight}%`,
                              backgroundColor: Colors.burgundy,
                            },
                          ]}
                        />
                        <View
                          style={[
                            styles.bar,
                            {
                              height: `${expensesHeight}%`,
                              backgroundColor: '#9370DB',
                            },
                          ]}
                        />
                      </View>
                      <Text style={styles.monthLabel}>{month}</Text>
                    </Animated.View>
                  );
                })}
              </View>
            </View>

            <View style={styles.chartLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: Colors.burgundy }]} />
                <Text style={styles.legendLabel}>Revenue</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#9370DB' }]} />
                <Text style={styles.legendLabel}>Expenses</Text>
              </View>
            </View>

            <View style={styles.tooltipBox}>
              <Text style={styles.tooltipLabel}>May</Text>
              <Text style={styles.tooltipData}>
                <Text style={{ color: '#9370DB' }}>expenses : 30000</Text>
              </Text>
              <Text style={styles.tooltipData}>
                <Text style={{ color: Colors.burgundy }}>revenue : 55000</Text>
              </Text>
            </View>
          </Animated.View>

          {/* Profit Trend Chart */}
          <Animated.View style={[styles.chartSection, useFadeIn(700, 350).style as any]}>
            <View style={styles.chartHeader}>
              <Text style={styles.chartTitle}>Profit Trend</Text>
              <View style={styles.trendIndicator}>
                <MaterialIcons name="trending-up" size={18} color="#27AE60" />
                <Text style={styles.trendIndicatorText}>+18.7%</Text>
              </View>
            </View>

            <View style={styles.lineChartContainer}>
              <View style={styles.yAxis}>
                <Text style={styles.yAxisLabel}>36K</Text>
                <Text style={styles.yAxisLabel}>27K</Text>
                <Text style={styles.yAxisLabel}>18K</Text>
              </View>

              <View style={styles.lineChartArea}>
                {/* Grid Lines Background */}
                <View style={styles.gridContainer}>
                  <View style={styles.gridLine} />
                  <View style={styles.gridLine} />
                  <View style={styles.gridLine} />
                </View>

                {/* Line Chart Plot with connecting lines between points */}
                <View style={styles.plotArea}>
                  {PROFIT_DATA.map((profit, idx) => {
                    const heightPercent = profitRange === 0 ? 50 : ((profit - minProfit) / profitRange) * 100;
                    const nextProfit = idx < PROFIT_DATA.length - 1 ? PROFIT_DATA[idx + 1] : null;
                    const nextHeightPercent = nextProfit ? ((nextProfit - minProfit) / profitRange) * 100 : 0;
                    
                    let lineAngle = 0;
                    let lineHeight = 0;
                    let isAscending = true;
                    
                    if (nextProfit) {
                      lineHeight = Math.abs(nextHeightPercent - heightPercent);
                      isAscending = nextHeightPercent > heightPercent;
                    }

                    const anim = useFadeIn(500, 400 + idx * 50);

                    return (
                      <View key={idx} style={styles.chartPoint}>
                        {/* Connecting line to next point */}
                        {nextProfit && (
                          <Animated.View
                            style={[
                              styles.connectingLine,
                              {
                                height: lineHeight,
                                transform: isAscending ? [{ rotateZ: '45deg' }] : [{ rotateZ: '-45deg' }],
                              },
                              anim.style as any,
                            ]}
                          />
                        )}
                        
                        {/* Data Point */}
                        <Animated.View
                          style={[
                            styles.dataPoint,
                            {
                              bottom: `${heightPercent}%`,
                            },
                            anim.style as any,
                          ]}
                        />
                      </View>
                    );
                  })}
                </View>

                {/* Month Labels */}
                <View style={styles.xAxisContainer}>
                  {MONTHS.map((month, idx) => (
                    <Text key={idx} style={styles.xAxisLabel}>{month}</Text>
                  ))}
                </View>
              </View>
            </View>
          </Animated.View>
        </>
      )}

      {/* Placeholder for other tabs */}
      {activeTab !== 'overview' && (
        <View style={styles.placeholderContent}>
          <MaterialCommunityIcons name="file-document-outline" size={64} color={Colors.border} />
          <Text style={styles.placeholderText}>{TABS.find(t => t.id === activeTab)?.label} coming soon...</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.ivory, paddingBottom: 40 },

  header: { backgroundColor: Colors.ivory, paddingHorizontal: 28, paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: Colors.border },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  logoSection: { flexDirection: 'row', alignItems: 'center' },
  logoBg: { width: 40, height: 40, borderRadius: 8, backgroundColor: Colors.burgundy, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  logoText: { color: '#fff', fontWeight: '800', fontSize: 18 },
  headerTitle: { fontSize: 24, fontWeight: '700', color: Colors.burgundy, fontFamily: Fonts.heading },

  tabsContainer: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: Colors.border },
  tab: { paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', marginRight: 4 },
  activeTab: {},
  tabLabel: { marginLeft: 6, fontSize: 13, color: Colors.muted, fontWeight: '500' },
  activeTabLabel: { color: Colors.burgundy, fontWeight: '600' },
  tabUnderline: { position: 'absolute', bottom: -1, width: '100%', height: 2, backgroundColor: Colors.burgundy },

  statsSection: { paddingHorizontal: 28, paddingVertical: 20 },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', gap: 14 },
  statCard: { flex: 1, backgroundColor: Colors.card, borderRadius: 12, padding: 18, borderLeftWidth: 4, borderLeftColor: Colors.burgundy, borderWidth: 1, borderColor: Colors.border, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  statLabel: { fontSize: 12, color: Colors.muted, fontWeight: '500', marginBottom: 8 },
  statValue: { fontSize: 28, fontWeight: '700', color: Colors.burgundy, marginBottom: 10 },
  statTrend: { flexDirection: 'row', alignItems: 'center' },
  trendText: { fontSize: 12, fontWeight: '600', marginLeft: 4 },

  chartSection: { paddingHorizontal: 28, paddingVertical: 20 },
  chartHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  chartTitle: { fontSize: 18, fontWeight: '700', color: Colors.burgundy, fontFamily: Fonts.heading },
  exportBtn: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, borderWidth: 1, borderColor: Colors.border },
  exportText: { fontSize: 12, color: Colors.burgundy, fontWeight: '600', marginLeft: 4 },
  trendIndicator: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 6, backgroundColor: 'rgba(39, 174, 96, 0.1)', borderRadius: 6 },
  trendIndicatorText: { fontSize: 12, color: '#27AE60', fontWeight: '600', marginLeft: 4 },

  chartContainer: { flexDirection: 'row', height: 280, marginBottom: 16, backgroundColor: Colors.card, borderRadius: 12, padding: 16, borderWidth: 1, borderColor: Colors.border },
  yAxis: { justifyContent: 'space-between', marginRight: 12 },
  yAxisLabel: { fontSize: 10, color: Colors.muted, fontWeight: '500' },
  barsContainer: { flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around' },
  barGroup: { flex: 1, alignItems: 'center' },
  barWrapper: { flexDirection: 'row', height: '90%', gap: 3, alignItems: 'flex-end' },
  bar: { flex: 1, borderRadius: 2 },
  monthLabel: { fontSize: 10, color: Colors.muted, marginTop: 6, fontWeight: '500' },
  chartLegend: { flexDirection: 'row', justifyContent: 'center', gap: 20, marginBottom: 12 },
  legendItem: { flexDirection: 'row', alignItems: 'center' },
  legendDot: { width: 10, height: 10, borderRadius: 2, marginRight: 6 },
  legendLabel: { fontSize: 12, color: Colors.muted, fontWeight: '500' },

  tooltipBox: { backgroundColor: 'rgba(139, 0, 0, 0.08)', borderRadius: 8, padding: 12, borderLeftWidth: 3, borderLeftColor: Colors.burgundy },
  tooltipLabel: { fontSize: 12, fontWeight: '700', color: Colors.burgundy, marginBottom: 4 },
  tooltipData: { fontSize: 11, color: Colors.muted, fontWeight: '500', marginBottom: 2 },

  lineChartContainer: { flexDirection: 'row', height: 280, marginBottom: 16, backgroundColor: Colors.card, borderRadius: 12, padding: 16, borderWidth: 1, borderColor: Colors.border },
  lineChartArea: { flex: 1, marginLeft: 12, position: 'relative' },
  gridContainer: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 40, height: '85%', justifyContent: 'space-between' },
  gridLine: { borderTopWidth: 1, borderTopColor: Colors.border, flex: 1 },
  plotArea: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 40, height: '85%', width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', zIndex: 10 },
  chartPoint: { flex: 1, alignItems: 'center', justifyContent: 'flex-end', position: 'relative' },
  connectingLine: { position: 'absolute', width: 2, backgroundColor: '#27AE60', opacity: 0.6, zIndex: 5 },
  dataPoint: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#27AE60', borderWidth: 2, borderColor: Colors.ivory, position: 'absolute', shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 3, elevation: 4 },
  xAxisContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  xAxisLabel: { fontSize: 10, color: Colors.muted, fontWeight: '500' },
  lineConnector: { display: 'none' },
  lineSegment: { display: 'none' },

  placeholderContent: { alignItems: 'center', justifyContent: 'center', paddingVertical: 80 },
  placeholderText: { fontSize: 16, color: Colors.muted, marginTop: 16 },
});
