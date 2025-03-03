import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);

      if (itemExists) {

        if (itemExists.quantity < item.stock) {
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          alert("No hay suficiente stock de este personaje");
          return prevCart;
        }
      } else {

        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    setTotal((prevTotal) => prevTotal + item.price);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      const removedItem = prevItems.find((item) => item.id === itemId);

      if (removedItem) {
        setTotal((prevTotal) => prevTotal - (removedItem.price * removedItem.quantity));
      }

      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};