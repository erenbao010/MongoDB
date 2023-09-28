import "./components/Header.jsx"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, Link } from 'react-router-dom';
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error404.jsx";
import {PrimaryLayout} from "./components/Layout";

export default function App() {
  return (
    <div className="app container h-auto mx-auto flex flex-col p-9 bg-white">
    <Routes>
      <Route element={<PrimaryLayout/>} >
      <Route path="/" element={<Header/>} /> 
      </Route>
      <Route path="*" element={<Error/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </div>
  )
}
