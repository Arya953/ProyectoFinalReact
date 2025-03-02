
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css'

const CheckoutPage = () => {
  const { cartItems, total, removeFromCart } = useCart();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();


    if (!name || !lastName || !cardNumber) {
      alert("Por favor, completa todos los campos.");
      return;
    }


    setPaymentSuccess(true);


    setTimeout(() => {
    
      cartItems.forEach(item => removeFromCart(item.id)); 
      setPaymentSuccess(false); 
      navigate("/");  
    }, 2000);
  };

  return (
    <div>
      <h1>Formulario de Pago</h1>

      {paymentSuccess && (
        <div className="popup">¡Pago realizado con éxito!</div>
      )}

      <form onSubmit={handlePayment}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Número de tarjeta:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="pay-button">Pagar</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
