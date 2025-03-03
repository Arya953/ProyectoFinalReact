import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { cartItems, total } = useCart();

  return (
    <div>
      <h3>Carrito</h3>
      <p>Items: {cartItems.length}</p>
      <p>Total: ${total}</p>
    </div>
  );
};

export default CartWidget;