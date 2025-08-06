import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskCard({ task }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#555',
    marginTop: 4,
  },
});
