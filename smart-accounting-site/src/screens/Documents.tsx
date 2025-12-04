import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Animated, TextInput, Modal, Alert } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFadeIn } from '../../ui/animations';
import { Colors, Fonts } from '../../ui/theme';

const DOCUMENTS = [
  { id: 1, name: 'Dichiarazione_Fiscale_2024.pdf', type: 'PDF', category: 'Tax', date: '28/11/2024', size: '2.4 MB' },
  { id: 2, name: 'Fattura_1045.pdf', type: 'PDF', category: 'Invoice', date: '25/11/2024', size: '456 KB' },
  { id: 3, name: 'Contratto_Cliente.docx', type: 'DOCX', category: 'Contract', date: '20/11/2024', size: '890 KB' },
  { id: 4, name: 'Report_Mensile_Nov.xlsx', type: 'XLSX', category: 'Report', date: '18/11/2024', size: '1.2 MB' },
  { id: 5, name: 'Bilancio_Q4.pdf', type: 'PDF', category: 'Financial', date: '15/11/2024', size: '3.1 MB' },
  { id: 6, name: 'Ricevuta_Pagamento.pdf', type: 'PDF', category: 'Receipt', date: '12/11/2024', size: '234 KB' },
];

export default function Documents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [documents, setDocuments] = useState(DOCUMENTS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newDoc, setNewDoc] = useState({
    name: '',
    type: 'PDF',
    category: 'Other',
    date: new Date().toLocaleDateString('en-GB'),
    size: '',
  });
  const headerAnim = useFadeIn(500, 80);

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(documents.map(d => d.category))];

  const handleDownload = (docName: string) => {
    Alert.alert('Download', `Downloading: ${docName}`, [
      { text: 'Cancel', onPress: () => {} },
      { text: 'OK', onPress: () => {} }
    ]);
  };

  const handleAddDocument = () => {
    if (newDoc.name && newDoc.size) {
      const newDocument = {
        id: Math.max(...documents.map(d => d.id)) + 1,
        ...newDoc,
      };
      setDocuments([newDocument, ...documents]);
      setNewDoc({
        name: '',
        type: 'PDF',
        category: 'Other',
        date: new Date().toLocaleDateString('en-GB'),
        size: '',
      });
      setShowAddModal(false);
      Alert.alert('Success', 'Document added successfully');
    }
  };

  const handleUploadFile = () => {
    Alert.alert('Upload', 'File upload initiated', [
      { text: 'Cancel', onPress: () => {} },
      { text: 'OK', onPress: () => setShowUploadModal(false) }
    ]);
  };

  const getTypeIcon = (type: string) => {
    if (type === 'PDF') return 'file-pdf-box';
    if (type === 'DOCX') return 'file-word-box';
    if (type === 'XLSX') return 'file-excel-box';
    return 'file-document';
  };

  const getTypeColor = (type: string) => {
    if (type === 'PDF') return '#D32F2F';
    if (type === 'DOCX') return '#1976D2';
    if (type === 'XLSX') return '#388E3C';
    return Colors.muted;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Tax: Colors.burgundy,
      Invoice: Colors.gold,
      Contract: '#8B7355',
      Report: '#5D4E60',
      Financial: '#8B4513',
      Receipt: '#696969',
    };
    return colors[category] || Colors.muted;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Animated.View style={[styles.header, headerAnim.style as any]}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <View style={styles.logoBg}>
              <MaterialCommunityIcons name="file-document-multiple" size={24} color="#fff" />
            </View>
            <View>
              <Text style={styles.headerTitle}>Documents Hub</Text>
              <Text style={styles.headerSubtitle}>Manage your files professionally</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addClientBtn} onPress={() => setShowAddModal(true)}>
            <MaterialIcons name="add" size={20} color="#fff" />
            <Text style={styles.addClientText}>Add Document</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Content */}
      <Animated.View style={[styles.content, useFadeIn(500, 150).style as any]}>
        {/* Stats Bar */}
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{filteredDocs.length}</Text>
            <Text style={styles.statLabel}>Documents</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{categories.length}</Text>
            <Text style={styles.statLabel}>Categories</Text>
          </View>
        </View>

        {/* Search & Controls */}
        <View style={styles.controlsBar}>
          <View style={styles.searchBox}>
            <MaterialIcons name="search" size={20} color={Colors.muted} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search documents..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor={Colors.muted}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn} onPress={() => setShowFilterModal(true)}>
            <MaterialIcons name="tune" size={20} color={Colors.burgundy} />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadBtn} onPress={() => setShowUploadModal(true)}>
            <MaterialIcons name="cloud-upload" size={18} color="#fff" />
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
        </View>

        {/* Documents Grid */}
        {filteredDocs.length > 0 ? (
          <View style={styles.documentsGrid}>
            {filteredDocs.map((doc, idx) => {
              const anim = useFadeIn(400, 250 + idx * 50);
              return (
                <Animated.View key={doc.id} style={[styles.docCard, anim.style as any]}>
                  <View style={styles.docCardHeader}>
                    <View style={[styles.docIcon, { backgroundColor: getTypeColor(doc.type) + '15' }]}>
                      <MaterialCommunityIcons
                        name={getTypeIcon(doc.type) as any}
                        size={24}
                        color={getTypeColor(doc.type)}
                      />
                    </View>
                    <TouchableOpacity style={styles.docDownloadBtn} onPress={() => handleDownload(doc.name)}>
                      <MaterialCommunityIcons name="download" size={18} color={Colors.burgundy} />
                    </TouchableOpacity>
                  </View>
                  
                  <Text style={styles.docName} numberOfLines={2}>{doc.name}</Text>
                  
                  <View style={styles.docMeta}>
                    <View>
                      <Text style={[styles.typeTag, { backgroundColor: getTypeColor(doc.type) + '20', color: getTypeColor(doc.type) }]}>
                        {doc.type}
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.categoryTag, { borderColor: getCategoryColor(doc.category), color: getCategoryColor(doc.category) }]}>
                        {doc.category}
                      </Text>
                    </View>
                  </View>
                  
                  <View style={styles.docFooter}>
                    <Text style={styles.docDate}>{doc.date}</Text>
                    <Text style={styles.docSize}>{doc.size}</Text>
                  </View>
                </Animated.View>
              );
            })}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <MaterialCommunityIcons name="file-search" size={48} color={Colors.muted} />
            <Text style={styles.emptyTitle}>No documents found</Text>
            <Text style={styles.emptySubtitle}>Try adjusting your search or filters</Text>
          </View>
        )}
      </Animated.View>

      {/* Add Document Modal */}
      <Modal visible={showAddModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Document</Text>
              <TouchableOpacity onPress={() => setShowAddModal(false)}>
                <MaterialIcons name="close" size={24} color={Colors.burgundy} />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalBody}>
              <Text style={styles.modalLabel}>Document Name *</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="e.g., Invoice_2024.pdf"
                placeholderTextColor={Colors.muted}
                value={newDoc.name}
                onChangeText={(text) => setNewDoc({ ...newDoc, name: text })}
              />

              <Text style={styles.modalLabel}>File Type *</Text>
              <View style={styles.typeSelector}>
                {['PDF', 'DOCX', 'XLSX'].map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={[styles.typeOption, newDoc.type === type && styles.typeOptionActive]}
                    onPress={() => setNewDoc({ ...newDoc, type })}
                  >
                    <Text style={[styles.typeOptionText, newDoc.type === type && styles.typeOptionTextActive]}>
                      {type}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.modalLabel}>Category *</Text>
              <View style={styles.categorySelector}>
                {['Tax', 'Invoice', 'Contract', 'Report', 'Financial', 'Receipt'].map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    style={[styles.catOption, newDoc.category === cat && styles.catOptionActive]}
                    onPress={() => setNewDoc({ ...newDoc, category: cat })}
                  >
                    <Text style={[styles.catOptionText, newDoc.category === cat && styles.catOptionTextActive]}>
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.modalLabel}>File Size *</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="e.g., 2.4 MB"
                placeholderTextColor={Colors.muted}
                value={newDoc.size}
                onChangeText={(text) => setNewDoc({ ...newDoc, size: text })}
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
                onPress={handleAddDocument}
              >
                <Text style={styles.modalSubmitText}>Add Document</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Upload Modal */}
      <Modal visible={showUploadModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { maxWidth: 500 }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Upload Document</Text>
              <TouchableOpacity onPress={() => setShowUploadModal(false)}>
                <MaterialIcons name="close" size={24} color={Colors.burgundy} />
              </TouchableOpacity>
            </View>

            <View style={styles.uploadContainer}>
              <MaterialCommunityIcons name="cloud-upload-outline" size={48} color={Colors.burgundy} />
              <Text style={styles.uploadTitle}>Drag & Drop or Click to Upload</Text>
              <Text style={styles.uploadSubtitle}>Supported formats: PDF, DOCX, XLSX</Text>
              <TouchableOpacity style={styles.uploadActionBtn} onPress={handleUploadFile}>
                <Text style={styles.uploadActionText}>Choose File</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.modalCancelBtn}
                onPress={() => setShowUploadModal(false)}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Filter Modal */}
      <Modal visible={showFilterModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { maxWidth: 450 }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter Documents</Text>
              <TouchableOpacity onPress={() => setShowFilterModal(false)}>
                <MaterialIcons name="close" size={24} color={Colors.burgundy} />
              </TouchableOpacity>
            </View>

            <View style={styles.filterContent}>
              <Text style={styles.filterCategoryTitle}>By Category</Text>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={styles.filterOption}
                  onPress={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                >
                  <View style={[styles.filterCheckbox, selectedCategory === cat && styles.filterCheckboxActive]}>
                    {selectedCategory === cat && (
                      <MaterialIcons name="check" size={16} color="#fff" />
                    )}
                  </View>
                  <Text style={styles.filterOptionLabel}>{cat}</Text>
                  <Text style={styles.filterCount}>
                    ({documents.filter(d => d.category === cat).length})
                  </Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={styles.filterClearBtn}
                onPress={() => setSelectedCategory(null)}
              >
                <Text style={styles.filterClearText}>Clear All Filters</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.modalSubmitBtn}
                onPress={() => setShowFilterModal(false)}
              >
                <Text style={styles.modalSubmitText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.ivory, paddingBottom: 40 },
  
  header: { backgroundColor: Colors.card, paddingHorizontal: 28, paddingVertical: 24, borderBottomWidth: 1, borderBottomColor: Colors.border },
  headerContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  logoBg: { width: 52, height: 52, borderRadius: 12, backgroundColor: Colors.burgundy, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  headerTitle: { fontSize: 26, fontWeight: '700', color: Colors.burgundy, fontFamily: Fonts.heading },
  headerSubtitle: { fontSize: 12, color: Colors.muted, marginTop: 2 },
  addClientBtn: { flexDirection: 'row', backgroundColor: Colors.burgundy, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8, alignItems: 'center' },
  addClientText: { color: '#fff', fontWeight: '700', fontSize: 12, marginLeft: 6 },

  content: { paddingHorizontal: 28, paddingVertical: 24 },
  
  statsBar: { flexDirection: 'row', backgroundColor: Colors.card, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, marginBottom: 24, paddingHorizontal: 20, paddingVertical: 16, alignItems: 'center' },
  statItem: { flex: 1, alignItems: 'center' },
  statNumber: { fontSize: 24, fontWeight: '800', color: Colors.burgundy },
  statLabel: { fontSize: 12, color: Colors.muted, marginTop: 4 },
  statDivider: { width: 1, height: 40, backgroundColor: Colors.border, marginHorizontal: 20 },

  controlsBar: { flexDirection: 'row', alignItems: 'center', marginBottom: 24, gap: 12 },
  searchBox: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.card, borderRadius: 10, paddingHorizontal: 14, borderWidth: 1, borderColor: Colors.border },
  searchInput: { flex: 1, marginLeft: 10, paddingVertical: 12, fontSize: 13, color: Colors.burgundy },
  filterBtn: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 12, borderRadius: 10, borderWidth: 1.5, borderColor: Colors.burgundy, backgroundColor: Colors.burgundy + '08' },
  filterText: { marginLeft: 6, color: Colors.burgundy, fontWeight: '700', fontSize: 13 },
  uploadBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.burgundy, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 10 },
  uploadText: { color: '#fff', fontWeight: '700', fontSize: 13, marginLeft: 6 },

  documentsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between' },
  docCard: { width: '48%', backgroundColor: Colors.card, borderRadius: 12, borderWidth: 1, borderColor: Colors.border, padding: 16, marginBottom: 8 },
  docCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  docIcon: { width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  docDownloadBtn: { width: 36, height: 36, borderRadius: 8, backgroundColor: Colors.burgundy + '10', alignItems: 'center', justifyContent: 'center' },
  docName: { fontSize: 14, fontWeight: '600', color: Colors.burgundy, marginBottom: 10, lineHeight: 20 },
  docMeta: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  typeTag: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, fontSize: 11, fontWeight: '700', overflow: 'hidden' },
  categoryTag: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, fontSize: 11, fontWeight: '700', borderWidth: 1 },
  docFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTopWidth: 1, borderTopColor: Colors.border },
  docDate: { fontSize: 11, color: Colors.muted, fontWeight: '500' },
  docSize: { fontSize: 11, color: Colors.muted, fontWeight: '600' },

  emptyState: { alignItems: 'center', paddingVertical: 60, justifyContent: 'center' },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: Colors.burgundy, marginTop: 16 },
  emptySubtitle: { fontSize: 13, color: Colors.muted, marginTop: 6 },

  /* Modals */
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
    maxHeight: '85%',
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
    paddingHorizontal: 20,
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
  typeSelector: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  typeOption: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  typeOptionActive: {
    backgroundColor: Colors.burgundy,
    borderColor: Colors.burgundy,
  },
  typeOptionText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.muted,
  },
  typeOptionTextActive: {
    color: '#fff',
  },
  categorySelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  catOption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  catOptionActive: {
    backgroundColor: Colors.burgundy,
    borderColor: Colors.burgundy,
  },
  catOptionText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.muted,
  },
  catOptionTextActive: {
    color: '#fff',
  },
  uploadContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.burgundy,
    marginTop: 12,
    marginBottom: 4,
  },
  uploadSubtitle: {
    fontSize: 12,
    color: Colors.muted,
    marginBottom: 16,
  },
  uploadActionBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.burgundy,
    borderRadius: 6,
  },
  uploadActionText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  filterContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  filterCategoryTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.burgundy,
    marginBottom: 12,
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  filterCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterCheckboxActive: {
    backgroundColor: Colors.burgundy,
    borderColor: Colors.burgundy,
  },
  filterOptionLabel: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    color: Colors.burgundy,
  },
  filterCount: {
    fontSize: 12,
    color: Colors.muted,
  },
  filterClearBtn: {
    marginTop: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    alignItems: 'center',
  },
  filterClearText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#E74C3C',
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
