import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
export default function Main() {

    let [ingredients, setIngredients] = React.useState([]);
    let [recipeShown, setRecipeShown] = React.useState(false);
    console.log(import.meta.env.VITE_ENV_TEST)

    function handleSubmit(formData) {
      let newIngredient = formData.get("ingredient")
      setIngredients(prev => [...prev, newIngredient])
    }

    function clickGetRecipe() {
      setRecipeShown(true)
    }

  return (
    <main>
      <form action={handleSubmit} className="add-ingredient-form">
        <input 
            name="ingredient"
            aria-label="Add ingredient"
            type="text" 
            placeholder="e.g. Oregano" />
        <button type="submit">Add ingredient</button>
      </form>

      <IngredientsList ingredients={ingredients} recipeCallback={clickGetRecipe} />

      { recipeShown &&
        <ClaudeRecipe />
      }
    </main>
  );
}