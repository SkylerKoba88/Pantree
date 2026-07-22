"use client";

import React, { useEffect, useState } from "react";
import { SearchBar } from "./search-bar";
import "../LoginButton.css";
import { profileStore } from "./profile-store";
import { onSignOut } from "./profileHandlers";
import { renderAuth } from "./user-auth";

export const LoginButton = ({ mode: initialMode = "create" }) => {
  const [mode, setMode] = useState(initialMode);
  const [showAuth, setShowAuth] = useState(false);

  const [, forceUpdate] = useState({});

  useEffect(() => {
    profileStore.load();

    const handleProfileChange = () => {
      setShowAuth(false);
      forceUpdate({});
    };

    window.addEventListener("profile-changed", handleProfileChange);
    
    return () => {
      window.removeEventListener("profile-changed", handleProfileChange);
    };
  }, []);

  if (profileStore.loading) {
    return <p>Loading...</p>;
  }

  if (profileStore.user) {
    return (
      <>
        <p>Welcome, {profileStore.user.name}</p> 
        <button onClick={onSignOut}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <button 
        onClick={() => setShowAuth(true)} 
        className={mode === "login" ? "login" : "create"}
      >
        {mode === "login" ? "Login" : "Get Started"}
      </button>

      {showAuth && (
        <div className="modal" onClick={() => setShowAuth(false)}>
          <div className="card" onClick={(e) => e.stopPropagation()}> 
            {renderAuth(mode, () => setShowAuth(false))}
          </div>
        </div>
      )}
    </>
  );
};
