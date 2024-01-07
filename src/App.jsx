import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard'
import AddMentor from './components/AddMentor';
import ViewMentors from './components/ViewMentors';
import Main from './components/Main';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main child ={<HomePage/>}/>} />
        <Route path='/about' element={<Main child ={<About/>}/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
        <Route path='/admin/addmentor' element={<AddMentor/>}/>
        <Route path='/admin/viewmentor' element={<ViewMentors/>}/>
      </Routes>
    </div>
  );
}

export default App;
