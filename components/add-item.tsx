"use client";

import React, { useState } from "react";
import { SearchBar } from "./search-bar";
import "./AddItemButton.css";
import { Item } from "@/lib/supabase/items";

const TYPE_ICONS: Record<string, string> = {
  Dairy: "/images/milk-box.png",
  Meat: "/images/proteins.png",
  Greens: "/images/vegetable.png",
  Fruit: "/images/harvest.png",
  Oil: "/images/olive-oil.png",
  Grains: "/images/rice.png",
};

type ComponentStatus = "closed" | "open" | "add";

interface AddItemButtonProps {
  onAddItem: (newItem: Item) => void;
}

interface SubmissionFormProps {
  selectedItem: Item | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
  getTypeIcon: (type: string) => string;
}

// Calculate initial default date (today + expPeriod or fallback 7 days)
const getDefaultExpDate = (item: Item | null): string => {
  if (item?.expDate) return item.expDate;
  const daysToAdd = item?.expPeriod ?? 7;
  const d = new Date();
  d.setDate(d.getDate() + daysToAdd);
  return d.toISOString().split("T")[0];
};

const SubmissionForm: React.FC<SubmissionFormProps> = ({
  selectedItem,
  onSubmit,
  onBack,
  getTypeIcon,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {selectedItem?.type && (
        <img
          className="item-icon"
          src={getTypeIcon(selectedItem.type)}
          alt={selectedItem.type}
        />
      )}

      <input
        name="name"
        placeholder="Type Name"
        required
        defaultValue={selectedItem?.name ?? ""}
      />

      <select name="type" defaultValue={selectedItem?.type ?? ""}>
        <option value="" disabled>
          Select Type
        </option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Grains">Grains</option>
        <option value="Produce">Produce</option>
        <option value="Spice">Spice</option>
      </select>

      <select name="unit" defaultValue={selectedItem?.unit ?? "each"}>
        <option value="" disabled>
          Select Unit
        </option>
        <option value="bag">Bag</option>
        <option value="box">Box</option>
        <option value="block">Block</option>
        <option value="gallon">Gallon</option>
        <option value="each">Each</option>
        <option value="quart">Quart</option>
        <option value="liter">Liter</option>
        <option value="lbs">lbs</option>
        <option value="floz">floz</option>
        <option value="oz">oz</option>
        <option value="mg">mg</option>
        <option value="g">g</option>
      </select>

      <select name="section" defaultValue={selectedItem?.section ?? "pantry"}>
        <option value="" disabled>
          Select Section
        </option>
        <option value="pantry">Pantry</option>
        <option value="fridge">Fridge</option>
        <option value="freezer">Freezer</option>
      </select>

      <label htmlFor="quantity">Quantity:</label>
      <input
        id="quantity"
        name="quantity"
        type="number"
        min="1"
        defaultValue={selectedItem?.quantity ?? 1}
        required
      />

      <label htmlFor="expDate">Expiration Date: </label>
      <input
        id="expDate"
        name="expDate"
        type="date"
        defaultValue={getDefaultExpDate(selectedItem)}
        required
      />

      <div className="flex justify-space-between">
        <button type="button" className="back-button" onClick={onBack}>
          Back
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export const AddItemButton: React.FC<AddItemButtonProps> = ({ onAddItem }) => {
  const [status, setStatus] = useState<ComponentStatus>("closed");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const openCard = () => setStatus("open");
  const openForm = () => setStatus("add");
  const back = () => setStatus("open");

  const closeCard = () => {
    setStatus("closed");
    setSelectedItem(null);
  };

  const getTypeIcon = (type: string): string => {
    return TYPE_ICONS[type] ?? "/images/default.png";
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;

    const formElements = target.elements as typeof target.elements & {
      name: HTMLInputElement;
      type: HTMLSelectElement;
      unit: HTMLSelectElement;
      section: HTMLSelectElement;
      quantity: HTMLInputElement;
      expDate: HTMLInputElement;
    };

    // Calculate shelf life duration (expPeriod) relative to today for future rewinds
    const selectedDate = new Date(formElements.expDate.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffMs = selectedDate.getTime() - today.getTime();
    const computedExpPeriod = Math.max(
      1,
      Math.ceil(diffMs / (1000 * 60 * 60 * 24))
    );

    const newItem: Item = {
      id: Date.now(), // Numeric ID for consistency
      created_at: new Date().toISOString(),
      name: formElements.name.value,
      type: formElements.type.value,
      unit: formElements.unit.value,
      section: formElements.section.value || "pantry",
      singleCost: selectedItem?.singleCost ?? 0,
      isFav: selectedItem?.isFav ?? false,
      quantity: parseInt(formElements.quantity.value, 10) || 1,
      expDate: formElements.expDate.value,
      expPeriod: computedExpPeriod,
    };

    onAddItem(newItem);
    closeCard();
  };

  return (
    <div>
      <button onClick={openCard}>+ Add Item</button>

      {status !== "closed" && (
        <div className="modal" onClick={closeCard}>
          <div className="card" onClick={(e) => e.stopPropagation()}>
            {status === "open" && (
              <>
                <SearchBar
                  onItemSelected={(item: Item) => {
                    setSelectedItem(item);
                    setStatus("add");
                  }}
                />
                <button onClick={openForm}>New Item</button>
              </>
            )}

            {status === "add" && (
              <SubmissionForm
                selectedItem={selectedItem}
                onSubmit={submit}
                onBack={back}
                getTypeIcon={getTypeIcon}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItemButton;