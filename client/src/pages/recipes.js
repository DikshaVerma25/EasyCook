import React, { useState } from 'react';
import Navbar from '../components/navbar';
import "./styles/recipes.css"

function RecipesPage() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddIngredient = () => {
    if (inputValue.trim() !== '') {
      setIngredients((prevIngredients) => [...prevIngredients, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="recipes-page">
        <div className="search-box">
          <input
            type="text"
            placeholder="Add ingredient"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleAddIngredient}>Add</button>
        </div>
        <div className="ingredient-list">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient">
              {ingredient}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipesPage;
