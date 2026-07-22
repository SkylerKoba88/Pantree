"use client";
import React, { useEffect, useState } from "react";
import { getSavedRecipes } from "@/lib/supabase/recipes";
import "../RecipeFilter.css";

const mealTypes = new Set(["breakfast", "lunch", "dinner", "dessert", "snack"]);
const tags = [
  "all",
  "breakfast",
  "lunch",
  "dinner",
  "dessert",
  "snack",
  "dairy-free",
  "peanut-free",
  "treenut-free",
  "gluten-free",
  "vegetarian",
  "pescatarian",
  "vegan",
  "halal"
];

interface RecipeFilterProps {
  onFilterChange?: (filter: string) => void;
}

export const RecipeFilter: React.FC<RecipeFilterProps> = () => {
  const [active, setActive] = useState<string>("all");
  const [savedCount, setSavedCount] = useState<number>(0);

  const refreshSavedCount = async () => {
    const count = await getSavedRecipesCount();
    setSavedCount(count);
  };

  useEffect(() => {
    refreshSavedCount();

    const handleSavedUpdated = () => refreshSavedCount();
    window.addEventListener("saved-recipes-updated", handleSavedUpdated);

    return () => {
      window.removeEventListener("saved-recipes-updated", handleSavedUpdated);
    };
  }, []);

  const selectFilter = (type: string) => {
    setActive(type);
    dispatchEvent(
      new CustomEvent("filter-change", {
        detail: type,
        bubbles: true,
        composed: true
      })
    );
  }

  return (
    <>
    <div className="properties-filter">
      {tags.map(
        tag => (
          <button
            className={[mealTypes.has(tag) ? "meal-type" : "", active === tag ? "is_active" : ""].filter(Boolean).join(" ")}
            onClick={() => selectFilter(tag)}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
          )
      )}
      {savedCount > 0 ? (
        <button
          className={active === "saved" ? "is_active" : ""}
          onClick={() => selectFilter("saved")}
        >
          ♥ Saved
        </button>
      ) : null}
    </div>
    </>
  );
}