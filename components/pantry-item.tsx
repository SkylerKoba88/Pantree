"use client";

import React from "react";
import { Item } from "@/lib/supabase/items";
import "../PantryItem.css";

interface PantryItemProps {
  item: Item;
  onIncrease: () => void;
  onDecrease: () => void;
  onEditItem: (item: Item) => void;
  onToggleFav: () => void;
  onRewindItem: () => void;
}

export const PantryItem: React.FC<PantryItemProps> = ({
  item,
  onIncrease,
  onDecrease,
  onEditItem,
  onToggleFav,
  onRewindItem,
}) => {
  // Parse expiration date cleanly (supports ISO string 'YYYY-MM-DD' or fallback calculation)
  const getParsedExpDate = (): Date | null => {
    if (!item?.expDate) return null;
    const parsed = new Date(item.expDate);
    return isNaN(parsed.getTime()) ? null : parsed;
  };

  const expDate = getParsedExpDate();

  const getDiffDays = (): number | null => {
    if (!expDate) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const target = new Date(expDate);
    target.setHours(0, 0, 0, 0);

    const diffMs = target.getTime() - today.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  };

  const diffDays = getDiffDays();

  const isExpired = diffDays !== null && diffDays <= 0;

  const isExpiringSoon = (): boolean => {
    if (diffDays === null || isExpired) return false;
    const section = item?.section?.toLowerCase();
    const threshold = section === "fridge" || section === "freezer" ? 3 : 7;
    return diffDays <= threshold;
  };

  const expiringSoon = isExpiringSoon();
  const quantity = item?.quantity ?? 1;

  // Formatter for readable dates (e.g., "Jul 22, 2026")
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className={`card ${expiringSoon ? "expiring" : ""} ${
        isExpired ? "expired" : ""
      }`}
    >
      <div className="div-left">
        <div className="name-row">
          <h4>{item?.name}</h4>
          <button
            className={item?.isFav ? "icon-btn is-fav" : "icon-btn"}
            onClick={onToggleFav}
            type="button"
          >
            ♥
          </button>

          {item?.isFav && (
            <span className="tooltip-wrap">
              <button
                className="icon-btn"
                onClick={onRewindItem}
                type="button"
              >
                ↺
              </button>
              <span className="tooltip">Reset expiration to shelf life</span>
            </span>
          )}
        </div>

        {(expiringSoon || isExpired) && (
          <span className="expiring-badge">
            {isExpired ? "EXPIRED" : "EXPIRING SOON"}
          </span>
        )}

        {expDate && (
          <p>
            {item?.type} | {isExpired ? "Expired" : "Expires"}{" "}
            {formatDate(expDate)}
          </p>
        )}
      </div>

      <div className="div-right">
        <button onClick={onDecrease} type="button">
          -
        </button>
        <div className="text-center align-items-center">
          <div>
            <h4 className="text-color-[CB2127]">{quantity}</h4>
          </div>
          <p>{item?.unit}</p>
        </div>
        <button onClick={onIncrease} type="button">
          +
        </button>
        <button onClick={() => onEditItem(item)} type="button">
          ✎
        </button>
      </div>
    </div>
  );
};

export default PantryItem;
