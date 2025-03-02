import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

const characterData = {
  "1": { price: 100, stock: 10 },
  "2": { price: 150, stock: 5 },
  "3": { price: 120, stock: 8 },
  "4": { price: 160, stock: 12 },
  "5": { price: 230, stock: 5 },
  "6": { price: 145, stock: 6 },
  "7": { price: 100, stock: 8 },
  "8": { price: 135, stock: 9 },
  "9": { price: 110, stock: 8 },
  "10": { price: 350, stock: 3 },
};

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchItemDetails = async () => {
        try {
          setLoading(true);

          const idNumber = parseInt(id, 10); 
          if (isNaN(idNumber)) {
            setError('ID inválido');
            setLoading(false);
            return;
          }

          const url = `https://swapi.dev/api/people/${idNumber}/`;

          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Error al cargar los detalles');
          }

          const data = await response.json();

          
          const characterDetails = characterData[id]; 
          if (characterDetails) {
            setItem({
              ...data,
              price: characterDetails.price,  
              stock: characterDetails.stock,  
            });
          } else {
            setError('Este personaje no tiene detalles de precio o stock');
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchItemDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!item) {
    return <p>Personaje no encontrado</p>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailPage;
