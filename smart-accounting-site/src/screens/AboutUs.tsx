import React from 'react';
import { View, Text, ScrollView, StyleSheet, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFadeIn } from '../../ui/animations';
import { Colors, Fonts } from '../../ui/theme';

const SERVICES = [
  { icon: 'shield-check', title: 'Reliability', desc: 'Trusted partner for your growth' },
  { icon: 'check-circle-outline', title: 'Accuracy', desc: 'Meticulous attention to every detail' },
  { icon: 'clock-outline', title: 'Fast Delivery', desc: 'Guaranteed deadline compliance' },
  { icon: 'account-group-outline', title: 'Professional Support', desc: 'Expert team always at your service' },
];

export default function AboutUs() {
  const heroAnim = useFadeIn(500, 80);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.heroSection, heroAnim.style as any]}>
        <View style={styles.gradientBg}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="calculator" size={56} color="#fff" />
          </View>
          <Text style={styles.heroSubtext}>Professionalism & Experience</Text>
        </View>

        <View style={styles.contentRight}>
          <Text style={styles.heroTitle}>A team of professionals at your service</Text>
          <Text style={styles.heroDesc}>
            Nilotaxes is an accounting firm specialized in tax, accounting and business consulting. With years of experience in the field, we offer a complete and personalized service for every need.
          </Text>
          <Text style={styles.missionText}>
            Our mission is to provide innovative and reliable solutions, accompanying our clients towards success with professionalism and dedication.
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>15+</Text>
              <Text style={styles.statLabel}>Years Experience</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Happy Clients</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Professionalism</Text>
            </View>
          </View>
        </View>
      </Animated.View>

      <View style={styles.divider} />

      <Animated.View style={useFadeIn(500, 200).style as any}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <Text style={styles.sectionSubtitle}>Professional solutions for every tax and accounting need</Text>

        <View style={styles.servicesGrid}>
          {SERVICES.map((s, i) => {
            const anim = useFadeIn(500, 300 + i * 100);
            return (
              <Animated.View key={i} style={[styles.serviceCard, anim.style as any]}>
                <View style={styles.serviceIcon}>
                  <MaterialCommunityIcons name={s.icon as any} size={28} color={Colors.burgundy} />
                </View>
                <Text style={styles.serviceTitle}>{s.title}</Text>
                <Text style={styles.serviceDesc}>{s.desc}</Text>
              </Animated.View>
            );
          })}
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.ivory },
  heroSection: { flexDirection: 'row', alignItems: 'flex-start', padding: 28, backgroundColor: Colors.ivory },
  gradientBg: { width: '40%', aspectRatio: 1.1, backgroundColor: '#8B0000', borderRadius: 16, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  iconContainer: { width: 88, height: 88, borderRadius: 16, backgroundColor: 'rgba(255, 255, 255, 0.15)', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  heroSubtext: { color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', fontWeight: '500' },
  contentRight: { flex: 1, marginLeft: 28 },
  heroTitle: { fontSize: 26, color: Colors.burgundy, fontFamily: Fonts.heading, fontWeight: '700', marginBottom: 12 },
  heroDesc: { color: Colors.muted, lineHeight: 22, marginBottom: 14, fontSize: 14 },
  missionText: { color: Colors.muted, lineHeight: 22, marginBottom: 20, fontStyle: 'italic' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statCard: { alignItems: 'center' },
  statNumber: { fontSize: 24, color: Colors.burgundy, fontWeight: '700' },
  statLabel: { fontSize: 12, color: Colors.muted, marginTop: 4 },
  divider: { height: 1, backgroundColor: Colors.border, marginHorizontal: 28, marginVertical: 28 },
  sectionTitle: { fontSize: 28, textAlign: 'center', color: Colors.burgundy, fontFamily: Fonts.heading, marginBottom: 6 },
  sectionSubtitle: { fontSize: 14, textAlign: 'center', color: Colors.muted, marginBottom: 20 },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 28, paddingBottom: 28, justifyContent: 'space-between' },
  serviceCard: { width: '48%', backgroundColor: Colors.card, borderRadius: 12, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: Colors.border, alignItems: 'center' },
  serviceIcon: { width: 56, height: 56, borderRadius: 28, backgroundColor: Colors.subtle, borderWidth: 1, borderColor: Colors.gold, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  serviceTitle: { color: Colors.burgundy, fontWeight: '700', fontSize: 15, marginBottom: 6 },
  serviceDesc: { color: Colors.muted, fontSize: 13, textAlign: 'center', lineHeight: 18 },
});
