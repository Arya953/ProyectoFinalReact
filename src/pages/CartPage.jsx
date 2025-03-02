
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartPage.css'


const CartPage = () => {
  const { cartItems, total, removeFromCart } = useCart();

  return (
    <div>
      <h1>Carrito</h1>

      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>

          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>

          <Link to="/checkout">
            <button className="pay-button">Pagar</button>
          </Link>

        </div>
      )}
    </div>
  );
};

export default CartPage;
