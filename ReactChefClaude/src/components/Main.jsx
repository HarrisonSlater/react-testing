import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromGemini } from "../ai"


export default function Main() {

    let [ingredients, setIngredients] = React.useState([]);
    let [recipeShown, setRecipeShown] = React.useState(false);
    let [recipeGenerated, setRecipeGenerated] = React.useState("");
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
      if (recipeGenerated != "" && recipeSection.current != null) {
        recipeSection.current.scrollIntoView({behavior: "smooth"})
      }
    }, [recipeGenerated])

    function handleSubmit(formData) {
      let newIngredient = formData.get("ingredient")
      setIngredients(prev => [...prev, newIngredient])
    }

    function clickGetRecipe() {
      getRecipeFromGemini(ingredients).then(result => {
          console.log(result);
          let recipe = result.text;

          setRecipeGenerated(recipe);
          setRecipeShown(true);
      });
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

      <IngredientsList ref={recipeSection} ingredients={ingredients} recipeCallback={clickGetRecipe} />

      { recipeShown &&
        <ClaudeRecipe text={recipeGenerated}/>
      }
    </main>
  );
}