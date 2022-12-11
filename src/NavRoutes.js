import React from "react";
import { Routes, Route } from "react-router-dom";
import { Chat } from "./Pages/Chat";
import Home from "./Pages/Home";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default NavRoutes;
