import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Client Portal</Text>
      
      {/* Book Appointment button - exactly the code you sent */}
      <TouchableOpacity onPress={() => navigation.navigate('BookAppointment')} style={styles.mainBtn}>
        <Text style={styles.mainBtnText}>Book Appointment</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.mainBtn}>
        <Text style={styles.mainBtnText}>Upload Documents</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.mainBtn}>
        <Text style={styles.mainBtnText}>Track Case Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    backgroundColor: '#FFF9F0',
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 40, 
    color: '#8B0000',
    textAlign: 'center'
  },
  mainBtn: { 
    backgroundColor: '#8B0000', 
    padding: 14, 
    borderRadius: 8, 
    alignItems: 'center',
    marginBottom: 14 
  },
  mainBtnText: { 
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 16 
  }
});