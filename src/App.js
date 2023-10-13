import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import GalleryPage from './pages/GalleryPage';
import About from './pages/About';
import ClubsPage from './pages/ClubsPage';
import Footer from './components/Footer';





// importing the styles
import './styles/setUp.css';
import './styles/baseStyles.css';

function App() {

  

  return (
    <div className="App">

      <NavBar />

      {/* <Home /> */}

      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/About" element={ <About /> } /> 
        <Route path="/Clubs" element={ <ClubsPage /> } /> 
        <Route path="/GalleryPage" element={ <GalleryPage /> } /> 
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
