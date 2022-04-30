import RecipeItem from "./RecipeItem";
import classes from "./RecipeList.module.css";

function RecipeList(props) {
  return (
    <u1 className={classes.list}>
      {props.recipes.map((recipes) => (
        <RecipeItem
          key={recipes.id}
          id={recipes.id}
          image={recipes.image}
          title={recipes.name}
          recipe={recipes.recipe}
        />
      ))}
    </u1>
  );
}

export default RecipeList;
