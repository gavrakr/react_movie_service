import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TodoPage from "./Todo/TodoPage";
import CoinPage from "./Coin/CoinPage";
import SearchPage from "./Search/SearchPage";
import MainPage from "./Main/MainPage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? "click" : "")}
          to="/"
        >
          Main /
        </NavLink>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? "click" : "")}
          to="/search"
        >
          Search /
        </NavLink>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? "click" : "")}
          to="/todo"
        >
          Todo /
        </NavLink>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? "click" : "")}
          to="/coin"
        >
          Coin /
        </NavLink>
      </nav>

      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/coin" element={<CoinPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
