import Card from "../ui/Card";
import classes from './NewRecipeForm.module.css'

function NewRecipeForm(){
  return <Card>
    <form className={classes.form}>
      <div className={classes.control}> 
        <label htmlFor="name"> Recipe Name</label>
        <input type="text" required id="name" />
      </div>
      <div className={classes.control}> 
        <label htmlFor="image"> Add Pic URL</label>
        <input type="url" required id="image" />
      </div>
      <div className={classes.control}> 
        <label htmlFor="recipe"> Description</label>
        <textarea required id="recipe" rows='5' />
      </div>
      <div className={classes.actions}>
        <button>Add Recipe</button>
      </div>
    </form>
  </Card>
}

export default NewRecipeForm;