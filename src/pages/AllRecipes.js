import { useState, useEffect } from "react";
import RecipeList from "../components/recipes/RecipeList";


//add error handling
function AllRecipesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipes, setLoadedRecipes] = useState([]);

  useEffect(()=>{
    fetch("https://react-recipe-page-default-rtdb.firebaseio.com/recipes.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const recipes =  [];
for (const key in data){
  const  recipe = {
    id:key,  
    ...data[key]
  };
  recipes.push(recipe);
}

      setIsLoading(false);
      setLoadedRecipes(recipes);
    });

  },[]);


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Recipes</h1>
      <RecipeList recipes={loadedRecipes} />
    </section>
  );
}

export default AllRecipesPage;
