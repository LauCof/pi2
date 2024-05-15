import React from 'react';
import "./Card.css";


const Card = ({ product }) => {
  if (!product || !product.id || !product.name || !product.description || !product.price || !product.imageUrl) {
    return null; // O puedes renderizar un componente de carga o un mensaje de error
  }

  const { id, name, description, price, imageUrl } = product;

  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Precio: ${price}</p>
      </div>
    </div>
  );
};

export default Card;