import React, { useState, useEffect } from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState({});


  const characterDetails = {
    "1": { price: 100, stock: 5 }, 
    "2": { price: 150, stock: 3 }, 
    "3": { price: 200, stock: 2 }, 
    "4": { price: 120, stock: 4 }, 
    "5": { price: 180, stock: 10 }, 
    "6": { price: 180, stock: 5}, 
    "7": { price: 180, stock: 9 }, 
    "8": { price: 180, stock: 3 }, 
    "9": { price: 180, stock: 12 }, 
    "10": { price: 180, stock: 16 }, 

  };

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((response) => response.json())
      .then((data) => {
        const charactersWithDetails = data.results.map((character) => ({
          ...character,
          price: characterDetails[character.uid]?.price || 100, 
          stock: characterDetails[character.uid]?.stock || 0, 
        }));


        const initialStock = {};
        charactersWithDetails.forEach((character) => {
          initialStock[character.uid] = character.stock;
        });

        setCharacters(charactersWithDetails);
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
            stock: stock[character.uid], 
          }}
          updateStock={updateStock}
        />
      ))}
    </div>
  );
};

export default ItemList;