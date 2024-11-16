import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TodoPage from "../pages/Todo/TodoPage";
import CoinPage from "../pages/Coin/CoinPage";
import SearchPage from "../pages/Search/SearchPage";
import MoviePage from "../pages/Movie/MoviePage";
import MoviePage1 from "../pages/Movie/MoviePage1";
import MainPage from "../pages/Main/MainPage";

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
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? "click" : "")}
          to="/movie"
        >
          Movie /
        </NavLink>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? "click" : "")}
          to="/movie/1"
        >
          Movie_1 /
        </NavLink>
      </nav>

      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/coin" element={<CoinPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/1" element={<MoviePage1 />} />
      </Routes>
    </BrowserRouter>
  );
}
