import "./components/Header.jsx"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, Link } from 'react-router-dom';
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error404.jsx";
export default function App() {
  return (
    <div className="app">
      <nav  >
        <ul className="container flex flex-grow mx-auto p-6 justify-between">
          <li>
            <a className="text-green-600" href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="*">Error</a>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </div>
  )
}
