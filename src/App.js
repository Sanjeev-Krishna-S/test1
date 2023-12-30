import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <HomePage />
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
