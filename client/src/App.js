import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingPage';
import RecipesPage from './pages/recipes';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Switch from 'react-router-dom';
import "./App.css"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
