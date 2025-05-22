import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function TGCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((oldItems) => {
      const index = oldItems.findIndex(item => item.product.id === product.id);
      if (index !== -1) {
        const newItems = [...oldItems];
        newItems[index].quantity += 1;
        return newItems;
      } else {
        return [...oldItems, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(oldItems => oldItems.filter(item => item.product.id !== productId));
  };

  const changeQuantity = (productId, delta) => {
    setCartItems(oldItems => {
      return oldItems.map(item => {
        if (item.product.id === productId) {
          const newQuantity = item.quantity + delta;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      });
    });
  };

  const itemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, changeQuantity, itemsCount }}
    >
      {children}
    </CartContext.Provider>
  );
}
