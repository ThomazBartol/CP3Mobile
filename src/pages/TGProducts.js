import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import { products } from '../data/products';

export default function Products() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.imagem} />
      <Text style={styles.nome}>{item.title}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar produtos..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredProducts}
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
  input: {
    margin: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 16,
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
  desc: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 4,
  },
  preco: {
    fontSize: 14,
    color: '#333',
  },
});
