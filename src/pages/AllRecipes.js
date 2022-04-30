import RecipeList from "../components/recipes/RecipeList";

const DUMMY_DATA = [
  {
    id: "r1",
    name: "Bun Bo Hue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    recipe: "None comeback later!",
  },
  {
    id: "r2",
    name: "Pho",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    recipe: "None comeback later!",
  },
  {
    id: "r3",
    name: "Banh mi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    recipe: "None comeback later!",
  },
];

function AllRecipesPage() {
  return (
    <section>
      <h1>All Recipes</h1>
      <RecipeList recipes={DUMMY_DATA}/>
    </section>
  );
}

export default AllRecipesPage;
