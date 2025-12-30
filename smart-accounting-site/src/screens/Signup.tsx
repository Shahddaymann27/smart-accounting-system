import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useFadeIn } from '../../ui/animations';
import { Colors } from '../../ui/theme';

export default function Signup() {
  const navigate = useNavigate();
  const cardAnim = useFadeIn(600, 100);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignup = () => {
    // placeholder: integrate signup flow
    console.log('signup', name, email);
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, cardAnim.style as any]}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput placeholder="Full name" style={styles.input} value={name} onChangeText={setName} />
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />

        <TouchableOpacity style={styles.cta} onPress={onSignup}>
          <Text style={styles.ctaText}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigate('/login')}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: Colors.ivory, alignItems: 'center' },
  card: { width: '100%', maxWidth: 420, backgroundColor: Colors.card, padding: 24, borderRadius: 16, borderWidth: 1, borderColor: Colors.border, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, elevation: 4 },
  title: { fontSize: 28, fontWeight: '800', marginBottom: 16, color: Colors.burgundy, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12, backgroundColor: '#fafafa' },
  cta: { backgroundColor: Colors.burgundy, padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  link: { marginTop: 16, alignItems: 'center' },
  linkText: { color: Colors.burgundy, fontWeight: '600' }
});
