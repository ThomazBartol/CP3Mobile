import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import JTVProductListScreen from '../pages/JTVProductListScreen';
import JTVCartScreen from '../pages/JTVCartScreen';
import { CartContext } from '../stores/JTVCartStore';

const Tab = createBottomTabNavigator();

export default function TGNavigator() {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === '👟Produtos👟' ? 'ios-list' : 'ios-cart';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="👟Produtos👟"
        component={JTVProductListScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="🛒Carrinho🛒"
        component={JTVCartScreen}
        options={{
          headerShown: false,
          tabBarBadge: totalQuantity > 0 ? `${totalQuantity}` : undefined,
        }}
      />
    </Tab.Navigator>
  );
}
