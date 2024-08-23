import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home/index.Home.js';
import EmptyPage from './layouts/EmptyPage/EmptyPage';

function App() {
  return (
    <div className="app">
      <EmptyPage></EmptyPage>
    </div>
  );
}

export default App;
