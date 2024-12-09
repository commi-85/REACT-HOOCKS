import React, { useState } from "react";

const FiltreFilm = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Titre du film"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        
      />
      <input
        type="number"
        placeholder="Note minimale"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        
        min="0"
        max="5"
      />
      <button onClick={handleFilter} >
        Filtrer
      </button>
    </div>
  );
};



export default FiltreFilm;
