import React, { useState } from 'react';
import classNames from 'classnames';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Home from '../../pages/Home/index.Home';

import '../../assets/css/layouts/EmptyPage/EmptyPage.css';



function EmptyPage(props) {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  return (
    <div className="empty-page">
      <div className="header-container">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="main-container">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="main-content">
          <Home />
        </main>
      </div>
    </div>
  );
}


export default EmptyPage;