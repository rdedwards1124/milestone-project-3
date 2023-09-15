import React from 'react';

function TheTypeList({ data }) {
  return (
    <div>
      <h1>List of Pokémon:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TheTypeList;