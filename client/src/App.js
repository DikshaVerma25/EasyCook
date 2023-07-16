import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingPage';
import RecipesPage from './pages/recipes';
import SignIn from './pages/signin';
import Login from './pages/login'
import AboutPage from './pages/about';
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
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/login" element= {< Login/>} />
        <Route path="/about" element={<AboutPage />} />  
      </Routes>
    </Router>
  </div>
  );
}

export default App;
