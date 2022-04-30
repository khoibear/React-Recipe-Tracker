import classes from './RecipeItem.module.css';

function RecipeItem(props)
{
  return <li className={classes.item}>
    <div className={classes.image}>
      <img src={props.image} alt={props.title} />

    </div>
    <div className={classes.content}>
      <h3>{props.title}</h3>
      <p>{props.recipe}</p>
    </div>
    <div className={classes.action}>
      <button>to favorites</button>
    </div>
  </li>
}

export default RecipeItem;