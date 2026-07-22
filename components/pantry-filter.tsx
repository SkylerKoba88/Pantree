"use client";
import React, { useState, useEffect } from "react";
import {Item} from "@/lib/supabase/items";
import "../RecipeFilter.css";

interface PantryFilterProps {
  onFilterChange?: (filter: string) => void;
}

export const PantryFilter: React.FC<PantryFilterProps> = () => {
    const [active, setActive] = useState<string>("all");

    useEffect(() => {

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
            <div className="properties-filter">
                {["all", "dairy", "meat", "grains", "produce"].map(
                    type => (
                    <button
                        className={active === type ? "is_active" : ""}
                        onClick={() => selectFilter(type)}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>
        )

}