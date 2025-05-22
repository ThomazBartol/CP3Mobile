import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { products } from '../data/products';

export default function Products() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.imagem} />
      <Text style={styles.nome}>{item.title}</Text>
      <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lista: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: '#333',
  },
});
