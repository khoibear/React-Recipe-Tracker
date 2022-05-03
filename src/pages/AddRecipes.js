import { useHistory } from "react-router-dom";

import NewRecipeForm from "../components/recipes/NewRecipeForm";

function AddRecipesPage() {
  function addRecipeHandler(recipeData) {
    //change to use 3rd party package axios in future
    fetch(
      "https://react-recipe-page-default-rtdb.firebaseio.com/recipes.json",
      {
        method: "POST",
        body: JSON.stringify(recipeData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(()=>{
      window.history.go();
    });
  }

  return (
    <section>
      <h1>Add New Recipes Here</h1>
      <NewRecipeForm onAddRecipe={addRecipeHandler} />
    </section>
  );
}

export default AddRecipesPage;
