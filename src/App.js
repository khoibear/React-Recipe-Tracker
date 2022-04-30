import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipesPage from "./pages/AddRecipes";
import AllRecipesPage from "./pages/AllRecipes";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (

    <BrowserRouter>
        <MainNavigation />
      <Routes>
        <Route path="/" element={<AllRecipesPage />}></Route>
        <Route path="/add-recipes" element={<AddRecipesPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
