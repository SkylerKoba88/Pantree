"use client";

import React, { useState, useEffect } from "react";
import { Item } from "@/lib/supabase/items";
import { PantryItem } from "./pantry-item";
import { AddItemButton } from "./add-item";
import "./Pantry.css";

interface PantryProps {
  filterType?: string;
}

export const Pantry: React.FC<PantryProps> = ({ filterType = "all" }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<Item | null>(null);

  // Initial Load: Local Storage or JSON fallback
  useEffect(() => {
    const loadItems = async () => {
      const saved = localStorage.getItem("pantry-items");
      if (saved) {
        try {
          const parsed: Item[] = JSON.parse(saved);
          // Ensure every item has a quantity fallback of at least 1
          setItems(parsed.map((item) => ({ ...item, quantity: item.quantity ?? 1 })));
        } catch (e) {
          console.error("Failed to parse pantry items from localStorage", e);
        }
      } else {
        try {
          const res = await fetch("/user-items.json");
          const data = await res.json();
          if (data?.items) {
            const formatted = data.items.map((item: Item) => ({
              ...item,
              quantity: item.quantity ?? 1,
            }));
            setItems(formatted);
            localStorage.setItem("pantry-items", JSON.stringify(formatted));
          }
        } catch (e) {
          console.error("Failed to fetch initial items", e);
        }
      }
    };

    loadItems();
  }, []);

  const saveItems = (updatedItems: Item[]) => {
    setItems(updatedItems);
    localStorage.setItem("pantry-items", JSON.stringify(updatedItems));
  };

  // --- Quantity Actions ---

  const addItem = (newItem: Item) => {
    const itemWithQuantity: Item = {
      ...newItem,
      quantity: newItem.quantity ?? 1,
    };
    saveItems([...items, itemWithQuantity]);
  };

  const increaseItem = (id: number) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item
    );
    saveItems(updated);
  };

  const decreaseItem = (id: number) => {
    const updated = items
      .map((item) => {
        if (item.id !== id) return item;
        const currentQty = item.quantity ?? 1;
        return { ...item, quantity: currentQty - 1 };
      })
      .filter((item) => (item.quantity ?? 0) > 0); // Automatically remove when quantity hits 0

    saveItems(updated);
  };

  const toggleFav = (id: number) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, isFav: !item.isFav } : item
    );
    saveItems(updated);
  };

  const rewindItem = (id: number) => {
    const updated = items.map((item) => {
      if (item.id !== id) return item;
      const daysToAdd = item.expPeriod ?? 7;
      const newExp = new Date();
      newExp.setDate(newExp.getDate() + daysToAdd);

      return {
        ...item,
        expDate: newExp.toISOString().split("T")[0],
      };
    });
    saveItems(updated);
  };

  // --- Expiration Checks ---

  const isExpired = (item: Item): boolean => {
    if (!item.expDate) return false;
    const expDate = new Date(item.expDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return expDate.getTime() - today.getTime() <= 0;
  };

  const removeExpired = () => {
    const updated = items.filter((item) => !isExpired(item));
    setShowConfirm(false);
    saveItems(updated);
  };

  const getExpDateValue = (item: Item | null): string => {
    if (!item) return "";
    if (item.expDate) return item.expDate;

    const daysToAdd = item.expPeriod ?? 7;
    const d = new Date();
    d.setDate(d.getDate() + daysToAdd);
    return d.toISOString().split("T")[0];
  };

  // --- Edit Submission ---

  const submitEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editItem) return;

    const formData = new FormData(e.currentTarget);

    const updated: Item = {
      ...editItem,
      name: (formData.get("name") as string) || editItem.name,
      type: (formData.get("type") as string) || editItem.type,
      unit: (formData.get("unit") as string) || editItem.unit,
      section: (formData.get("section") as string) || editItem.section,
      quantity: Number(formData.get("quantity")) || editItem.quantity || 1,
      expDate: formData.get("expDate") as string,
    };

    const updatedItems = items.map((item) =>
      item.id === updated.id ? updated : item
    );

    setEditItem(null);
    saveItems(updatedItems);
  };

  // --- Filtering ---

  const itemsBySection = (section: string) => {
    return items
      .filter((item) => item.section?.toLowerCase() === section.toLowerCase())
      .filter((item) =>
        filterType === "all"
          ? true
          : item.type?.toLowerCase() === filterType.toLowerCase()
      );
  };

  const renderItems = (sectionItems: Item[]) => {
    if (!sectionItems || sectionItems.length === 0) {
      return <p className="empty">No Items Yet!</p>;
    }

    return sectionItems.map((item) => (
      <PantryItem
        key={item.id}
        item={item}
        onIncrease={() => increaseItem(item.id)}
        onDecrease={() => decreaseItem(item.id)}
        onEditItem={(selected) => setEditItem(selected)}
        onToggleFav={() => toggleFav(item.id)}
        onRewindItem={() => rewindItem(item.id)}
      />
    ));
  };

  return (
    <>
      <div className="top-bar">
        <AddItemButton onAddItem={addItem} />
        {items.some((item) => isExpired(item)) && (
          <button className="remove-btn" onClick={() => setShowConfirm(true)}>
            Remove Expired Items
          </button>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="modal" onClick={() => setShowConfirm(false)}>
          <div className="confirm-card" onClick={(e) => e.stopPropagation()}>
            <h3>Remove Expired Items?</h3>
            <p>This will permanently delete all expired items from your pantry.</p>
            <div className="confirm-actions">
              <button className="confirm-no" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
              <button className="confirm-yes" onClick={removeExpired}>
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editItem && (
        <div className="modal" onClick={() => setEditItem(null)}>
          <div className="edit-card" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={submitEdit}>
              <input
                name="name"
                placeholder="Item Name"
                required
                defaultValue={editItem.name ?? ""}
              />

              <label>Quantity:</label>
              <input
                name="quantity"
                type="number"
                min="1"
                required
                defaultValue={editItem.quantity ?? 1}
              />

              <select name="type" defaultValue={editItem.type ?? ""}>
                <option value="" disabled>Select Type</option>
                <option value="Dairy">Dairy</option>
                <option value="Meat">Meat</option>
                <option value="Grains">Grains</option>
                <option value="Produce">Produce</option>
                <option value="Spice">Spice</option>
              </select>

              <select name="unit" defaultValue={editItem.unit ?? ""}>
                <option value="" disabled>Select Unit</option>
                <option value="bag">Bag</option>
                <option value="box">Box</option>
                <option value="block">Block</option>
                <option value="gallon">Gallon</option>
                <option value="each">Each</option>
                <option value="lbs">lbs</option>
              </select>

              <select name="section" defaultValue={editItem.section ?? ""}>
                <option value="" disabled>Select Section</option>
                <option value="pantry">Pantry</option>
                <option value="fridge">Fridge</option>
                <option value="freezer">Freezer</option>
              </select>

              <label>Expiration Date:</label>
              <input
                name="expDate"
                type="date"
                defaultValue={getExpDateValue(editItem)}
              />

              <div className="edit-actions">
                <button
                  type="button"
                  className="edit-cancel"
                  onClick={() => setEditItem(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="edit-save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pantry Display Sections */}
      <div className="row properties-box">
        <div style={{ marginBottom: "12px" }}>
          <h2 style={{ color: "#CB2127" }}>Pantry</h2>
          {renderItems(itemsBySection("pantry"))}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <h2 style={{ color: "#CB2127" }}>Fridge</h2>
          {renderItems(itemsBySection("fridge"))}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <h2 style={{ color: "#CB2127" }}>Freezer</h2>
          {renderItems(itemsBySection("freezer"))}
        </div>
      </div>
    </>
  );
};

export default Pantry;