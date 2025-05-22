import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../providers/TGCartProvider';
import TGHeader from '../components/TGHeader';
import TGButton from '../components/TGButton';

export default function TGCart() {
  const { cartItems, removeFromCart, changeQuantity } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.product.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.product.title}</Text>
        <Text style={styles.text}>Quantidade: {item.quantity}</Text>
        <Text style={styles.text}>Preço unitário: R$ {item.product.price.toFixed(2)}</Text>
        <Text style={styles.text}>Subtotal: R$ {(item.product.price * item.quantity).toFixed(2)}</Text>
        <View style={styles.controls}>
          <TGButton
            title="+"
            onPress={() => changeQuantity(item.product.id, +1)}
            style={styles.controlButton}
          />
          <TGButton
            title="-"
            onPress={() => changeQuantity(item.product.id, -1)}
            style={styles.controlButton}
          />
          <TGButton
            title="Remover"
            onPress={() => removeFromCart(item.product.id)}
            style={[styles.controlButton, styles.removeButton]}
          />
        </View>
      </View>
    </View>
  );

  if (cartItems.length === 0) {
  return (
    <View style={styles.containertop}>
      <TGHeader title="Seu Carrinho" />
      <View style={styles.container}>
        <View style={styles.emptyContent}>
          <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
        </View>
      </View>
    </View>
  );
}

  return (
    <View style={styles.containertop}>
      <TGHeader title="Seu Carrinho" />
      <View style={styles.container}>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.product.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containertop: { 
    flex: 1, 
    backgroundColor: '#121212',
  },
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#121212',
  },
  item: { 
    flexDirection: 'row', 
    marginBottom: 16, 
    backgroundColor: '#1e1e1e', 
    borderRadius: 12, 
    padding: 12, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: { 
    width: 80, 
    height: 80, 
    borderRadius: 12, 
  },
  info: { 
    flex: 1, 
    marginLeft: 16, 
    justifyContent: 'center' 
  },
  title: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 18, 
    marginBottom: 4,
  },
  text: {
    color: '#ccc',
    fontSize: 14,
  },
  controls: { 
    flexDirection: 'row', 
    marginTop: 10, 
    justifyContent: 'flex-start', 
    gap: 10,
  },
  controlButton: {
    backgroundColor: '#6200ee',
    borderRadius: 8,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: '#e53935',
  },
  emptyContent: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  emptyText: {
    color: '#888',
    fontSize: 18,
  },
  totalContainer: { 
    paddingTop: 16, 
    borderTopWidth: 1, 
    borderColor: '#333',
  },
  totalText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#fff',
    textAlign: 'right',
  },
});
