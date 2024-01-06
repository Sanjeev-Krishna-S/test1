import React from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
