import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './src/pages/TGProducts';
import Cart from './src/pages/TGCart';
// export default function App() {
//   return (
//     <NavigationContainer>
//       <CarrinhoProvider>
//         <TGNavigator />
//       </CarrinhoProvider>
//     </NavigationContainer>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Produtos" component={Products} />
        <Tab.Screen name="Carrinho" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}