import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Book Tracking App!</Text>
      <Text style={styles.subtitle}>Manage your books and track your reading progress.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f3e9dc', // Soft cream background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5c5048', // Darker cream tone for text
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#8c7b75', // Softer complementary tone for subtitle
    marginTop: 10,
  },
});

export default HomeScreen;
