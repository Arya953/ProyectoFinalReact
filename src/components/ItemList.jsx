import React, { useState, useEffect } from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState({});

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((response) => response.json())
      .then((data) => {
        // Asignar un precio y stock inicial a cada personaje
        const charactersWithPrice = data.results.map((character) => ({
          ...character,
          price: Math.floor(Math.random() * 100) + 50, // Precio aleatorio entre 50 y 150
        }));

        const initialStock = {};
        charactersWithPrice.forEach((character) => {
          initialStock[character.uid] = 5; // Stock inicial de 5 unidades
        });

        setCharacters(charactersWithPrice);
        setStock(initialStock);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los personajes:", error);
        setLoading(false);
      });
  }, []);

  const updateStock = (id, newStock) => {
    setStock((prevStock) => ({
      ...prevStock,
      [id]: newStock,
    }));
  };

  if (loading) return <p>Cargando personajes...</p>;

  return (
    <div className="item-list">
      {characters.slice(0, 10).map((character) => (
        <Item
          key={character.uid}
          character={{
            ...character,
            stock: stock[character.uid], // Pasar el stock actualizado
          }}
          updateStock={updateStock}
        />
      ))}
    </div>
  );
};

export default ItemList;