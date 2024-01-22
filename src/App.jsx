import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import AddMentor from './components/AddMentor';
import ViewMentors from './components/ViewMentors';
import Main from './components/Main';
import MentorDashboard from './pages/MentorDashboard';
import MentorGrading from './pages/MentorGrading';
import UpdateMentor from './components/UpdateMentor';
import ProjectSubmission from './pages/ProjectSubmission';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main child={<HomePage />} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/*' element={<Main child={<AdminDashboard />} />} />
        <Route path='/mentor/*' element={<Main child={<MentorDashboard />} />} />
        <Route path='/mentor/submission/:projectId' element={<Main child={<ProjectSubmission />} />} />
        <Route path='/mentor/submission/:projectId/grade/*' element={<Main child={<MentorGrading />} />} />
        <Route path='/admin/addmentor' element={<AddMentor />} />
        <Route path='/admin/viewmentor' element={<ViewMentors />} />
        <Route path='/admin/updatementor' element={<UpdateMentor />} />

      </Routes>
    </div>
  );
}

export default App;
