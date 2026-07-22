export interface Item {
    id: number;
    created_at?: string;
    name: string;
    singleCost?: number;
    isFav?: boolean;
    unit?: string;
    section?: string;

    expPeriod?: number;
    expDate?: string; // user defined

    quantity?: number; // user defined
    type?: string;

    /*count?: Array<{
        expDate?: string;
        expMonth?: string;
        expDay?: number;
        expYear?: number;
        expOnOpen?: number;
    }>;*/
}

// Helper function to calculate exact expDate if missing
export const ensureExpDate = (item: Item): string => {
  if (item.expDate) return item.expDate;

  // Use created_at timestamp if available, otherwise use right now
  const startDate = item.created_at ? new Date(item.created_at) : new Date();
  const period = item.expPeriod ?? 7; // Default 7 days if unassigned

  startDate.setDate(startDate.getDate() + period);
  return startDate.toISOString().split("T")[0]; // Returns "YYYY-MM-DD"
};