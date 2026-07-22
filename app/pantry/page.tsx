import { AppPantry } from "../../components/pantry.jsx";
import {PantryFilter} from "../../components/pantry-filter.jsx";
import {Suspense} from "react";

export default function PantryPage() {
  let selectedFilter = "all";

  return (
    <Suspense fallback="Loading...">
      <div className="section properties mb-8 mt-8">
        <div className="container">

          <PantryFilter></PantryFilter>

            <AppPantry></AppPantry>

          <div className="section"></div>
        </div>
      </div>
    </Suspense>
    
  );
}