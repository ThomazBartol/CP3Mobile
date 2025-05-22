import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TGHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.left}>FunkoShop</Text>
      <Text style={styles.right}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  right: {
    color: '#fff',
    fontSize: 18,
  },
});
