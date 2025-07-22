import React from 'react';
export default function Main() {

    let [ingredients, setIngredients] = React.useState([]);
    let ingredientsList = ingredients.map(i => <li>{i}</li>)


    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients([...ingredients, newIngredient])
    }


  return (
    <main>
      <form onSubmit={handleSubmit} class="add-ingredient-form">
        <input 
            name="ingredient"
            aria-label="Add ingredient"
            type="text" 
            placeholder="e.g. Oregano" />
        <button type="submit">Add ingredient</button>
      </form>
      <ul>
        {ingredientsList}
      </ul>
    </main>
  );
}