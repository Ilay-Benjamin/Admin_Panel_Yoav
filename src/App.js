import React from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect} from 'react-router-dom';

import './assets/css/App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmptyPage from './layouts/EmptyPage/EmptyPage';
import Chapter from './components/Chapter';
import { sidebarConfig } from './config/app/UI/sidebar/sidebar.config';
import { appDetails, appPages} from './config/app/app.config.js';



const pagesArray = appPages.pages;

const PagesProps = {
  Home: {
    name: 'Yoav Ismah',
    age: 21
  },
  Search: {
    name: 'Adam Furman',
    age: 13
  },
  Help: {
    name: 'Noam Feldman',
    age: 17
  },
  Contact: {
    name: 'Hodaya Shalom',
    age: 35
  },
  ContactEditor: {},
  HoursEditor: {},
  Settings: {},
  Issue: {},
  BulletinEditor: {}
}



const getPageProps = (pageName) => {
  return PagesProps[pageName];
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmptyPage page = {appPages.builder.createPageData('/', 'Home', getPageProps('Home'))} />} />
          {
            pagesArray.map((page, index) => (
              <Route 
                key = {index}
                path = {page.path} 
                element = {
                  <EmptyPage page = {appPages.builder.createPageData(page.route, page.name, getPageProps(page.name))} />       
                } 
              />
            ))
          }
        </Routes>
      </BrowserRouter>
  </div>
  );
}




export default App;
