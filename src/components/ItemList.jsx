// ItemList.jsx
import React, { useState, useEffect } from 'react';
import Item from './Item';
import './ItemList.css'; // Asegúrate de tener el archivo CSS correspondiente

const ItemList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results); // Cargar personajes en el estado
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los personajes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando personajes...</p>;

  return (
    <div className="item-list">
      {characters.slice(0, 10).map((character, index) => (
        <Item key={index} character={character} />
      ))}
    </div>
  );
};

export default ItemList;
