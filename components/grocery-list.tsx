"use client";

import React, { useEffect, useState } from "react";
import { SearchBar } from "./search-bar.js";
import { GroceryItem } from "./grocery-item.jsx";
import { StoreList } from "./store-list.js";
import "../GroceryList.css";
import { Items as initialItems } from "@/lib/supabase/items";

export const GroceryList = () => {
  // 1. Correct State Declarations
  const [filterType, setFilterType] = useState('all');
  const [checkedIds, setCheckedIds] = useState([]);
  const [view, setView] = useState("grocery");
  const [items, setItems] = useState([]);

  // 2. Client-side Initialization (Replaces Web Component connectedCallback)
  useEffect(() => {
    const initializeItems = async () => {
      const savedItems = localStorage.getItem("grocery-items");
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      } else {
        try {
          const res = await fetch("../../user-items.json");
          const data = await res.json();
          setItems(data.items);
          localStorage.setItem("grocery-items", JSON.stringify(data.items));
        } catch (error) {
          // Fallback to static Supabase items import if fetch fails
          setItems(initialItems || []);
        }
      }
    };
    initializeItems();
  }, []);

  // Helper to persist state updates to localStorage
  const updateAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("grocery-items", JSON.stringify(newItems));
  };

  // 3. Extracted Event Handlers (No more 'this')
  const addItem = (itemDetail) => {
    const newItem = itemDetail.newItem || itemDetail;
    const newItems = [...items, newItem];
    updateAndSaveItems(newItems);
  };

  const goToStores = () => {
    setView("stores");
  };

  const filterByType = (targetItems) => {
    if (filterType === "all") return targetItems;
    return targetItems.filter(
      item => item.type?.toLowerCase() === filterType.toLowerCase()
    );
  };

  const increaseItem = (id) => {
    const updated = items.map(item =>
      item.id === id ? { ...item, count: [...(item.count || []), {}] } : item
    );
    updateAndSaveItems(updated);
  };

  const decreaseItem = (id) => {
    const updated = items
      .map(item =>
        item.id === id ? { ...item, count: item.count.slice(0, -1) } : item
      )
      .filter(item => (item.count?.length || 0) > 0);
    updateAndSaveItems(updated);
  };

  const itemsBySection = (section) => {
    const filtered = items.filter(item => item?.section?.toLowerCase() === section.toLowerCase());
    return filterByType(filtered);
  };

  const getRecipeTitles = () => {
    const seen = new Set();
    items.forEach(item => {
      if (item.recipeTitle) seen.add(item.recipeTitle);
    });
    return Array.from(seen);
  };

  const recipeSection = (title) => {
    return items.filter(item => item.recipeTitle === title);
  };

  const getEstimatedCost = () => {
    return items
      .reduce((sum, item) => sum + (item.singleCost ?? 0) * (item.count?.length || 1), 0)
      .toFixed(2);
  };

  const toggleCheck = (id) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter(cid => cid !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const finishShopping = () => {
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const minExp = new Date();
    minExp.setDate(minExp.getDate() + 7);

    const checkedItems = items
      .filter(item => checkedIds.includes(item.id))
      .map(item => ({
        ...item,
        id: typeof crypto.randomUUID === "function" ? crypto.randomUUID() : Math.random().toString(36).substring(2),
        added: new Date().toISOString(),
        count: (item.count || [{}]).map((c) => {
          const existing = c.expDate ? new Date(c.expDate) : null;
          const expDate = existing && existing > minExp ? existing : minExp;
          return {
            ...c,
            expDate: expDate.toISOString().split("T")[0],
            expMonth: monthNames[expDate.getMonth()],
            expDay: expDate.getDate(),
            expYear: expDate.getFullYear()
          };
        })
      }));

    const pantryItems = JSON.parse(localStorage.getItem("pantry-items") || "[]");
    localStorage.setItem("pantry-items", JSON.stringify([...pantryItems, ...checkedItems]));

    const remainingItems = items.filter(item => !checkedIds.includes(item.id));
    setCheckedIds([]);
    updateAndSaveItems(remainingItems);
  };

  // 4. Render Items directly inside clean React loop (No lit html`` templates)
  const renderReactItems = (itemList) => {
    if (!itemList || itemList.length === 0) {
      return <p className="empty">No Items Yet!</p>;
    }
    return itemList.map(item => (
      <GroceryItem
        key={item.id}
        item={item}
        checked={checkedIds.includes(item.id)}
        onIncrease={() => increaseItem(item.id)}
        onDecrease={() => decreaseItem(item.id)}
        onToggleCheck={() => toggleCheck(item.id)}
      />
    ));
  };

  // 5. Alternate View Condition
  if (view === "stores") {
    return (
      <>
        <button className="store-button" onClick={() => setView("grocery")}>
          ← Back
        </button>
        <StoreList />
      </>
    );
  }

  // 6. Native JSX Return Structure
  return (
    <>
      <div className="top-bar">
        <div className="left-group">
          <div className="cost-banner">Estimated Cost: ${getEstimatedCost()}</div>
          <button className="add-item-btn" onClick={() => addItem({ newItem: "Sample Item" })}>
            Add Item
          </button>
        </div>
        
        {checkedIds.length > 0 && (
          <button className="send-btn" onClick={finishShopping}>
            Send {checkedIds.length} item{checkedIds.length === 1 ? "" : "s"} to Pantry
          </button>
        )}
        
        <button className="store-button" onClick={goToStores}>
          View Stores
        </button>
      </div>

      <div className="row properties-box">
        <div className="mb-4">
          <h3>Pantry</h3>
          {renderReactItems(itemsBySection("pantry"))}
        </div>
        <div className="mb-4">
          <h3>Fridge</h3>
          {renderReactItems(itemsBySection("fridge"))}
        </div>
        <div className="mb-4">
          <h3>Freezer</h3>
          {renderReactItems(itemsBySection("freezer"))}
        </div>

        {getRecipeTitles().map(title => (
          <div 
            key={title}
            style={{ 
              marginBottom: "12px", 
              background: "transparent", 
              border: "2px solid #CB2127", 
              borderRadius: "8px", 
              padding: "12px" 
            }}
          >
            <h2 style={{ color: "#CB2127", marginTop: 0 }}>{title}</h2>
            {renderReactItems(recipeSection(title))}
          </div>
        ))}
      </div>
    </>
  );
};