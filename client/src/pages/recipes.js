import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navbar';
import './styles/recipes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import RemoveItem from '../components/removeItem';

//import nltk from nltk.corpus 


//nltk.download('averaged_perceptron_tagger')

function RecipesPage() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [ingredientToRemove, setIngredientToRemove] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    // Make API request to retrieve recipes based on ingredients
    const getRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
          params: {
            ingredients: ingredients.join(','),
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
    const confirmRemoval = window.confirm(`Are you sure you want to remove "${ingredient}"?`);
    if (confirmRemoval) {
      const updatedIngredients = ingredients.filter((item) => item !== ingredient);
      setIngredients(updatedIngredients);
    }
  };

  const confirmRemoveIngredient = () => {
    const updatedIngredients = ingredients.filter((ingredient) => ingredient !== ingredientToRemove);
    setIngredients(updatedIngredients);
    setShowConfirmation(false);
  };

  const cancelRemoveIngredient = () => {
    setShowConfirmation(false);
  };

  
  
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  return (
    <div>
      <Navbar />
      <div className="recipes-page">
      <div className="filter-icon">
          <FontAwesomeIcon icon={faFilter} />
          </div>
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
              <RemoveItem
                key={index}
                item={ingredient}
                onRemove={handleRemoveIngredient}
              />
            ))}
          </div>
        </div>
        {ingredients.length === 0 ? (
          <div className="no-ingredients-message">
            Ready, set, spice it up! Ingredients? Not yet added! But fear not, flavor awaits. Stay tuned as we whip up a recipe search feast that'll leave you craving for more!
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
