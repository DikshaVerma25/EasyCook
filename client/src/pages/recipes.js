import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navbar';
import './styles/recipes.css';

function RecipesPage() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [ingredientToRemove, setIngredientToRemove] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    
    const getRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/findByIngredients',
          {
            params: {
              ingredients: ingredients.join(','),
              number: 8,
              apiKey: 'f5098cf6c3b14c549c3ad15a79fffe14', // Replace with your Spoonacular API key
              ignorePantry: true,
            },
          }
        );

        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (ingredients.length > 0) {
      getRecipes();
    } else {
      setRecipes([]);
    }
  }, [ingredients, recipesPerPage]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddIngredient = () => {
    if (inputValue.trim() !== '') {
      setIngredients((prevIngredients) => [...prevIngredients, inputValue.trim()]);
      setInputValue('');
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredientToRemove(ingredient);
    setShowConfirmation(true);
  };

  const confirmRemoveIngredient = () => {
    const updatedIngredients = ingredients.filter((ingredient) => ingredient !== ingredientToRemove);
    setIngredients(updatedIngredients);
    setShowConfirmation(false);
  };

  const cancelRemoveIngredient = () => {
    setShowConfirmation(false);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Get current recipes based on filter
  const filteredRecipes = filter
    ? recipes.filter((recipe) => recipe.title.toLowerCase().includes(filter.toLowerCase()))
    : recipes;

  // Get current recipes for the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

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
                <button className="remove-ingredient" onClick={() => handleRemoveIngredient(ingredient)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="filter-section">
          <input
            type="text"
            placeholder="Filter recipes"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
        {ingredients.length === 0 ? (
          <div className="no-ingredients-message">
            Ready, set, spice it up! Ingredients? Not yet added! But fear not, flavor awaits.
            Stay tuned as we whip up a recipe search feast that'll leave you craving for more!
          </div>
        ) : (
          <div className="recipe-cards">
            {currentRecipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
              </Link>
            ))}
          </div>
        )}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}
        </div>
        {showConfirmation && (
          <div className="confirmation-popup">
            <div className="confirmation-content">
              <p>Are you sure you want to remove "{ingredientToRemove}"?</p>
              <div className="confirmation-buttons">
                <button className="confirm-btn" onClick={confirmRemoveIngredient}>
                  Yes
                </button>
                <button className="cancel-btn" onClick={cancelRemoveIngredient}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipesPage;
