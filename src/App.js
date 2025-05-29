import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotebookPage from "./pages/NotebookPage";
import ContatoPage from "./pages/ContatoPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notebook/:id" element={<NotebookPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
