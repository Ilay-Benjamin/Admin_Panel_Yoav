import React from 'react';
import './Sidebar.css'; // Assuming you have styles for Sidebar

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-item">Home</div>
      <div className="sidebar-item">Units</div>
      <div className="sidebar-item">Editors</div>
      <div className="sidebar-item">Other</div>
    </nav>
  );
}

export default Sidebar;
