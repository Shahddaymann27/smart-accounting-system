import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFadeIn } from '../../ui/animations';
import { Colors, Fonts } from '../../ui/theme';

const services = [
  { icon: 'calculate', title: 'Tax Consulting', description: 'Complete assistance for tax management of your business with personalized solutions.' },
  { icon: 'description', title: 'Accounting', description: 'Ordinary and simplified accounting with precision and professionalism.' },
  { icon: 'apartment', title: 'Business Management', description: 'Complete support for the establishment and registration of your business.' },
  { icon: 'trending-up', title: 'Financial Reporting', description: 'Detailed analysis and financial reports for informed strategic decisions.' }
];

export default function HomeScreen() {
  const navigate = useNavigate();
  const heroAnim = useFadeIn(600, 80);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.brand}>Nilotaxes</Text>
        </View>

        <Animated.View style={[styles.hero, heroAnim.style as any]}>
          <Text style={styles.heroTitle}>Nilotaxes</Text>
          <Text style={styles.heroSubtitle}>Accounting Firm</Text>
          <Text style={styles.heroDesc}>Your trusted partner for tax and accounting management.</Text>
          <TouchableOpacity style={styles.cta} onPress={() => navigate('login')}>
            <Text style={styles.ctaText}>Request Consultation</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <Text style={styles.sectionSubtitle}>Professional solutions for every tax and accounting need</Text>
          
          <View style={styles.servicesGrid}>
            {services.map((s, i) => {
              const anim = useFadeIn(500, 120 + i * 90);
              return (
                <Animated.View key={i} style={[styles.serviceGridCard, anim.style as any]}>
                  <TouchableOpacity style={styles.serviceCardInner} activeOpacity={0.85} onPress={() => {
                    if (s.title === 'Tax Consulting') navigate('tax');
                    if (s.title === 'Accounting') navigate('accounting');
                    if (s.title === 'Business Management') navigate('registration');
                    if (s.title === 'Financial Reporting') navigate('reporting');
                  }}>
                    <View style={styles.serviceIconBg}>
                      <MaterialIcons name={s.icon as any} size={40} color="#fff" />
                    </View>
                    <Text style={styles.serviceCardTitle}>{s.title}</Text>
                    <Text style={styles.serviceCardDesc}>{s.description}</Text>
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
          </View>
        </View>

        {/* Why Choose Us section */}
        <View style={[styles.section, { marginTop: 22 }]}>
          <Animated.View style={useFadeIn(500, 60).style as any}>
            <Text style={styles.headerTitle}>Why Choose Us</Text>
          </Animated.View>
          <View style={styles.divider} />
          <View style={styles.featuresRow}>
            {[
              { key: 'reliability', icon: 'shield-check', title: 'Reliability', desc: 'Trusted partner for your growth' },
              { key: 'accuracy', icon: 'check-circle-outline', title: 'Accuracy', desc: 'Meticulous attention to every detail' },
              { key: 'speed', icon: 'clock-outline', title: 'Fast Delivery', desc: 'Guaranteed deadline compliance' },
              { key: 'support', icon: 'account-group-outline', title: 'Professional Support', desc: 'Expert team always at your service' }
            ].map((f, idx) => {
              const anim = useFadeIn(500, 180 + idx * 120);
              return (
                <Animated.View key={f.key} style={[styles.featureCard, anim.style as any]}>
                  <View style={styles.iconWrap}>
                    <MaterialCommunityIcons name={f.icon as any} size={30} color={Colors.burgundy} />
                  </View>
                  <Text style={styles.featureTitle}>{f.title}</Text>
                  <Text style={styles.featureDesc}>{f.desc}</Text>
                </Animated.View>
              );
            })}
          </View>
        </View>

        {/* Our Expert Team Section */}
        <View style={[styles.section, { marginTop: 28 }]}>
          <Animated.View style={useFadeIn(600, 100).style as any}>
            <Text style={styles.headerTitle}>Our Expert Team</Text>
          </Animated.View>
          <View style={styles.divider} />
          <View style={styles.teamGrid}>
            {[
              { icon: 'account-tie', name: 'Mohamed Ahmed ', role: 'Tax Consultant', specialty: '15+ years experience' },
              { icon: 'briefcase-account', name: 'Loreen Hassan', role: 'Accounting Manager', specialty: 'Financial Planning' },
              { icon: 'file-document-edit', name: 'Asharf Mahmoud  ', role: 'Legal Advisor', specialty: 'Business Registration' },
              { icon: 'chart-line', name: 'Nada Adel', role: 'Financial Analyst', specialty: 'Strategic Reports' }
            ].map((member, idx) => {
              const anim = useFadeIn(500, 220 + idx * 100);
              return (
                <Animated.View key={idx} style={[styles.teamCard, anim.style as any]}>
                  <View style={styles.teamIconBg}>
                    <MaterialCommunityIcons name={member.icon as any} size={36} color="#fff" />
                  </View>
                  <Text style={styles.teamName}>{member.name}</Text>
                  <Text style={styles.teamRole}>{member.role}</Text>
                  <Text style={styles.teamSpecialty}>{member.specialty}</Text>
                </Animated.View>
              );
            })}
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Nilotaxes</Text>
          <Text style={styles.footerText}>© 2024 Nilotaxes. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.ivory },
  content: { padding: 28 },
  headerRow: { marginBottom: 12 },
  brand: { color: Colors.burgundy, fontSize: 24, fontWeight: '800', fontFamily: 'Garamond, Georgia, serif' },
  hero: { alignItems: 'center', marginVertical: 28 },
  heroTitle: { fontSize: 48, color: Colors.burgundy, fontWeight: '800', fontFamily: 'Garamond, Georgia, serif', letterSpacing: 0.5 },
  heroSubtitle: { fontSize: 18, color: Colors.gold, marginTop: 6 },
  heroDesc: { color: Colors.muted, textAlign: 'center', marginTop: 12, maxWidth: 620 },
  cta: { marginTop: 18, backgroundColor: Colors.burgundy, paddingVertical: 12, paddingHorizontal: 22, borderRadius: 999, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 8, elevation: 3 },
  ctaText: { color: '#fff', fontWeight: '700' },
  section: { marginTop: 28 },
  sectionTitle: { fontSize: 28, textAlign: 'center', color: Colors.burgundy, fontFamily: Fonts.heading, fontWeight: '700', marginBottom: 8 },
  sectionSubtitle: { fontSize: 14, textAlign: 'center', color: Colors.muted, marginBottom: 20 },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 12 },
  serviceGridCard: { width: '48%', marginBottom: 18 },
  serviceCardInner: { backgroundColor: Colors.card, borderRadius: 12, padding: 18, alignItems: 'center', borderWidth: 1, borderColor: Colors.border },
  serviceIconBg: { width: 72, height: 72, borderRadius: 16, backgroundColor: Colors.burgundy, alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  serviceCardTitle: { color: Colors.burgundy, fontWeight: '700', fontSize: 18, marginBottom: 8, textAlign: 'center' },
  serviceCardDesc: { color: Colors.muted, fontSize: 13, lineHeight: 20, textAlign: 'center' },
  headerTitle: { fontSize: 32, textAlign: 'center', color: Colors.burgundy, fontFamily: Fonts.heading, marginBottom: 8 },
  divider: { height: 6, width: 80, backgroundColor: Colors.gold, alignSelf: 'center', borderRadius: 4, marginBottom: 18 },
  featuresRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' },
  featureCard: { width: '23%', minWidth: 160, backgroundColor: Colors.card, borderRadius: 12, padding: 16, alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: Colors.border },
  iconWrap: { width: 68, height: 68, borderRadius: 34, borderWidth: 2, borderColor: Colors.gold, alignItems: 'center', justifyContent: 'center', marginBottom: 12, backgroundColor: Colors.subtle },
  featureTitle: { color: Colors.burgundy, fontWeight: '700', marginBottom: 6, fontSize: 16 },
  featureDesc: { color: Colors.muted, textAlign: 'center', lineHeight: 20 },
  footer: { alignItems: 'center', marginTop: 36, paddingVertical: 12 },
  footerTitle: { color: '#fff', fontWeight: '700', backgroundColor: '#2C2C2C', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  footerText: { marginTop: 8, color: Colors.muted },
  teamGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16 },
  teamCard: { width: '23%', minWidth: 150, backgroundColor: Colors.card, borderRadius: 12, padding: 16, alignItems: 'center', borderWidth: 1, borderColor: Colors.border, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  teamIconBg: { width: 64, height: 64, borderRadius: 32, backgroundColor: Colors.burgundy, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  teamName: { fontSize: 14, fontWeight: '700', color: Colors.burgundy, marginBottom: 4, textAlign: 'center' },
  teamRole: { fontSize: 12, color: '#C19A6B', fontWeight: '600', marginBottom: 6, textAlign: 'center' },
  teamSpecialty: { fontSize: 11, color: Colors.muted, textAlign: 'center', lineHeight: 16 }
});
