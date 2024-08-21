import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import TopBar from './components/TopBar';

function App() {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="content">
                <TopBar />
                <Home />
            </div>
        </div>
    );
}

export default App;
