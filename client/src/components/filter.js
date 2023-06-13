import React, { useState } from 'react';


function Filter({ recipes, setFilteredRecipes }) {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterValue(value);

   
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="filter">
      <input type="text" placeholder="Filter recipes..." value={filterValue} onChange={handleFilterChange} />
    </div>
  );
}

export default Filter;
