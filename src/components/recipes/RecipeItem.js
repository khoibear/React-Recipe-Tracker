import classes from "./RecipeItem.module.css";
import Card from '../ui/Card';

function RecipeItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.recipe}</p>
        </div>
        <div className={classes.actions}>
          <button>to favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
