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
    <View style={styles.card}>
      <TouchableOpacity 
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Detalhes', { product: item })}
      >
        <Image source={item.image} style={styles.imagem} />
      </TouchableOpacity>
      <Text style={styles.nome}>{item.title}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(item)}
      >
        <Image source={CartIcon} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
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
  card: {
    marginBottom: 16,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
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
    color: '#fff',
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginVertical: 4,
  },
  preco: {
    fontSize: 14,
    color: '#fff',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#03dac6',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonImage: {
    width: 20,
    height: 20,
  },
  empty: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 16,
    color: '#888',
  },
});
