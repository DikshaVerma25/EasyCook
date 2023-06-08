import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FullRecipePage({ match }) {
  const [recipe, setRecipe] = useState(null);
  const recipeId = match.params.id;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions`,
          {
            params: {
<<<<<<< HEAD
              apiKey: 'f5098cf6c3b14c549c3ad15a79fffe14', 
=======
              apiKey: 'f5098cf6c3b14c549c3ad15a79fffe14', // Replace with your Spoonacular API key
>>>>>>> 6280830f0f51e2012de21c61632fa723fb0d08e4
            },
          }
        );
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe[0].name}</h1>
      <ol>
        {recipe[0].steps.map((step) => (
          <li key={step.number}>
            <h3>Step {step.number}</h3>
            <p>{step.step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FullRecipePage;
