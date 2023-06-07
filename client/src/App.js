import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingPage';
import RecipesPage from './pages/recipes';
import AboutPage from './components/about';
import ContactPage from './components/contact';
import FullRecipePage from './components/fullrecipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:id" component={FullRecipePage} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />  
      </Routes>
    </Router>
  </div>
  );
}

export default App;
