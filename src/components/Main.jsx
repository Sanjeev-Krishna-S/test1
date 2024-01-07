import React, { useEffect } from 'react';
import Navbar from './Navbar';
import AdminNavbar from './AdminNavbar';
import MentorNavbar from './MentorNavbar';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  useEffect(() => {
    console.log('Current Path (Main):', currentPath);
  }, [currentPath]);

  let selectedNavbar;

  if (currentPath.startsWith('/admin')) {
    selectedNavbar = <AdminNavbar />;
  } else if (currentPath.startsWith('/mentor')) {
    selectedNavbar = <MentorNavbar />;
  } else {
    selectedNavbar = <Navbar />;
  }

  return (
    <div>
      {selectedNavbar}
      {props.child}
    </div>
  );
};

export default Main;
