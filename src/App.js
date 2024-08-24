import React from 'react';
import './assets/css/App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmptyPage from './layouts/EmptyPage/EmptyPage';
import Chapter from './components/Chapter';
import { sidebarConfig } from './config/app/UI/sidebar/sidebar.config';
import { appDetails, appPages} from './config/app/app.config.js';

import Home from './pages/Home/index.Home';
import SettingsPage from './pages/other/Settings/index.Settings';
import IssuePage from './pages/other/Issue/index.Issue';
import BulletinEditorPage from './pages/editors/BulletinEditor/index.BulletinEditor';
import ContactEditorPage from './pages/editors/ContactEditor/index.ContactEditor';
import HoursEditorPage from './pages/editors/HoursEditor/index.HoursEditor';
import SearhPage from './pages/assistance/Search/index.Search';
import HelpPage from './pages/assistance/Help/index.Help';
import ContactPage from './pages/assistance/Contact/index.Contact';



const getPageComponent = (componentPath) => {
  if (!componentPath) {
    return null;
  }
  var fixedComponentPath = componentPath.toLowerCase();
  fixedComponentPath = fixedComponentPath.startsWith('/') ? fixedComponentPath.substring(1) : fixedComponentPath;
  var pathComponents = fixedComponentPath.split('/');
  pathComponents.shift();
  fixedComponentPath = pathComponents.join('/');
  fixedComponentPath = fixedComponentPath.replace('.js','');
  pathComponents = fixedComponentPath.split('.');
  fixedComponentPath = pathComponents[0];
  switch (fixedComponentPath) {
    case "home/index":
    return Home;
    case 'other/settings/index':
      return SettingsPage;
    case 'other/issue/index':
      return IssuePage;
    case 'editors/bulletineditor/index':
      return BulletinEditorPage;
    case 'editors/contactEditor/index':
      return ContactEditorPage;
    case 'editors/hoursEditor/index':
      return HoursEditorPage;
    case 'assistance/search/index':
      return SearhPage;
    case 'assistance/help/index':
      return HelpPage;
    case 'assistance/contact/index':
      return ContactPage;
    default:
      return Home;
  }
}



function App() {

  const myPage = appPages.getPage('/', 'Home');

  const pageData = {
    name: myPage.name,
    route: myPage.route,
    props: {
      name: 'Yoav Ismah',
      age: 21
    },
    component: getPageComponent(myPage.component),
    buildComponent: () => {
      return (
        <pageData.component name={pageData.props.name} age={pageData.props.age} />
      );
    }
  }

  return (
    <div className="app">
        <EmptyPage page={pageData} />
    </div>
  );
}

export default App;
