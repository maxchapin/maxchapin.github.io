import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';
import About from './pages/About'; // Adjust the path based on your file structure
import Home from './pages/Home'; // Assuming you have a Home component
import BuyNow from './pages/BuyNow';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
      <Router>  
          <Header/>
          <Routes>       
              <Route exact path="/" Component={Home} />
              <Route path="/Home" Component={Home} />
              <Route path="/About" Component={About} />
              <Route path="/Purchase" Component={BuyNow} />
              {/* Add more routes if you have other pages */}
          </Routes>
          <Footer></Footer>
      </Router>
    );
  }
  
export default App;
