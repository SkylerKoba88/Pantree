"use client";

import React from "react";
import "./AddItemButton.css"; 
import "../PantryItem.css";

export const PantryItem = ({ 
  item, 
  onIncrease, 
  onDecrease, 
  onEdit, 
  onToggleFav, 
  onRewind 
}) => {

  const isExpSoon = (exp) => {
    if (!exp) return false;
    const expDate = new Date(`${exp.expMonth} ${exp.expDay}, ${exp.expYear}`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const diffMs = expDate - today;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    
    const section = item?.section?.toLowerCase();
    const threshold = (section === "fridge" || section === "freezer") ? 3 : 7;
    
    return diffDays >= 0 && diffDays <= threshold;
  };

  const isExp = (exp) => {
    if (!exp) return false;
    const expDate = new Date(`${exp.expMonth} ${exp.expDay}, ${exp.expYear}`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const diffMs = expDate - today;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    
    return diffDays <= 0;
  };

  const count = item?.count?.length || 0;
  const exp = item?.count?.[0] || null;
  const expiringSoon = isExpSoon(exp);
  const expired = isExp(exp);

  return (
    <div className={`card ${expiringSoon ? 'expiring' : ''} ${expired ? 'expired' : ''}`}>
      <div className="div-left">
        <div className="name-row">
          <h4>{item?.name}</h4>
          <button 
            className={item?.isFav ? "icon-btn is-fav" : "icon-btn"} 
            onClick={onToggleFav}
          >
            ♥
          </button>
          
          {item?.isFav && (
            <span className="tooltip-wrap">
              <button className="icon-btn" onClick={onRewind}>↺</button>
              <span className="tooltip">Reset expiration to shelf life</span>
            </span>
          )}
        </div>

        {(expiringSoon || expired) && (
          <span className="expiring-badge">
            {expired ? 'EXPIRED' : 'EXPIRING SOON'}
          </span>
        )}

        {exp && (
          (expiringSoon || expired) ? (
            <p>
              {item?.type} | {expired ? 'Expired' : 'Expires'} {exp.expMonth} {exp.expDay}
            </p>
          ) : (
            <p>{item?.type} | Expires on {exp.expMonth} {exp.expDay}, {exp.expYear}</p>
          )
        )}
      </div>

      <div className="div-right">
        <button onClick={onDecrease}>-</button>
        <div className="text-center align-items-center">
          <div><h4 className="text-color-[CB2127]">{count}</h4></div>
          <p>{item?.unit}</p>
        </div>
        <button onClick={onIncrease}>+</button>
        <button onClick={() => onEdit(item)}>✎</button>
      </div>
    </div>
  );
};
