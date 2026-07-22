"use client";
import React, { useState, useEffect } from "react";
import "../SearchBar.css"
import {Item} from "@/lib/supabase/items";
import { createClient } from "@/lib/supabase/client";

interface SearchBarProps {
    onItemSelected: (item: Item) => void;
}

const supabase = createClient();

export const SearchBar: React.FC<SearchBarProps> = ({onItemSelected}) => {
    const [query, setQuery] = useState<string>("");
    const [items, setItems] = useState<Item[]>([]);
    const [filtered, setFiltered] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);

            const {data, error} = await supabase.from('items').select('*');
            if (error) {
                console.error("Error fetching items from Supabase:", error.message);
            } else if (data) {
                setItems(data as Item[]);
                setFiltered(data as Item[]);
            }

            setLoading(false);
        };
        fetchItems();
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);

        setFiltered(items.filter((item) => item.name.toLowerCase().includes(value)));
    }
    return (
        <>
        <div className="wrapper">
            <span><img src="/assets/images/search.svg" alt="Search Icon"/></span>
            <input type="text" placeholder="Search..." value={query} onChange={handleInput}/>
        </div>
        <div>
            {loading && <p className="loading-text">Loading items...</p>}
            {!loading && query ? (
                <ul>
                    {filtered.map((item) => (
                        <li key={item.id} onClick={() => onItemSelected(item)}>{item.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
        </>
    );
}