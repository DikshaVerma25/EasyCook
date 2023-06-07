import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FullRecipe() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Make API request to retrieve the full recipe details
    const getFullRecipe = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/{recipeId}/information',
          {
            params: {
              apiKey: 'YOUR_API_KEY', // Replace with your Spoonacular API key
            },
          }
        );

        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the full recipe details when the component mounts

    getFullRecipe();
  }, []);

  // Render the recipe details
  return (
    <div>
      {/* Display the recipe details */}
      {recipe && (
        <div>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.instructions}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default FullRecipe;
