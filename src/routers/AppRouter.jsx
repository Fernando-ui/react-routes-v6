import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { DcScreen } from "../components/dcs/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
