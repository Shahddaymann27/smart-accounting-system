import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { MaterialIcons } from '@expo/vector-icons';
import { useFadeIn } from './animations';
import { Colors } from './theme';

export function Header() {
  const navigate = useNavigate();
  const anim = useFadeIn(450, 50);

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <Animated.View style={[styles.header, anim.style as any]}>
      <View style={styles.brandRow}>
        <TouchableOpacity style={styles.logoCircle} onPress={() => handleNavClick('/')}>
          <Text style={styles.logoText}>N</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/')}>
          <Text style={styles.brand}>Nilotaxes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => handleNavClick('/')} style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/tax')} style={styles.navItem}>
          <Text style={styles.navText}>Tax Consulting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/accounting')} style={styles.navItem}>
          <Text style={styles.navText}>Accounting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/registration')} style={styles.navItem}>
          <Text style={styles.navText}>Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/about')} style={styles.navItem}>
          <Text style={styles.navText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/contact')} style={styles.navItem}>
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/reporting')} style={styles.navItem}>
          <Text style={styles.navText}>Reporting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/documents')} style={styles.navItem}>
          <Text style={styles.navText}>Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/clients')} style={styles.navItem}>
          <Text style={styles.navText}>Clients</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavClick('/login')} style={styles.loginBtn}>
          <MaterialIcons name="login" size={18} color="#fff" />
          <Text style={[styles.navText, { color: '#fff', marginLeft: 6 }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: Colors.ivory,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
  },
  brandRow: { flexDirection: 'row', alignItems: 'center' },
  logoCircle: { width: 46, height: 46, borderRadius: 23, backgroundColor: Colors.burgundy, alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  brand: { marginLeft: 10, color: Colors.burgundy, fontWeight: '700', fontSize: 20 },
  nav: { flexDirection: 'row', alignItems: 'center' },
  navItem: { marginHorizontal: 8 },
  navText: { color: '#333', fontSize: 14 },
  loginBtn: { marginLeft: 12, backgroundColor: Colors.burgundy, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, flexDirection: 'row', alignItems: 'center' },
});
