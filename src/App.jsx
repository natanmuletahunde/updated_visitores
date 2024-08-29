/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import VisitorHome from "./components/VisitorHome"; // Adjust path as needed
import NotFound from "./components/NotFound";
import Blog from "./pages/BlogHome";
import News from "./pages/main";
import Event from "./pages/Event";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<VisitorHome />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/News" element={<News />} />
      <Route path="/Events" element={<Event />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
