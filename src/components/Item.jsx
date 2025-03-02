import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import { useCart } from '../context/CartContext';


const formatNameForImage = (name) => {
  return name.toLowerCase().replace(/\s+/g, '_'); 
};

const Item = ({ character }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!character) return <p>Cargando personaje...</p>;

  const formattedName = formatNameForImage(character.name);
  const imageUrl = `/images/${formattedName}.jpg`;

  const handleAddToCart = () => {
    if (character.stock > 0) {
      addToCart({
        id: character.url.split('/').filter(Boolean).pop(),
        name: character.name,
        price: character.price, 
        stock: character.stock,
      });

      setIsAdded(true); 
      setTimeout(() => setIsAdded(false), 2000);  
    } else {
      alert("No hay más stock disponible de este personaje");
    }
  };

  return (
    <div className="item">
      <img 
        id="imagen"
        src={imageUrl} 
        alt={character.name} 
        onError={(e) => e.target.src = fallbackImage} 
      />
      <h3>{character.name}</h3>

      {/* Enlace a los detalles del personaje */}
      <Link to={`/item/${character.url.split('/')[5]}`}>Ver detalles</Link>

      {/* Botón para agregar al carrito */}
      <button onClick={handleAddToCart} className="button">Agregar al carrito</button>

      {/* Ventana emergente al agregar un producto al carrito */}
      {isAdded && <div className="popup">Personaje agregado!</div>}
    </div>
  );
};

export default Item;
