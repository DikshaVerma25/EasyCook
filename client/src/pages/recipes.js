import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    // Make API request to retrieve recipes based on ingredients
    const getRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
          params: {
            ingredients: ingredients.join(','),
            apiKey: 'f5098cf6c3b14c549c3ad15a79fffe14',
            ignorePantry: true,
          },
        });

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

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
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
                <button className="remove-ingredient" onClick={() => handleRemoveIngredient(ingredient)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="recipe-cards">
          {currentRecipes.length > 0 ? (
            currentRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card"
                onClick={() => handleRecipeClick(recipe.id)}
              >
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
              </div>
            ))
          ) : (
            <div className="no-recipes-message">
              Ready, set, spice it up! Ingredients? Not yet added! But fear not, flavor awaits.
              Stay tuned as we whip up a recipe search feast that'll leave you craving for more!
            </div>
          )}
        </div>
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
      </div>
    </div>
  );
}

export default RecipesPage;
