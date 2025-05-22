import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, StyleSheet } from 'react-native';

import TGProducts from '../pages/TGProducts';
import TGCart from '../pages/TGCart';
import TGProductDetails from '../pages/TGProductDetails';
import { CartContext } from '../providers/TGCartProvider';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produtos"
        component={TGProducts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalhes"
        component={TGProductDetails}
        options={{ title: 'Detalhes do Produto' }}
      />
    </Stack.Navigator>
  );
}

export default function TGNavigator() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#333',
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tab.Screen
        name="Loja"
        component={ProductStack}
        options={{ headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/store-icon.png')}
              style={[
                styles.icon,
                { tintColor: focused ? '#6200ee' : '#999' },
              ]}
            />
          ),
         }}
      />
      <Tab.Screen
        name="Carrinho"
        component={TGCart}
        options={{ headerShown: false,
          tabBarBadge: totalItems > 0 ? totalItems : null,
          tabBarBadgeStyle: { backgroundColor: '#e91e63' },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/cart-icon.png')}
              style={[
                styles.icon,
                { tintColor: focused ? '#6200ee' : '#999' },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
