// Main.jsx
import React from 'react';
import Navbar from './Navbar';
import AdminNavbar from './AdminNavbar';
import MentorNavbar from './MentorNavbar';

const Main = (props) => {
  const { pathname } = window.location;

  let selectedNavbar;

  // Conditionally select the appropriate navbar based on the route
  if (pathname.startsWith('/admin')) {
    selectedNavbar = <AdminNavbar />;
  } else if (pathname.startsWith('/mentor')) {
    // Assuming '/mentor' is the route for the MentorDashboard
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
