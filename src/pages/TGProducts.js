import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { products } from '../data/products';
import { CartContext } from '../providers/TGCartProvider';
import CartIcon from '../../assets/cart-icon.png';
import TGHeader from '../components/TGHeader';
import TGProductCard from '../components/TGProductCard';

export default function Products({ navigation }) {
  const [search, setSearch] = useState('');
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );
  });

  const renderItem = ({ item }) => (
  <TGProductCard
    product={item}
    onPress={() => navigation.navigate('Detalhes', { product: item })}
    onAddToCart={() => addToCart(item)}
  />
);


  return (
    <View style={styles.container}>
      <TGHeader title="Lista de Produtos" />
      <TextInput
        style={styles.input}
        placeholder="Buscar por título ou descrição..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum produto encontrado.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  input: {
    margin: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 16,
    color: '#888',
  },
});
