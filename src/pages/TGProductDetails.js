import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TGHeader from '../components/TGHeader';

export default function ProductDetails({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <TGHeader title="Detalhes do Produto" />
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.desc}>{product.desc}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#fff',
  },
  desc: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 22,
    color: '#fff',
  },
});
