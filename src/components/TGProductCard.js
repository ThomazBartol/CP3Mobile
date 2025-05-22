import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TGButton from './TGButton';

export default function TGProductCard({ product, onPress, onAddToCart }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      <Text style={styles.desc}>{product.desc}</Text>
      {onAddToCart && (
        <TGButton
          title="Adicionar ao carrinho"
          onPress={onAddToCart}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 12,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
});
