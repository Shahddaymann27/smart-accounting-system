import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BookAppointment() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Appointment</Text>

      <TextInput 
        placeholder="Full Name" 
        style={styles.input} 
        onChangeText={setName} 
        value={name}
      />
      <TextInput 
        placeholder="Service (Tax / Accounting / Registration)" 
        style={styles.input} 
        onChangeText={setService} 
        value={service}
      />
      <TextInput 
        placeholder="Preferred Date" 
        style={styles.input} 
        onChangeText={setDate} 
        value={date}
      />
      <TextInput 
        placeholder="Notes" 
        style={[styles.input, { height: 90 }]} 
        multiline 
        onChangeText={setNotes} 
        value={notes}
      />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Submit Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:24, backgroundColor:'#FFF9F0' },
  title: { fontSize:22, fontWeight:'bold', marginBottom:20, color:'#8B0000' },
  input: { borderWidth:1, borderColor:'#D4AF37', padding:12, borderRadius:8, marginBottom:14 },
  btn: { backgroundColor:'#8B0000', padding:14, borderRadius:8, alignItems:'center' },
  btnText: { color:'#fff', fontWeight:'bold' }
});