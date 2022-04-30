import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Recipes</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Recipes</Link>
          </li>
          <li>
            <Link to="/add-recipes">Add Recipes</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;