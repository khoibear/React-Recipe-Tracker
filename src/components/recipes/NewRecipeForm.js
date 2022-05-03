import { useRef } from "react";
import Card from "../ui/Card";
import classes from './NewRecipeForm.module.css'

function NewRecipeForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const recipeInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const imagedName = imageInputRef.current.value;
    const recipeName = recipeInputRef.current.value;

    const recipeData = {
      name: enteredName,
      image: imagedName,
      recipe: recipeName,
    };

    props.onAddRecipe(recipeData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name"> Recipe Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Add Pic URL</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="recipe"> Description</label>
          <textarea required id="recipe" rows="5" ref={recipeInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Recipe</button>
        </div>
      </form>
    </Card>
  );
}

export default NewRecipeForm;