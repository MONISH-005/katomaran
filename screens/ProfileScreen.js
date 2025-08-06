import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ProfileScreen() {
  const handleLogout = () => {
    // In full app, you’d use Firebase Auth logout here
    Alert.alert('Logged out (UI only)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Monish N</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>monish@example.com</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 40,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 14,
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
