import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  if (!item) return <p>Cargando detalles...</p>;

  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <p>Género: {item.gender}</p>
      <p>Año de nacimiento: {item.birth_year}</p>
      <p>Color de cabello: {item.hair_color}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p> 
    </div>
  );
};

export default ItemDetail;
