import "./App.css";
import ListPokemon from "./components/ListPokemon";
import Pokemon from "./components/Pokemon";
// import { useState } from 'react';
// import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchPokemon from "./components/SearchPokemon";

function App() {
  return (
    <Router>
      <SearchPokemon />
      <Routes>
        <Route path="/" element={<ListPokemon />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
