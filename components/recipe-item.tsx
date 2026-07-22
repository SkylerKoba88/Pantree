"use client";
import React, {useState, useEffect} from 'react';
import './../RecipeItem.css';
import Link from 'next/link';

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
}
interface RecipeItemProps {
    recipe: Recipe;
}

export const RecipeItem: React.FC<RecipeItemProps> = ({
    recipe
}) => {
    const [isSoldOut, setIsSoldOut] = useState(false);

    const renderStars = (rating: number) => {
      const maxStars = 5;

      return (
        <div className="stars">
          ${Array.from({ length: maxStars }, (_, i) => {
            const fill = Math.min(Math.max(rating - i, 0), 1);

            return (
              <span className="star">
                <span className="star-fill">
                  ★
                </span>
                <span className="star-empty">★</span>
              </span>
            );
          })}
        </div>
      );
    }

    const slugify = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  const getRecipeUrl = () => {
    const slug = slugify(recipe.title);
    return `/recipes/${slug}`;
  }

    return(
      <Link href={getRecipeUrl()}>
        <div className="card">
          <div className="">
            <img id="recipe" src={recipe.thumbnail} alt={recipe.title} />

            <div className="credit">
              <Link href={recipe.url}>{recipe.blog}</Link>
              <h5>{recipe.title}</h5>

              <div id="rating">
                {renderStars(recipe.rating)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};