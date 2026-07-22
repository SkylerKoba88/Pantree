import { GroceryItem } from "../../components/grocery-item.jsx";
import { GroceryList } from "../../components/grocery-list.jsx";
import { AddItemButton } from "../../components/add-item-button.jsx";
import { PantryFilter } from "../../components/pantry-filter.jsx";
import { Suspense } from "react";

export default function MyListsPage() {
  
  let selectedFilter = "all";

  return (
    <Suspense fallback="fallback...">
      <div className="section properties mb-8 mt-8">
        <div className="container">

          <GroceryList></GroceryList>

          <div className="section"></div>
        </div>
      </div>
    </Suspense>
  );
}