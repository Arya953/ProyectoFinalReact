import React from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  return (
    <div>
      <h2>Bienvenido a la tienda de Star Wars</h2>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
