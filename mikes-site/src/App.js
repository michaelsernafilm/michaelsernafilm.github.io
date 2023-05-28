import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import { NavBar } from './components/navbar';
import { Director } from "./components/Director";
import { Cinematography } from "./components/Cinematography";
import { Editor } from "./components/Editor";
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Director />} />
          <Route path="/director" element={<Director />} />
          <Route path="/cinematography" element={<Cinematography />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
