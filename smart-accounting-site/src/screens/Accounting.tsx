import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFadeIn } from '../../ui/animations';
import { Colors, Fonts } from '../../ui/theme';

export default function Accounting() {
  const navigate = useNavigate();
  const heroAnim = useFadeIn(500, 80);
  const featureAnim = useFadeIn(600, 150);

  const features = [
    { icon: 'book-open-page-variant', title: 'Bookkeeping', desc: 'Daily ledger management' },
    { icon: 'cash-multiple', title: 'Payables & Receivables', desc: 'Invoice processing' },
    { icon: 'bank-check', title: 'Bank Reconciliation', desc: 'Monthly statements' },
    { icon: 'chart-box-outline', title: 'Financial Statements', desc: 'Analysis & reporting' },
  ];

  const pricingTiers = [
    { name: 'Small', revenue: '€500k', price: '€600', color: '#E8D5C4' },
    { name: 'Mid-Market', revenue: '€500k - €2M', price: '€1,200', color: '#D4AF37' },
    { name: 'Enterprise', revenue: '€2M+', price: '€2,500', color: '#8B0000' },
  ];

  const benefits = [
    '✓ Cloud-based software access',
    '✓ Real-time financial dashboard',
    '✓ Quarterly business reviews',
    '✓ Annual tax planning',
    '✓ Compliance & audit support',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Animated.View style={[styles.heroSection, heroAnim.style as any]}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Accounting Services</Text>
          <Text style={styles.heroSubtitle}>Reliable bookkeeping & financial management for growth</Text>
          <View style={styles.heroStats}>
            <View style={styles.heroStat}>
              <Text style={styles.heroStatNum}>1,000+</Text>
              <Text style={styles.heroStatLabel}>Companies Managed</Text>
            </View>
            <View style={styles.heroStat}>
              <Text style={styles.heroStatNum}>99.9%</Text>
              <Text style={styles.heroStatLabel}>Accuracy Rate</Text>
            </View>
          </View>
        </View>
        <View style={styles.heroBgShape} />
      </Animated.View>

      {/* Features Grid */}
      <Animated.View style={[styles.featuresSection, featureAnim.style as any]}>
        <Text style={styles.sectionTitle}>Core Services</Text>
        <View style={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <Animated.View
              key={idx}
              style={[
                styles.featureCard,
                useFadeIn(400, 300 + idx * 50).style as any,
              ]}
            >
              <View style={[styles.featureIcon, { backgroundColor: Colors.background }]}>
                <MaterialCommunityIcons name={feature.icon as any} size={28} color={Colors.burgundy} />
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDesc}>{feature.desc}</Text>
            </Animated.View>
          ))}
        </View>
      </Animated.View>

      {/* Pricing Comparison */}
      <Animated.View style={[styles.pricingSection, useFadeIn(700, 350).style as any]}>
        <Text style={styles.sectionTitle}>Pricing By Company Size</Text>
        <View style={styles.pricingCards}>
          {pricingTiers.map((tier, idx) => (
            <View key={idx} style={[styles.pricingCard, { borderLeftColor: tier.color, borderLeftWidth: 4 }]}>
              <Text style={styles.tierName}>{tier.name}</Text>
              <Text style={styles.tierRevenue}>{tier.revenue}</Text>
              <View style={styles.pricingDivider} />
              <Text style={styles.tierPrice}>{tier.price}</Text>
              <Text style={styles.tierPricePer}>/month</Text>
            </View>
          ))}
        </View>
      </Animated.View>

      {/* Startup Special */}
      <Animated.View style={[styles.specialSection, useFadeIn(750, 400).style as any]}>
        <TouchableOpacity style={styles.specialBox} activeOpacity={0.85} onPress={() => navigate('/login')}>
          <View style={styles.specialBadge}>
            <MaterialIcons name="local-offer" size={16} color="#fff" />
            <Text style={styles.specialBadgeText}>STARTUP SPECIAL</Text>
          </View>
          <Text style={styles.specialTitle}>€400/month</Text>
          <Text style={styles.specialDesc}>For first 12 months of operation</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Benefits Section */}
      <Animated.View style={[styles.benefitsSection, useFadeIn(800, 450).style as any]}>
        <Text style={styles.sectionTitle}>What's Included</Text>
        <View style={styles.benefitsList}>
          {benefits.map((benefit, idx) => (
            <Animated.View
              key={idx}
              style={[
                styles.benefitItem,
                useFadeIn(300, 500 + idx * 40).style as any,
              ]}
            >
              <MaterialIcons name="check-circle" size={20} color={Colors.burgundy} />
              <Text style={styles.benefitText}>{benefit}</Text>
            </Animated.View>
          ))}
        </View>
      </Animated.View>

      {/* CTA Section */}
      <Animated.View style={[styles.ctaSection, useFadeIn(900, 550).style as any]}>
        <View style={styles.ctaBox}>
          <Text style={styles.ctaTitle}>Ready to Streamline Your Accounting?</Text>
          <TouchableOpacity style={styles.cta} onPress={() => navigate('/login')} activeOpacity={0.85}>
            <Text style={styles.ctaText}>Get Started Today</Text>
            <MaterialIcons name="arrow-forward" size={18} color="#fff" />
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
  heroSubtitle: { fontSize: 15, color: Colors.muted, marginBottom: 24, lineHeight: 24 },
  heroStats: { flexDirection: 'row', gap: 32 },
  heroStat: { flex: 1 },
  heroStatNum: { fontSize: 24, fontWeight: '800', color: Colors.burgundy, marginBottom: 4 },
  heroStatLabel: { fontSize: 12, color: Colors.muted, fontWeight: '600' },
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

  featuresSection: { paddingHorizontal: 28, paddingVertical: 32 },
  sectionTitle: { fontSize: 24, fontWeight: '800', color: Colors.burgundy, marginBottom: 20, fontFamily: Fonts.heading },
  featuresGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between' },
  featureCard: {
    width: '48%',
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  featureTitle: { fontSize: 13, fontWeight: '700', color: Colors.burgundy, marginBottom: 4 },
  featureDesc: { fontSize: 11, color: Colors.muted, lineHeight: 16 },

  pricingSection: { paddingHorizontal: 28, paddingVertical: 32 },
  pricingCards: { flexDirection: 'row', gap: 12 },
  pricingCard: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tierName: { fontSize: 13, fontWeight: '700', color: Colors.burgundy, marginBottom: 4 },
  tierRevenue: { fontSize: 11, color: Colors.muted, marginBottom: 10 },
  pricingDivider: { height: 1, backgroundColor: Colors.border, marginVertical: 10 },
  tierPrice: { fontSize: 24, fontWeight: '800', color: Colors.burgundy, marginBottom: 2 },
  tierPricePer: { fontSize: 10, color: Colors.muted, fontWeight: '600' },

  specialSection: { paddingHorizontal: 28, paddingVertical: 16 },
  specialBox: {
    backgroundColor: '#C19A6B',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  specialBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.burgundy,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
  },
  specialBadgeText: { fontSize: 10, fontWeight: '700', color: '#fff', letterSpacing: 0.5 },
  specialTitle: { fontSize: 24, fontWeight: '800', color: Colors.burgundy, marginBottom: 2 },
  specialDesc: { fontSize: 12, color: Colors.burgundy, fontWeight: '600' },

  benefitsSection: { paddingHorizontal: 28, paddingVertical: 32 },
  benefitsList: { gap: 12 },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Colors.card,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  benefitText: { flex: 1, fontSize: 13, color: Colors.burgundy, fontWeight: '500' },

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
  ctaTitle: { fontSize: 20, fontWeight: '800', color: '#fff', marginBottom: 16, fontFamily: Fonts.heading, textAlign: 'center' },
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
