"use client"
import React, { useEffect } from "react";
import {SearchBar} from "./search-bar.js";
import "GroceryItem.css";
import {Item} from "@/lib/supabase/item";

export const GroceryItem = () => {
    const [isChecked, setIsChecked] = React.useState(false);
    const item = Item;

    const increase = () => {
        this.dispatchEvent(new CustomEvent("increase", { bubbles: true }));
    }
    const decrease = () => {
        this.dispatchEvent(new CustomEvent("decrease", { bubbles: true }));
    }

    const toggleCheck = () => {
        this.dispatchEvent(new CustomEvent("toggle-check", { bubbles: true }));
    }

    const count = this.item.count?.length || 0;

    return (
        <div className="card">
            <div className="div-left">
                <h4 className={isChecked ? "crossed" : item.usedInRecipe ? "recipe-used" : ""}>{item.name}</h4>
                <p>{item.type}</p>
                {item.usedInRecipe
                    ? (<p className="used-in-caption">Used in {item.usedInRecipe}</p>)
                    : null}
            </div>

            <div className="div-right">
                <button onClick={() => this.decrease()}>-</button>

                <div style="text-align: center;">
                    <h4 className="text-color-[CB2127]">{count}</h4>
                    <p>{item.unit}</p>
                </div>

                <button onClick={() => this.increase()}>+</button>

                <button className={isChecked ? "check-btn checked" : "check-btn"} onClick={toggleCheck()}>✔</button>

            </div>
        </div>
    )
}