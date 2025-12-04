import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Animated, TextInput, Modal } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFadeIn } from '../../ui/animations';
import { Colors, Fonts } from '../../ui/theme';

const CLIENTS_DATA = [
  {
    id: 1,
    initials: 'A',
    name: 'Ahmed Aziz',
    email: 'ahmed.aziz@email.com',
    phone: '+20 100 123 4567',
    location: 'Maddi, Egypt',
    status: 'active',
    joined: '2023-01-15',
  },
  {
    id: 2,
    initials: 'L',
    name: 'Lara Ahmed',
    email: 'lara.ahmed@email.com',
    phone: '+20 101 234 5678',
    location: 'Cairo, Egypt',
    status: 'active',
    joined: '2023-03-20',
  },
  {
    id: 3,
    initials: 'J',
    name: 'jomana Hassan',
    email: 'jomana.hassan@email.com',
    phone: '+20 102 345 6789',
    location: 'Alexandria, Egypt',
    status: 'active',
    joined: '2023-05-10',
  },
  {
    id: 4,
    initials: 'A',
    name: 'Amira Mohamed',
    email: 'amira.mohamed@email.com',
    phone: '+20 103 456 7890',
    location: 'Cairo, Egypt',
    status: 'active',
    joined: '2023-02-14',
  },
  {
    id: 5,
    initials: 'Z',
    name: 'Zainab El-Sayed',
    email: 'zainab.elsayed@email.com',
    phone: '+20 104 567 8901',
    location: 'Cairo, Egypt',
    status: 'inactive',
    joined: '2023-04-08',
  },
  {
    id: 6,
    initials: 'S',
    name: 'Sammar Khaled',
    email: 'sammar.khaled@email.com',
    phone: '+20 105 678 9012',
    location: 'Cairo, Egypt',
    status: 'active',
    joined: '2023-06-22',
  },
];

export default function Clients() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [clients, setClients] = useState(CLIENTS_DATA);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  
  const headerAnim = useFadeIn(500, 80);

  const filteredClients = CLIENTS_DATA.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || client.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAddClient = () => {
    if (newClient.name && newClient.email && newClient.phone && newClient.location) {
      const newClientData = {
        id: Math.max(...clients.map(c => c.id)) + 1,
        initials: newClient.name.charAt(0).toUpperCase(),
        name: newClient.name,
        email: newClient.email,
        phone: newClient.phone,
        location: newClient.location,
        status: 'active' as const,
        joined: new Date().toISOString().split('T')[0],
      };
      setClients([...clients, newClientData]);
      setNewClient({ name: '', email: '', phone: '', location: '' });
      setShowAddModal(false);
    }
  };

  const filteredClientsDisplay = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || client.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    return status === 'active' ? '#27AE60' : '#E74C3C';
  };

  const getStatusIcon = (status: string) => {
    return status === 'active' ? 'check-circle' : 'alert-circle';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Animated.View style={[styles.header, headerAnim.style as any]}>
        <View style={styles.headerTop}>
          <View style={styles.logoSection}>
            <View style={styles.logoBg}>
              <Text style={styles.logoText}>N</Text>
            </View>
            <View>
              <Text style={styles.headerTitle}>Nilotaxes Clients</Text>
              <Text style={styles.headerSubtitle}>{filteredClientsDisplay.length} active clients</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addClientBtn} onPress={() => setShowAddModal(true)}>
            <MaterialIcons name="add" size={20} color="#fff" />
            <Text style={styles.addClientText}>Add Client</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={20} color={Colors.muted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or email..."
            placeholderTextColor={Colors.muted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterContainer}>
          {['all', 'active', 'inactive'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.filterTab,
                selectedStatus === status && styles.filterTabActive,
              ]}
              onPress={() => setSelectedStatus(status as any)}
            >
              <Text
                style={[
                  styles.filterTabText,
                  selectedStatus === status && styles.filterTabTextActive,
                ]}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      {/* Clients Grid */}
      <View style={styles.clientsGrid}>
        {filteredClientsDisplay.map((client, idx) => {
          const anim = useFadeIn(600, 150 + idx * 100);
          return (
            <Animated.View key={client.id} style={[styles.clientCardWrapper, anim.style as any]}>
              <TouchableOpacity style={styles.clientCard} activeOpacity={0.8}>
                {/* Client Initials */}
                <View style={styles.initialsContainer}>
                  <Text style={styles.initials}>{client.initials}</Text>
                </View>

                {/* Status Badge */}
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: getStatusColor(client.status) },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={getStatusIcon(client.status)}
                    size={12}
                    color="#fff"
                  />
                  <Text style={styles.statusText}>
                    {client.status === 'active' ? 'Active' : 'Inactive'}
                  </Text>
                </View>

                {/* Client Info */}
                <View style={styles.clientInfo}>
                  <Text style={styles.clientName}>{client.name}</Text>
                  <Text style={styles.clientEmail}>{client.email}</Text>
                  <View style={styles.contactRow}>
                    <MaterialIcons name="phone" size={14} color={Colors.burgundy} />
                    <Text style={styles.contactText}>{client.phone}</Text>
                  </View>
                  <View style={styles.contactRow}>
                    <MaterialIcons name="location-on" size={14} color={Colors.burgundy} />
                    <Text style={styles.contactText}>{client.location}</Text>
                  </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.actionBtn}>
                    <MaterialCommunityIcons name="pencil" size={16} color={Colors.burgundy} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionBtn}>
                    <MaterialCommunityIcons name="delete" size={16} color="#E74C3C" />
                  </TouchableOpacity>
                </View>

                {/* View Details Button */}
                <TouchableOpacity style={styles.viewDetailsBtn}>
                  <Text style={styles.viewDetailsText}>View Details</Text>
                  <MaterialIcons name="arrow-forward" size={14} color={Colors.burgundy} />
                </TouchableOpacity>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>

      {/* Empty State */}
      {filteredClientsDisplay.length === 0 && (
        <Animated.View style={[styles.emptyState, useFadeIn(600, 200).style as any]}>
          <MaterialCommunityIcons name="account-off" size={64} color={Colors.border} />
          <Text style={styles.emptyStateTitle}>No clients found</Text>
          <Text style={styles.emptyStateText}>
            {searchQuery ? 'Try adjusting your search' : 'No clients match the selected filter'}
          </Text>
        </Animated.View>
      )}

      {/* Add Client Modal */}
      <Modal visible={showAddModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Client</Text>
              <TouchableOpacity onPress={() => setShowAddModal(false)}>
                <MaterialIcons name="close" size={24} color={Colors.burgundy} />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody}>
              <Text style={styles.modalLabel}>Full Name *</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter client name"
                placeholderTextColor={Colors.muted}
                value={newClient.name}
                onChangeText={(text) => setNewClient({ ...newClient, name: text })}
              />

              <Text style={styles.modalLabel}>Email *</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter email address"
                placeholderTextColor={Colors.muted}
                value={newClient.email}
                onChangeText={(text) => setNewClient({ ...newClient, email: text })}
                keyboardType="email-address"
              />

              <Text style={styles.modalLabel}>Phone *</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter phone number"
                placeholderTextColor={Colors.muted}
                value={newClient.phone}
                onChangeText={(text) => setNewClient({ ...newClient, phone: text })}
                keyboardType="phone-pad"
              />

              <Text style={styles.modalLabel}>Location *</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter location"
                placeholderTextColor={Colors.muted}
                value={newClient.location}
                onChangeText={(text) => setNewClient({ ...newClient, location: text })}
              />
            </ScrollView>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.modalCancelBtn}
                onPress={() => setShowAddModal(false)}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalSubmitBtn}
                onPress={handleAddClient}
              >
                <Text style={styles.modalSubmitText}>Add Client</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingBottom: 40,
  },

  /* Header */
  header: {
    backgroundColor: Colors.card,
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logoBg: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.burgundy,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  logoText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.burgundy,
    fontFamily: Fonts.heading,
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: 12,
    color: Colors.muted,
    fontWeight: '500',
  },
  addClientBtn: {
    backgroundColor: Colors.burgundy,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addClientText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },

  /* Search */
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 44,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.burgundy,
    fontWeight: '500',
  },

  /* Filter */
  filterContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  filterTabActive: {
    backgroundColor: Colors.burgundy,
    borderColor: Colors.burgundy,
  },
  filterTabText: {
    fontSize: 12,
    color: Colors.muted,
    fontWeight: '600',
  },
  filterTabTextActive: {
    color: '#fff',
  },

  /* Clients Grid */
  clientsGrid: {
    paddingHorizontal: 28,
    paddingVertical: 24,
    gap: 20,
  },
  clientCardWrapper: {
    width: '100%',
  },
  clientCard: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    position: 'relative',
  },

  /* Client Initials */
  initialsContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: Colors.burgundy,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  initials: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
  },

  /* Status Badge */
  statusBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#fff',
  },

  /* Client Info */
  clientInfo: {
    marginBottom: 16,
  },
  clientName: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.burgundy,
    marginBottom: 4,
    fontFamily: Fonts.heading,
  },
  clientEmail: {
    fontSize: 13,
    color: Colors.muted,
    fontWeight: '500',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  contactText: {
    fontSize: 12,
    color: Colors.muted,
    fontWeight: '500',
  },

  /* Action Buttons */
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },

  /* View Details Button */
  viewDetailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(139, 0, 0, 0.08)',
    borderWidth: 1,
    borderColor: Colors.burgundy,
  },
  viewDetailsText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.burgundy,
  },

  /* Empty State */
  emptyState: {
    alignItems: 'center',
    paddingVertical: 80,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.burgundy,
    marginTop: 16,
    marginBottom: 6,
  },
  emptyStateText: {
    fontSize: 14,
    color: Colors.muted,
    fontWeight: '500',
  },

  /* Modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    width: '100%',
    maxWidth: 640,
    alignSelf: 'center',
    maxHeight: '80%',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.burgundy,
    fontFamily: Fonts.heading,
  },
  modalBody: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  modalLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.burgundy,
    marginBottom: 8,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.burgundy,
    marginBottom: 16,
    backgroundColor: Colors.background,
  },
  modalFooter: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  modalCancelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  modalCancelText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.muted,
  },
  modalSubmitBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: Colors.burgundy,
    alignItems: 'center',
  },
  modalSubmitText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fff',
  },
});
