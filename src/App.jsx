import React from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard'
import AddMentor from './components/AddMentor';
import ViewMentors from './components/ViewMentors';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
        <Route path='/admin/addmentor' element={<AddMentor/>}/>
        <Route path='/admin/viewmentor' element={<ViewMentors/>}/>
      </Routes>
    </div>
  );
}

export default App;
