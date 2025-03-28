import React from 'react'

const ItemListContainer = ({ items, mensaje }) => {

  return (
    <div>
      <h2>{mensaje}</h2>
      <ul>
        {items.map((items, index,) =>
          <li key={index}>{items}</li>)}

      </ul>
      </div>
  );
}

export default ItemListContainer;