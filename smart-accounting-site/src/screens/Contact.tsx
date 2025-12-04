import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFadeIn } from '../../ui/animations';
import { Colors } from '../../ui/theme';

export default function Contact() {
  const titleAnim = useFadeIn(500, 80);
  const contentAnim = useFadeIn(600, 150);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Animated.View style={[{ marginBottom: 6 }, titleAnim.style as any]}>
        <Text style={styles.title}>Contact Us</Text>
      </Animated.View>
      <Text style={styles.subtitle}>We are here to answer your questions and offer you the best advice</Text>

      <Animated.View style={[styles.container, contentAnim.style as any]}>
        <View style={styles.left}>
          <Text style={styles.infoTitle}>Contact Information</Text>

          <View style={styles.infoRow}>
            <View style={styles.iconWrap}><MaterialIcons name="location-on" size={20} color={Colors.burgundy} /></View>
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Address</Text>
              <Text style={styles.infoValue}>Via Giza 123, 00100 Giza, Egypt</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconWrap}><MaterialIcons name="phone" size={20} color={Colors.burgundy} /></View>
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>+20 2 1234 5678</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconWrap}><MaterialIcons name="email" size={20} color={Colors.burgundy} /></View>
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>info@nilotaxes.it</Text>
            </View>
          </View>

          <View style={styles.hoursBox}>
            <Text style={styles.hoursTitle}>Opening Hours</Text>
            <View style={styles.hoursRow}><Text>Monday - Friday</Text><Text>9:00 - 18:00</Text></View>
            <View style={styles.hoursRow}><Text>Saturday</Text><Text>9:00 - 13:00</Text></View>
            <View style={styles.hoursRow}><Text>Sunday</Text><Text>Closed</Text></View>
          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.formCard}>
            <TextInput placeholder="Full Name" style={styles.input} />
            <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
            <TextInput placeholder="Phone" keyboardType="phone-pad" style={styles.input} />
            <TextInput placeholder="Message" multiline numberOfLines={5} style={[styles.input, styles.textarea]} />

            <TouchableOpacity style={styles.sendBtn} onPress={() => { /* TODO: send message */ }}>
              <MaterialIcons name="send" size={18} color="#fff" />
              <Text style={styles.sendBtnText}>  Send Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 24, backgroundColor: Colors.ivory },
  title: { fontSize: 32, fontWeight: '700', color: Colors.burgundy, textAlign: 'center' },
  subtitle: { textAlign: 'center', color: Colors.muted, marginBottom: 20 },
  container: { flexDirection: 'row', gap: 20 },
  left: { flex: 1, paddingRight: 12 },
  right: { width: 420 },
  infoTitle: { fontSize: 18, fontWeight: '700', color: Colors.burgundy, marginBottom: 12 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  iconWrap: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#fff0f0', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  infoText: { flex: 1 },
  infoLabel: { fontWeight: '700', color: '#333' },
  infoValue: { color: '#555' },
  hoursBox: { marginTop: 12, backgroundColor: Colors.card, padding: 12, borderRadius: 8, borderWidth: 1, borderColor: Colors.border },
  hoursTitle: { fontWeight: '700', marginBottom: 8 },
  hoursRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 },
  formCard: { backgroundColor: Colors.card, padding: 18, borderRadius: 14, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8 },
  input: { borderWidth: 1, borderColor: '#eee', padding: 10, borderRadius: 8, marginBottom: 10, backgroundColor: '#fafafa' },
  textarea: { height: 120, textAlignVertical: 'top' },
  sendBtn: { marginTop: 8, backgroundColor: Colors.burgundy, paddingVertical: 14, borderRadius: 999, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
  sendBtnText: { color: '#fff', fontWeight: '600', fontSize: 16 }
});
