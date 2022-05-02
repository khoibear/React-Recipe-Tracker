import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipesPage from "./pages/AddRecipes";
import AllRecipesPage from "./pages/AllRecipes";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AllRecipesPage />}></Route>
          <Route path="/add-recipes" element={<AddRecipesPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
