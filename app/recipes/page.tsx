import { Recipes } from "../../components/recipes.jsx";
import {RecipeSearch} from "../../components/recipe-search-bar.jsx"
import {RecipeFilter} from "../../components/recipe-filter.jsx"
import { getRecipes } from "@/lib/supabase/recipes";
import {Suspense} from "react";

export default function RecipesPage() {

  return (
    <Suspense fallback="Loading...">
      <RecipesLoader />
      <div className="section properties mb-8 mt-8">
        <div className="container">
          <RecipeSearch></RecipeSearch>
          <RecipeFilter></RecipeFilter>
          <Recipes recipes={getRecipes()}></Recipes>
          <section className="section"></section>
        </div>
      </div>
    </Suspense>

  );

  async function RecipesLoader() {
    const recipes = await getRecipes();
    return <Recipes recipes={recipes} />;
  }
}