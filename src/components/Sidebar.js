import React, { useState } from 'react';
import classNames from 'classnames';
import Chapter from './Chapter';
import { appDetails } from './../config/app/app.config.js';
import Page from './../models/page.js';
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

const projectPages = appDetails.pages;
projectPages.map((page) => Page.PAGE_UTILS.fromObject(page));

class IsOpenState {
  constructor(isOpen, setIsOpen) {
    this.isOpen = isOpen;
    this.setIsOpen = setIsOpen;
  }

  get() {
    return this.isOpen;
  }

  set(isOpen) {
    this.setIsOpen(isOpen);
  }
}

class SidebarActions {
  static VISIBILITY = class {
    static toggle(isOpenState) {
      isOpenState.set(!isOpenState.get());
    }

    static show(isOpenState) {
      isOpenState.set(true);
    }

    static hide(isOpenState) {
      isOpenState.set(false);
    }

    static isOpen(isOpenState) {
      return isOpenState.get();
    }
  }

  static TYPES = class {
    static Opened(props) {
      return (
        <div className={classNames('sidebar', 'open')}>

          <div className={classNames('sidebar-section', 'sidebar-top-section')}>
            <div className={classNames('section-title', 'header-section-title')}>
              <img className='header-title-image' src={adminToolIcon} alt="" />
            </div>

          </div>

          <div className={classNames('sidebar-section', 'sidebar-middle-section')}>
            <div className={classNames('section-title', 'pages-section-title')}>
              <p className={classNames("section-title-text", 'home-title-text')}>Pages</p>
            </div>

            <div className={classNames('section-chapter', 'editors-chapter')}>
              <div className={classNames('chapter-title', 'editors-chapter-title')}>
                <p className={classNames("chapter-title-text", 'editors-title-text')}>Editors</p>
                <div className={classNames('chapter-expand-button', 'editors-expand-button')}>
                  <img className='expand-image' src={downArrowIcon} alt="" />
                </div>
              </div>
              <div className={classNames('chapter-content', 'editors-chapter-content')}>

                {/* Chapter Item - Hours Page */}
                <div className={classNames('chapter-item', 'hours-page-item')}>
                  {/* Item Icon */}
                  <div className={classNames('item-icon', 'hours-page-icon')}>
                    {/* Item Icon Image */}
                    <img className={classNames('item-icon-image', 'hours-page-image')} src={clockIcon} alt="" />
                  </div>
                  {/* Item Title */}
                  <div className={classNames('item-title', 'hours-page-title')}>
                    {/* Item Title Text */}
                    <p className={classNames('item-title-text', 'hours-title-text')}>Hours</p>
                  </div>
                </div>

              </div>
            </div>

            <div className={classNames('section-chapter', 'other-chapter')}>
              <div className={classNames('chapter-title', 'other-chapter-title')}>
                <p className={classNames("chapter-title-text", 'other-title-text')}>Editors</p>
                <div className={classNames('chapter-expand-button', 'other-expand-button')}>
                  <img className='expand-image' src={downArrowIcon} alt="" />
                </div>
              </div>
              <div className={classNames('chapter-content', 'other-chapter-content')}>

                {/* Chapter Item - Hours Page */}
                <div className={classNames('chapter-item', 'X-page-item')}>
                  {/* Item Icon */}
                  <div className={classNames('item-icon', 'X-page-icon')}>
                    {/* Item Icon Image */}
                    <img className={classNames('item-icon-image', 'X-page-image')} src={helpIcon} alt="" />
                  </div>
                  {/* Item Title */}
                  <div className={classNames('item-title', 'X-page-title')}>
                    {/* Item Title Text */}
                    <p className={classNames('item-title-text', 'X-title-text')}>X</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className={classNames('sidebar-section', 'sidebar-footer-section')}>
            <p>@Ilay_Benjamin</p>
          </div>

        </div>

      );
    }

    static Closed(props) {
      return (
        <></>
      );
    }

    static get(isOpen, props) {
      return isOpen ? this.Opened(props) : this.Closed(props);
    }

    static getType(isOpen) {
      return isOpen ? this.Opened : this.Closed;
    }
  }
}

const isProjectPage = (page) => {
  return projectPages.some((projectPage) => Page.PAGE_UTILS.isEquals(page, Page.PAGE_UTILS.fromObject(projectPage)));
}


function Sidebar(props) {
  const isSidebarOpen = props.isSidebarOpen;
  const toggleSidebar = props.toggleSidebar;

  const items = [
    { itemName: 'Search', itemTitle: 'Search', itemIcon: searchIcon },
    { itemName: 'Issue', itemTitle: 'Issue', itemIcon: issueIcon },
    { itemName: 'Help', itemTitle: 'Help', itemIcon: helpIcon },
    { itemName: 'Contact', itemTitle: 'Contact', itemIcon: clockIcon }
  ]

  const SidebarComponent = SidebarActions.TYPES.getType(isSidebarOpen);
  
  const onToggleSidebarHandler = (target) => {
    target.preventDefault();
    toggleSidebar(!isSidebarOpen);
  }

  //<SidebarComponent onToggle={(target) => onToggleSidebarHandler(target)} />
  
  return (
    <div className={classNames('sidebar', 'open')}>

      <div className={classNames('sidebar-section', 'sidebar-top-section')}>
        <div className={classNames('section-title', 'header-section-title')}>
          <img className='header-title-image' src={adminToolIcon} alt="" />
        </div>
      </div>

      <div className={classNames('sidebar-section', 'sidebar-middle-section')}>
        <div className={classNames('section-title', 'pages-section-title')}>
          <p className={classNames("section-title-text", 'pages-title-text')}>Pages</p>
        </div>
        <Chapter
          chapterName='assistance'
          chapterTitle='Assistance'
          chapterItems={items}
          isChapterExpanded={false}
        />
      </div>

      <div className={classNames('sidebar-section', 'sidebar-footer-section')}>
        <div className={classNames('section-title', 'about-section-title')}>
          <p className={classNames("section-title-text", 'about-title-text')}>@Ilay_Benjamin</p>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
