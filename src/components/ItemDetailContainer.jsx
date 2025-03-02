import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>Género: {item.gender}</p>
      <p>Año de nacimiento: {item.birth_year}</p>
      <p>Color de cabello: {item.hair_color}</p>
      <p>Precio: ${item.price}</p>  
    </div>
  );
};

export default ItemDetail;
