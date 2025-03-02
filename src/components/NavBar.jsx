import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function  NavBar (){
  return (
    <nav className='Nav'>
      <h1>Bienvenidos a la galaxia</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};


