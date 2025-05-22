import AsyncStorage from '@react-native-async-storage/async-storage';
import produtosJson from '../data/products.json';

const STORAGE_KEY = '@TG_PRODUCTS';

export async function TGLoadProducts() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data !== null) {
      return JSON.parse(data);
    } else {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(produtosJson));
      return produtosJson;
    }
  } catch (err) {
    console.error('Erro ao carregar produtos:', err);
    return [];
  }
}
