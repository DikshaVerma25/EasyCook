import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import './styles/recipes.css';

function RecipesPage() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Make API request to retrieve recipes based on ingredients
    const getRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
          params: {
            ingredients: ingredients.join(','),
            number: 8,
            apiKey: 'f5098cf6c3b14c549c3ad15a79fffe14',
            ignorePantry: false,
          },
        });

        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (ingredients.length > 0) {
      getRecipes();
    }
  }, [ingredients]);

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
          <div className="input-section">
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
        <div className="recipe-cards">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipesPage;
