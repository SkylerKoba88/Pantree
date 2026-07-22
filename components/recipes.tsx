"use client";
import React, { useState, useEffect } from "react";

import {RecipeItem} from "./recipe-item";

interface Recipe {
  id: number;
  title: string;
  blog: string;
  author: string;
  thumbnail: string;
  url: string;
  mealTypes: string[];
  tags: string[];
  rating: number;
  servings: number;
  totalTime: string;
  ingredients: Item[];
}

interface RecipesProps {
  searchQuery?: string;
  initialFilterSelected?: string;
  recipes: Recipe[];
}

export const Recipes: React.FC<RecipesProps> = ({
  searchQuery = '',
  initialFilterSelected = 'all',
  recipes = []
}) => {
  const [selected, setSelected] = useState<string>(initialFilterSelected);

  useEffect(() => {
    //define filter effect here
  });

  const changeFilter = (filter) => {
    setSelected(filter);
  }

  connectedCallback = () => {
    super.connectedCallback();
    const res = await fetch("../../recipes.json");
    const data = await res.json();
    this.recipes = data.recipes;
    this._savedIds = JSON.parse(localStorage.getItem("saved-recipes") || "[]");
    window.addEventListener("saved-recipes-changed", this._onSavedChanged);
  }

  disconnectedCallback = () => {
    super.disconnectedCallback();
    window.removeEventListener("saved-recipes-changed", this._onSavedChanged);
  }

  const filterByType = (recipes) => {
    if (this.filterTag === "all") return recipes;
    if (this.filterTag === "saved") return recipes.filter(r => this._savedIds.includes(r.id));

    const mealTypeFilters = new Set(["breakfast", "lunch", "dinner", "dessert", "snack"]);
    if (mealTypeFilters.has(this.filterTag)) {
      return recipes.filter(recipe =>
        Array.isArray(recipe.mealTypes) &&
        recipe.mealTypes.some(m => m.toLowerCase() === this.filterTag)
      );
    }

    return recipes.filter(recipe =>
      Array.isArray(recipe.tags) &&
      recipe.tags.some(tag => tag.toLowerCase() === this.filterTag)
    );
  }

  const renderRecipes = (recipes) => {
    if (!recipes || recipes.length === 0) {
      return (<p>No Recipes</p>);
    }

    return recipes.map(
      recipe => (<RecipeItem recipe={recipe}></RecipeItem>)
    )
  }

  const byTag = filterByType(recipes);
  const filtered = searchQuery
    ? byTag.filter(r => r.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    : byTag;

  const sorted = [...filtered].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <section>
      {this.renderRecipes(sorted)}
    </section>
  );
}

  /*static get styles() {
    return css`
      :host {
        display: flex;
      }
      section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 24px;
      }
    `;
  }*/