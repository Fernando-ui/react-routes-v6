import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";

export const AppRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
