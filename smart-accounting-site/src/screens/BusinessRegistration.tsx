import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFadeIn } from '../../ui/animations';
import { Colors, Fonts } from '../../ui/theme';

export default function BusinessRegistration() {
  const navigate = useNavigate();
  const heroAnim = useFadeIn(500, 80);
  const timelineAnim = useFadeIn(600, 150);

  const registrationTypes = [
    { name: 'S.r.l. (LLC)', days: '5-7 days', price: '€2,500 - €4,000', icon: 'briefcase' },
    { name: 'S.p.A. (Corp)', days: '10-15 days', price: '€5,000 - €8,000', icon: 'building' },
    { name: 'Ditta Ind.', days: '2-3 days', price: '€800 - €1,200', icon: 'account-tie' },
  ];

  const timelineSteps = [
    { step: 1, title: 'Consultation', desc: 'Assess your business needs', time: 'Day 1' },
    { step: 2, title: 'Documentation', desc: 'Prepare all necessary docs', time: 'Days 2-3' },
    { step: 3, title: 'Filing', desc: 'Submit to authorities', time: 'Days 4-5' },
    { step: 4, title: 'Approval', desc: 'Receive registration', time: 'Days 5-7' },
  ];

  const services = [
    { icon: 'file-document-multiple', title: 'Documentation', desc: 'Complete legal docs & bylaws' },
    { icon: 'bank', title: 'Bank Account', desc: 'Setup assistance & guidance' },
    { icon: 'shield-account', title: 'Tax Registration', desc: 'Partita IVA & VAT setup' },
    { icon: 'briefcase-check', title: 'Chamber of Commerce', desc: 'CCIAA registration' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Animated.View style={[styles.heroSection, heroAnim.style as any]}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Business Registration</Text>
          <Text style={styles.heroSubtitle}>Quick & hassle-free company setup with expert guidance</Text>
          <View style={styles.heroHighlight}>
            <MaterialIcons name="check" size={18} color="#C19A6B" />
            <Text style={styles.heroHighlightText}>All documentation & filing included</Text>
          </View>
        </View>
        <View style={styles.heroBgShape} />
      </Animated.View>

      {/* Registration Types Comparison */}
      <Animated.View style={[styles.typesSection, timelineAnim.style as any]}>
        <Text style={styles.sectionTitle}>Registration Types</Text>
        <View style={styles.typesGrid}>
          {registrationTypes.map((type, idx) => (
            <Animated.View
              key={idx}
              style={[
                styles.typeCard,
                useFadeIn(400, 300 + idx * 50).style as any,
              ]}
            >
              <View style={styles.typeIcon}>
                <MaterialCommunityIcons name={type.icon as any} size={32} color={Colors.burgundy} />
              </View>
              <Text style={styles.typeName}>{type.name}</Text>
              <View style={styles.typeDivider} />
              <View style={styles.typeInfo}>
                <View style={styles.typeInfoRow}>
                  <MaterialIcons name="schedule" size={14} color="#C19A6B" />
                  <Text style={styles.typeInfoText}>{type.days}</Text>
                </View>
                <View style={styles.typeInfoRow}>
                  <MaterialIcons name="attach-money" size={14} color="#C19A6B" />
                  <Text style={styles.typePrice}>{type.price}</Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </View>
      </Animated.View>

      {/* Timeline Section */}
      <Animated.View style={[styles.timelineSection, useFadeIn(700, 350).style as any]}>
        <Text style={styles.sectionTitle}>Our Process</Text>
        <View style={styles.timeline}>
          {timelineSteps.map((item, idx) => (
            <Animated.View
              key={idx}
              style={[
                styles.timelineItem,
                useFadeIn(400, 400 + idx * 60).style as any,
              ]}
            >
              <View style={styles.timelineMarker}>
                <View style={styles.timelineNumber}>
                  <Text style={styles.timelineNumberText}>{item.step}</Text>
                </View>
                {idx < timelineSteps.length - 1 && <View style={styles.timelineConnector} />}
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>{item.title}</Text>
                <Text style={styles.timelineDesc}>{item.desc}</Text>
                <Text style={styles.timelineTime}>{item.time}</Text>
              </View>
            </Animated.View>
          ))}
        </View>
      </Animated.View>

      {/* Services Grid */}
      <Animated.View style={[styles.servicesSection, useFadeIn(750, 450).style as any]}>
        <Text style={styles.sectionTitle}>What We Provide</Text>
        <View style={styles.servicesGrid}>
          {services.map((service, idx) => (
            <View key={idx} style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <MaterialCommunityIcons name={service.icon as any} size={28} color={Colors.burgundy} />
              </View>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDesc}>{service.desc}</Text>
            </View>
          ))}
        </View>
      </Animated.View>

      {/* Post-Registration Support */}
      <Animated.View style={[styles.supportSection, useFadeIn(800, 500).style as any]}>
        <View style={styles.supportBox}>
          <MaterialIcons name="support-agent" size={32} color={Colors.burgundy} />
          <Text style={styles.supportTitle}>Post-Registration Support</Text>
          <View style={styles.supportItems}>
            <Text style={styles.supportItem}>✓ 3-month business setup guidance</Text>
            <Text style={styles.supportItem}>✓ First year accounting management</Text>
            <Text style={styles.supportItem}>✓ Employee payroll setup</Text>
            <Text style={styles.supportItem}>✓ Grant & incentive applications</Text>
          </View>
        </View>
      </Animated.View>

      {/* CTA Section */}
      <Animated.View style={[styles.ctaSection, useFadeIn(900, 550).style as any]}>
        <View style={styles.ctaBox}>
          <Text style={styles.ctaTitle}>Start Your Business Today</Text>
          <Text style={styles.ctaDesc}>Let us handle the paperwork while you focus on growth</Text>
          <TouchableOpacity style={styles.cta} onPress={() => navigate('/signup')} activeOpacity={0.85}>
            <Text style={styles.ctaText}>Begin Registration Process</Text>
            <MaterialIcons name="arrow-forward" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.consultBtn} onPress={() => navigate('/login')} activeOpacity={0.85}>
            <Text style={styles.consultText}>Free Consultation</Text>
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
  heroSubtitle: { fontSize: 15, color: Colors.muted, marginBottom: 16, lineHeight: 24 },
  heroHighlight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.background,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  heroHighlightText: { fontSize: 13, fontWeight: '600', color: Colors.burgundy },
  heroBgShape: {
    position: 'absolute',
    right: -50,
    bottom: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: Colors.background,
    opacity: 0.5,
  },

  typesSection: { paddingHorizontal: 28, paddingVertical: 32 },
  sectionTitle: { fontSize: 24, fontWeight: '800', color: Colors.burgundy, marginBottom: 20, fontFamily: Fonts.heading },
  typesGrid: { flexDirection: 'row', gap: 12, justifyContent: 'space-between' },
  typeCard: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  typeIcon: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  typeName: { fontSize: 13, fontWeight: '700', color: Colors.burgundy, marginBottom: 8, textAlign: 'center' },
  typeDivider: { width: '100%', height: 1, backgroundColor: Colors.border, marginVertical: 10 },
  typeInfo: { width: '100%', gap: 8 },
  typeInfoRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  typeInfoText: { fontSize: 11, color: Colors.muted, fontWeight: '500' },
  typePrice: { fontSize: 11, color: Colors.burgundy, fontWeight: '700' },

  timelineSection: { paddingHorizontal: 28, paddingVertical: 32 },
  timeline: { gap: 0 },
  timelineItem: { flexDirection: 'row', gap: 16, marginBottom: 20 },
  timelineMarker: { alignItems: 'center', paddingTop: 2 },
  timelineNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.burgundy,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  timelineNumberText: { fontSize: 14, fontWeight: '800', color: '#fff' },
  timelineConnector: {
    width: 2,
    height: 60,
    backgroundColor: Colors.border,
    marginTop: 8,
  },
  timelineContent: { flex: 1, backgroundColor: Colors.card, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, borderWidth: 1, borderColor: Colors.border },
  timelineTitle: { fontSize: 13, fontWeight: '700', color: Colors.burgundy, marginBottom: 4 },
  timelineDesc: { fontSize: 12, color: Colors.muted, marginBottom: 6, lineHeight: 18 },
  timelineTime: { fontSize: 10, color: Colors.gold, fontWeight: '600' },

  servicesSection: { paddingHorizontal: 28, paddingVertical: 32 },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between' },
  serviceCard: {
    width: '48%',
    backgroundColor: Colors.card,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  serviceIcon: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  serviceTitle: { fontSize: 12, fontWeight: '700', color: Colors.burgundy, marginBottom: 4, textAlign: 'center' },
  serviceDesc: { fontSize: 11, color: Colors.muted, textAlign: 'center', lineHeight: 16 },

  supportSection: { paddingHorizontal: 28, paddingVertical: 20 },
  supportBox: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  supportTitle: { fontSize: 18, fontWeight: '800', color: Colors.burgundy, marginVertical: 10, fontFamily: Fonts.heading },
  supportItems: { width: '100%', gap: 8, marginTop: 12 },
  supportItem: { fontSize: 12, color: Colors.muted, fontWeight: '500', lineHeight: 20 },

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
  ctaTitle: { fontSize: 22, fontWeight: '800', color: '#fff', marginBottom: 6, fontFamily: Fonts.heading },
  ctaDesc: { fontSize: 13, color: '#fff', marginBottom: 20, opacity: 0.9, textAlign: 'center' },
  cta: {
    backgroundColor: '#C19A6B',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  ctaText: { fontSize: 14, fontWeight: '700', color: Colors.burgundy },
  consultBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#C19A6B',
    borderRadius: 8,
  },
  consultText: { fontSize: 13, fontWeight: '700', color: '#C19A6B' },
});
