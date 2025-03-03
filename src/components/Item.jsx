import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import { useCart } from '../context/CartContext';

const formatNameForImage = (name) => {
  return name.toLowerCase().replace(/\s+/g, '_');
};

const Item = ({ character, updateStock }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!character) return <p>Cargando personaje...</p>;

  const formattedName = formatNameForImage(character.name);
  const imageUrl = `/images/${formattedName}.jpg`;

  const handleAddToCart = () => {
    if (character.stock > 0) {
      addToCart({
        id: character.uid,
        name: character.name,
        price: character.price,
        stock: character.stock,
      });

      // Actualizar el stock en el estado global
      updateStock(character.uid, character.stock - 1);

      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    } else {
      alert("No hay más stock disponible de este personaje");
    }
  };

  return (
    <div className="item">
      <img id="imagen" src={imageUrl} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Precio: ${character.price}</p>
      <Link to={`/item/${character.uid}`}>Ver detalles</Link>
      <button onClick={handleAddToCart} className="button">Agregar al carrito</button>
      {isAdded && <div className="popup">Personaje agregado!</div>}
      <p>Stock: {character.stock}</p>
    </div>
  );
};

export default Item;