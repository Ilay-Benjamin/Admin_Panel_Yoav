import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home/index.Home.js';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
