import React, { useState } from 'react';
import classNames from 'classnames';
import Chapter from './Chapter';
import { appDetails } from './../config/app/app.config.js';
import Page from './../models/page.js';
import './../assets/images/icons/profile_picture.png';
import { sidebarConfig } from '../config/app/UI/sidebar/sidebar.config';
import menuBarIcon from '../assets/images/icons/menu-bar.png';
import searchIcon from '../assets/images/icons/search.png';
import helpIcon from '../assets/images/icons/help.png';
import issueIcon from '../assets/images/icons/issue.png';
import clockIcon from '../assets/images/icons/clock.png';
import upArrowIcon from '../assets/images/icons/up-arrow.png';
import downArrowIcon from '../assets/images/icons/down-arrow.png';
import rightArrowIcon from '../assets/images/icons/right-arrow.png';
import leftArrowIcon from '../assets/images/icons/left-arrow.png';
import adminToolIcon from '../assets/images/icons/admin-tool.png';
import emailIcon from '../assets/images/icons/email.png';

import './Sidebar.css'; // Assuming you have styles for Sidebar

const getImageByPath = (imagePath) => {
  var pathComponents = imagePath.split('/');
  var parentDirName = pathComponents[pathComponents.length - 2];
  var imageName = pathComponents[pathComponents.length - 1];
  var newImagePath = "/icons/" + imageName;
  switch (newImagePath) {
    case '/icons/search.png':
      return searchIcon;
    case '/icons/help.png':
      return helpIcon;
    case '/icons/issue.png':
      return issueIcon;
    case '/icons/clock.png':
      return clockIcon;
    case '/icons/up-arrow.png':
      return upArrowIcon;
    case '/icons/down-arrow.png':
      return downArrowIcon;
    case '/icons/right-arrow.png':
      return rightArrowIcon;
    case '/icons/left-arrow.png':
      return leftArrowIcon;
    case '/icons/admin-tool.png':
      return adminToolIcon;
    case '/icons/email.png':
      return emailIcon;
    case '/incons/menu-bar.png':
      return menuBarIcon;
    default:
      return searchIcon;
  }
}


const projectPages = appDetails.pages;
projectPages.map((page) => Page.PAGE_UTILS.fromObject(page));


function Sidebar(props) {
  const isSidebarOpen = props.isSidebarOpen;

  const items = [
    { itemName: 'Search', itemTitle: 'Search', itemIcon: searchIcon },
    { itemName: 'Issue', itemTitle: 'Issue', itemIcon: searchIcon },
    { itemName: 'Help', itemTitle: 'Help', itemIcon: searchIcon },
    { itemName: 'Contact', itemTitle: 'Contact', itemIcon: searchIcon }
  ]
  const topSection = sidebarConfig.getSection('top-section');


  const sidebarClassNames = classNames('sidebar', (isSidebarOpen ? 'opened-sidebar' : 'closed-sidebar'));
  const assistanceChapter = sidebarConfig.getChapter('middle-section', 'assistance');


  return (
    <div className={classNames(sidebarClassNames)}>

      <div className={classNames('sidebar-section', 'sidebar-top-section')}>
        <div className={classNames('section-title', 'header-section-title')} >

          <img className='header-title-image' src={getImageByPath(topSection.content)} alt="" />
        </div>
      </div>

      <div className={classNames('sidebar-section', 'sidebar-middle-section')}>
        <div className={classNames('section-title', 'pages-section-title')}>
          <p className={classNames("section-title-text", 'pages-title-text')}>{sidebarConfig.getSection('middle-section').sectionTitle}</p>
        </div>
        <Chapter
          chapterName={assistanceChapter.chapterName}
          chapterTitle={assistanceChapter.chapterTitle}
          chapterItems={assistanceChapter.chapterItems}
          isChapterExpanded={false}
        />
      </div>

      <div className={classNames('sidebar-section', 'sidebar-footer-section')}>
        <div className={classNames('section-title', 'about-section-title')}>
          <p className={classNames("section-title-text", 'about-title-text')}>{sidebarConfig.getSection('bottom-section').content}</p>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
