"use client";
import React, { useEffect } from "react";
import {SearchBar} from "./search-bar.js";
import "AddItemButton.css";

const TYPE_ICONS = {
    Dairy: '/images/milk-box.png',
    Meat: '/images/proteins.png',
    Greens: '/images/vegetable.png',
    Fruit: '/images/harvest.png',
    Oil: '/images/olive-oil.png',
    Grains: '/images/rice.png'
}

export const AddItemButton = () => {
    const [status, setStatus] = React.useState("closed");
    const [selectedItem, setSelectedItem] = React.useState(null);

    const openCard = () => {
        setStatus("open");
    };

    const openForm = () => {
        setStatus("add");
    };

    const back = () => {
        setStatus("open");
    };

    const closeCard = () => {
        setStatus("closed");
    };

    const getTypeIcon = (type) => {
        return TYPE_ICONS[type] ?? 'assets/images/default.png';
    };

    const submit = (e) => {
        e.preventDefault();

        const form = e.target;

        //get the exact info from the date
        const expDateStr = form.expDate.value;
        const expDateObj = new Date(expDateStr);
        
        const expYear = expDateObj.getFullYear();
        const expMonth = expDateObj.getMonth() + 1;
        const expDay = expDateObj.getDate();  

        const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const expMonthName = monthNames[expDateObj.getMonth()];


        const item = {
        id: crypto.randomUUID(),
        name: form.name.value,
        type: form.type.value,
        unit: form.unit.value,
        section: form.section.value || "pantry",
        added: new Date(),
        singleCost: 0,
        isFav: false,
        count: [
            {
                expDate: form.expDate.value,
            expMonth: expMonthName,
            expDay: expDay,
            expYear: expYear,
            expOnOpen: 7
            }
        ]
        };

        this.closeCard();

        this.dispatchEvent(new CustomEvent("add-item", {
            detail: {
                newItem: item,
                originalItemId: this.selectedItem?.id
            },
            bubbles: true,
            composed: true
        }));
    }

    const onItemSelected = (e) => {
        this.selectedItem = e.detail;
        this.status = "add"; // reuse the form view
    };

    const defaultExpDate = (item) => {
        const existing = item?.count?.[0]?.expDate;
        if (existing) return existing;
        const expOnOpen = item?.count?.[0]?.expOnOpen ?? 7;
        const d = new Date();
        d.setDate(d.getDate() + expOnOpen);
        return d.toISOString().split("T")[0];
    }

    const SubmissionForm = ({ selectedItem, onSubmit, onBack }) => {
        const defaultExpDate = (item) => {
            const existing = item?.count?.[0]?.expDate;
            if (existing) return existing;
            const expOnOpen = item?.count?.[0]?.expOnOpen ?? 7;
            const d = new Date();
            d.setDate(d.getDate() + expOnOpen);
            return d.toISOString().split("T")[0];
        }

        return (
            <form onSubmit={onSubmit}>
                
                {selectedItem?.type && (
                    <>
                        <img
                            className="item-icon"
                            src={getTypeIcon(selectedItem.type)}
                            alt={selectedItem.type}
                        />
                    </>
                )}
                <input name="name" placeholder="Type Name" required value={selectedItem?.name ?? ""} />
                <select name="type">
                    <option value="" disabled selected>Select Type</option>
                    <option value="Dairy" selected={selectedItem?.type === "Dairy"}>Dairy</option>
                    <option value="Meat" selected={selectedItem?.type === "Meat"}>Meat</option>
                    <option value="Grains" selected={selectedItem?.type === "Grains"}>Grains</option>
                    <option value="Produce" selected={selectedItem?.type === "Produce"}>Produce</option>
                    <option value="Spice" selected={selectedItem?.type === "Spice"}>Spice</option>
                </select>

                <select name="unit">
                    <option value="" disabled selected>Select Unit</option>
                    <option value="bag" selected={selectedItem?.unit === "bag"}>Bag</option>
                    <option value="box" selected={selectedItem?.unit === "box"}>Box</option>
                    <option value="block" selected={this.selectedItem?.unit === "block"}>Block</option>
                    <option value="gallon" selected={this.selectedItem?.unit === "gallon"}>Gallon</option>
                    <option value="each" selected={this.selectedItem?.unit === "each"}>Each</option>
                    <option value="quart" selected={this.selectedItem?.unit === "quart"}>Quart</option>
                    <option value="liter" selected={this.selectedItem?.unit === "liter"}>Liter</option>
                    <option value="lbs" selected={this.selectedItem?.unit === "lbs"}>lbs</option>
                    <option value="floz" selected={this.selectedItem?.unit === "floz"}>floz</option>
                    <option value="oz" selected={this.selectedItem?.unit === "oz"}>oz</option>
                    <option value="mg" selected={this.selectedItem?.unit === "mg"}>mg</option>
                    <option value="g" selected={this.selectedItem?.unit === "g"}>g</option>
                </select>

                <select name="section">
                    <option value="" disabled selected>Select Section</option>
                    <option value="pantry" selected={this.selectedItem?.section === "pantry"}>Pantry</option>
                    <option value="fridge" selected={this.selectedItem?.section === "fridge"}>Fridge</option>
                    <option value="freezer" selected={this.selectedItem?.section === "freezer"}>Freezer</option>
                </select>

                <label>Expiration Date: </label>
                <input name="expDate" type="date" value={this.defaultExpDate(this.selectedItem)}/>

                <div style="display: flex; justify-content: space-between;">
                    <button className="back-button" onClick={back}>Back</button>
                    <button type="submit">Save</button>
                </div>
            
            {status === "add" ? (
                <div className="modal" onClick={closeCard()}>
                    <div className="card" onClick={e => e.stopPropagation()}>
                        
                    </div>
                </div>
            ): null
            }
            </form>
        )
    }

    return (
        <div>
            <button onClick={openCard}>+ Add Item</button>
            {status !== "closed" && (
                <div className="modal" onClick={closeCard}>
                    <div className="card" onClick={(e) => e.stopPropagation()}>
                        {status === "open" && (
                            <>
                                <SearchBar onItemSelected={setSelectedItem} />
                                <button onClick={this.openForm}>New Item</button>
                            </>
                            
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};