import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFadeIn } from '../../ui/animations';
import { Colors, Fonts } from '../../ui/theme';

export default function TaxConsulting() {
  const navigate = useNavigate();
  const heroAnim = useFadeIn(500, 80);
  const featureAnim = useFadeIn(600, 150);
  const statsAnim = useFadeIn(700, 250);

  const services = [
    { icon: 'chart-line', title: 'Corporate Tax', desc: 'Income planning & optimization' },
    { icon: 'file-document', title: 'Personal Tax', desc: 'Return preparation & filing' },
    { icon: 'percent', title: 'VAT Compliance', desc: 'Value added tax advisory' },
    { icon: 'account-multiple', title: 'Payroll Tax', desc: 'Withholding management' },
  ];

  const savingsData = [
    { percent: 28, label: 'Avg Tax Savings' },
    { percent: 95, label: 'Client Satisfaction' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Animated.View style={[styles.heroSection, heroAnim.style as any]}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Tax Consulting</Text>
          <Text style={styles.heroSubtitle}>Strategic tax planning & optimization for maximum savings</Text>
          <View style={styles.heroFeatures}>
            <View style={styles.heroFeature}>
              <MaterialIcons name="verified-user" size={18} color="#C19A6B" />
              <Text style={styles.heroFeatureText}>Expert Advisors</Text>
            </View>
            <View style={styles.heroFeature}>
              <MaterialIcons name="trending-up" size={18} color="#C19A6B" />
              <Text style={styles.heroFeatureText}>Proven Results</Text>
            </View>
          </View>
        </View>
        <View style={styles.heroBgShape} />
      </Animated.View>

      {/* Services Grid */}
      <Animated.View style={[styles.servicesSection, featureAnim.style as any]}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.servicesGrid}>
          {services.map((service, idx) => (
            <Animated.View
              key={idx}
              style={[
                styles.serviceCard,
                useFadeIn(400, 300 + idx * 50).style as any,
              ]}
            >
              <View style={styles.serviceIcon}>
                <MaterialCommunityIcons name={service.icon as any} size={28} color={Colors.burgundy} />
              </View>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDesc}>{service.desc}</Text>
            </Animated.View>
          ))}
        </View>
      </Animated.View>

      {/* Stats Section */}
      <Animated.View style={[styles.statsSection, statsAnim.style as any]}>
        <Text style={styles.sectionTitle}>Results That Speak</Text>
        <View style={styles.statsRow}>
          {savingsData.map((stat, idx) => (
            <View key={idx} style={styles.statCard}>
              <Text style={styles.statPercent}>{stat.percent}%</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
          <View style={styles.statCard}>
            <Text style={styles.statPercent}>500+</Text>
            <Text style={styles.statLabel}>Happy Clients</Text>
          </View>
        </View>
      </Animated.View>

      {/* Pricing Section */}
      <Animated.View style={[styles.pricingSection, useFadeIn(700, 350).style as any]}>
        <Text style={styles.sectionTitle}>Pricing Plans</Text>
        <View style={styles.priceCards}>
          <View style={styles.priceCard}>
            <Text style={styles.priceBadge}>STARTER</Text>
            <Text style={styles.priceAmount}>€500</Text>
            <Text style={styles.priceDesc}>Per month</Text>
            <View style={styles.priceBullets}>
              <Text style={styles.priceBullet}>✓ Basic tax planning</Text>
              <Text style={styles.priceBullet}>✓ Quarterly reviews</Text>
              <Text style={styles.priceBullet}>✓ Email support</Text>
            </View>
          </View>

          <View style={[styles.priceCard, styles.priceCardPremium]}>
            <View style={styles.premiumBadge}>
              <Text style={styles.premiumBadgeText}>MOST POPULAR</Text>
            </View>
            <Text style={styles.priceAmount}>€1,500</Text>
            <Text style={styles.priceDesc}>Per month</Text>
            <View style={styles.priceBullets}>
              <Text style={styles.priceBullet}>✓ Advanced planning</Text>
              <Text style={styles.priceBullet}>✓ Monthly reviews</Text>
              <Text style={styles.priceBullet}>✓ Priority support</Text>
              <Text style={styles.priceBullet}>✓ International tax</Text>
            </View>
          </View>
        </View>
      </Animated.View>

      {/* CTA Section */}
      <Animated.View style={[styles.ctaSection, useFadeIn(800, 400).style as any]}>
        <View style={styles.ctaBox}>
          <MaterialIcons name="celebration" size={40} color="#C19A6B" />
          <Text style={styles.ctaTitle}>Free Initial Consultation</Text>
          <Text style={styles.ctaDesc}>30-minute session with our tax experts</Text>
          <TouchableOpacity style={styles.cta} onPress={() => navigate('/login')} activeOpacity={0.85}>
            <Text style={styles.ctaText}>Request Consultation</Text>
            <MaterialIcons name="arrow-forward" size={18} color="#3b3131ff" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.ivory, paddingBottom: 40 },

  heroSection: {
    paddingHorizontal: 28,
    paddingVertical: 40,
    backgroundColor: Colors.card,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: { position: 'relative', zIndex: 2 },
  heroTitle: { fontSize: 36, fontWeight: '800', color: Colors.burgundy, marginBottom: 8, fontFamily: Fonts.heading },
  heroSubtitle: { fontSize: 15, color: Colors.muted, marginBottom: 20, lineHeight: 24 },
  heroFeatures: { flexDirection: 'row', gap: 20 },
  heroFeature: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  heroFeatureText: { fontSize: 13, fontWeight: '600', color: Colors.burgundy },
  heroBgShape: {
    position: 'absolute',
    right: -50,
    top: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: Colors.background,
    opacity: 0.5,
  },

  servicesSection: { paddingHorizontal: 28, paddingVertical: 32 },
  sectionTitle: { fontSize: 24, fontWeight: '800', color: Colors.burgundy, marginBottom: 20, fontFamily: Fonts.heading },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between' },
  serviceCard: {
    width: '48%',
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  serviceTitle: { fontSize: 14, fontWeight: '700', color: Colors.burgundy, marginBottom: 6 },
  serviceDesc: { fontSize: 12, color: Colors.muted, lineHeight: 18 },

  statsSection: { paddingHorizontal: 28, paddingVertical: 32, backgroundColor: Colors.card, marginHorizontal: 28, borderRadius: 12, marginVertical: 20, borderWidth: 1, borderColor: Colors.border },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', gap: 12 },
  statCard: { flex: 1, alignItems: 'center', paddingVertical: 16 },
  statPercent: { fontSize: 28, fontWeight: '800', color: Colors.burgundy, marginBottom: 4 },
  statLabel: { fontSize: 11, color: Colors.muted, fontWeight: '600', textAlign: 'center' },

  pricingSection: { paddingHorizontal: 28, paddingVertical: 32 },
  priceCards: { gap: 16 },
  priceCard: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  priceCardPremium: { borderColor: Colors.burgundy, borderWidth: 2, position: 'relative' },
  premiumBadge: {
    position: 'absolute',
    top: -12,
    left: 20,
    backgroundColor: Colors.burgundy,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  premiumBadgeText: { fontSize: 10, fontWeight: '800', color: '#fff', letterSpacing: 1 },
  priceBadge: { fontSize: 11, fontWeight: '700', color: Colors.muted, letterSpacing: 1, marginBottom: 12 },
  priceAmount: { fontSize: 32, fontWeight: '800', color: Colors.burgundy, marginBottom: 4 },
  priceDesc: { fontSize: 12, color: Colors.muted, marginBottom: 16 },
  priceBullets: { gap: 10 },
  priceBullet: { fontSize: 12, color: Colors.muted, lineHeight: 18 },

  ctaSection: { paddingHorizontal: 28, paddingVertical: 32 },
  ctaBox: {
    backgroundColor: Colors.burgundy,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  ctaTitle: { fontSize: 22, fontWeight: '800', color: '#fff', marginTop: 12, marginBottom: 6, fontFamily: Fonts.heading },
  ctaDesc: { fontSize: 13, color: '#fff', marginBottom: 20, opacity: 0.95 },
  cta: {
    backgroundColor: '#C19A6B',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  ctaText: { fontSize: 14, fontWeight: '700', color: Colors.burgundy },
});
