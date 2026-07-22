
import React from 'react';
import Link from 'next/link';
import { LoginButton } from "../components/login-button.jsx";
import { profileStore } from "../components/profile-store.jsx";
import { pwaInstall, triggerInstall } from "../components/pwa-install.js";

export default function Home() {
  const user = profileStore.user;
  
  return (
    <main className="min-h-screen px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="display: flex; flex-direction: column; gap: 12px; align-items: center; text-align: center; margin: 24px;">
        <img src="./assets/images/Logo.svg" className="width: 64px"/>
        <h1 className="color: #CB2127">Pantree</h1>
      </div>

      <div>
        {user ? (
          <>
          <div className="text-center m-6">
            <h4>Welcome back, {user.name}</h4>
          </div>

          <ul className="nav-list">
            <li>
              <Link href="#/pantry">
                <img src="./assets/images/pantry-white.svg" className="h-5 pr-2"/>
                My Pantry
              </Link>
            </li>
            <li>
              <Link href="#/my-lists">
                <img src="./assets/images/list-white.svg" className="h-5 pr-2"/>
                My Lists
              </Link>
            </li>
            <li>
              <Link href="#/recipes">
                <img src="./assets/images/recipe-white.svg" className="h-5 pr-2"/>
                Recipes
              </Link>
            </li>
            <li>
              <Link href="#/profile">
                <img src="./assets/images/profile-white.svg" className="h-5 pr-2"/>
                Profile
              </Link>
            </li>
          </ul>
          <div className="mb-6"></div>
          </>
        ) : (
          <>
          <div className="text-center">
                <h4>Welcome to Pantree!</h4>
                <p>The grocery tracking app</p>
              </div>

              <div className="m-6 text-center">
                <LoginButton mode="create"></LoginButton>
              </div>
              
              <ul className="flex gap-3 text-center justify-self-center flex-wrap">
                <li>
                  Track Items
                </li>
                |
                <li>
                  Save Money
                </li>
                |
                <li>
                  Reduce Waste
                </li>
              </ul>

              <div className="flex flex-direction-column gap-3 text-center justify-self-center">
                <p>Already have an account?</p>
                <LoginButton mode="login"></LoginButton>
              </div>
            </>
        )};

        <div>
          {!pwaInstall.isStandalone && pwaInstall.deferredPrompt ? (
                <div className="flex justify-content-center mt-6">
                  <button onClick={triggerInstall} className="bg-[#F3E5D9] text-[#705B48] b-none px-4 py-2 br-6 text-size-2 cursor-pointer">Download the App</button>
                </div>
              ) : null};
        </div>
      </div>

    </main>
  )
}