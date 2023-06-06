import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import './styles/recipes.css';

const RecipesPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddIngredient = () => {
    if (inputValue.trim() !== '') {
      setIngredients((prevIngredients) => [...prevIngredients, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
        try {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&apiKey=YOUR_API_KEY`
          );
          setRecipes(response.data);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
      

    fetchRecipes();
  }, [ingredients, currentPage]);

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
        <div className="recipe-cards">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          ))}
        </div>
        <div className="pagination">
          {currentPage > 1 && <button onClick={handlePreviousPage}>Previous</button>}
          {currentPage < totalPages && <button onClick={handleNextPage}>Next</button>}
        </div>
      </div>
      </div>
    </div>
  );
};

export default RecipesPage;
