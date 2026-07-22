import { Pantry } from "../../components/pantry";
import {PantryFilter} from "../../components/pantry-filter";
import {Suspense} from "react";

export default function PantryPage() {
  let selectedFilter = "all";

  return (
    <Suspense fallback="Loading...">
      <div className="section properties mb-8 mt-8">
        <div className="container">

          <PantryFilter></PantryFilter>

            <Pantry></Pantry>

          <div className="section"></div>
        </div>
      </div>
    </Suspense>
    
  );
}