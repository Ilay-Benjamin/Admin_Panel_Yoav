import React, { useState } from 'react';
import classNames from 'classnames';
import { appDetails } from './../config/app/app.config.js';
import Page from './../models/page.js';
import menuBarIcon from '../assets/images/icons/menu-bar.png';
import searchIcon from '../assets/images/icons/search.png';
import helpIcon from '../assets/images/icons/help.png';
import issueIcon from '../assets/images/icons/issue.png';
import clockIcon from '../assets/images/icons/clock.png';
import upArrowIcon from '../assets/images/icons/up-arrow.png';
import downArrowIcon from '../assets/images/icons/down-arrow.png';


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

            <div className={classNames('section-title', 'home-section-title')}>
              <p className={classNames("section-title-text", 'home-title-text')}>Home</p>
            </div>

          </div>


          <div className={classNames('sidebar-section', 'sidebar-middle-section')}>
            <div className={classNames('section-title', 'pages-section-title')}>
              <p className={classNames("section-title-text", 'home-title-text')}>Pages</p>
            </div>
            <div className={classNames('chapter', 'assistance-chapter')}>
              <div className={classNames('chapter-title', 'assistance-chapter-title')}>
                <p className={classNames("chapter-title-text", 'assistance-title-text')}>Assistance</p>
                <div className={classNames('chapter-expand-button', 'assistance-expand-button')}>
                  <img className='expand-image' src={downArrowIcon} alt="" />
                </div>
              </div>
              <div className={classNames('chapter-content', 'assistance-chapter-content')}>

                {/* Chapter Item - Search Page */}
                <div className={classNames('chapter-item', 'search-page-item')}>
                  {/* Item Icon */}
                  <div className={classNames('item-icon', 'search-page-icon')}>
                    {/* Item Icon Image */}
                    <img className={classNames('item-icon-image', 'search-page-image')} src={searchIcon} alt="" />
                  </div>
                  {/* Item Title */}
                  <div className={classNames('item-title', 'search-page-title')}>
                    {/* Item Title Text */}
                    <p className={classNames('item-title-text', 'search-title-text')}>Search</p>
                  </div>
                </div>

                {/* Chapter Item - Help Page */}
                <div className={classNames('chapter-item', 'help-page-item')}>
                  {/* Item Icon */}
                  <div className={classNames('item-icon', 'help-page-icon')}>
                    {/* Item Icon Image */}
                    <img className={classNames('item-icon-image', 'help-page-image')} src={helpIcon} alt="" />
                  </div>
                  {/* Item Title */}
                  <div className={classNames('item-title', 'help-page-title')}>
                    {/* Item Title Text */}
                    <p className={classNames('item-title-text', 'help-title-text')}>Help</p>
                  </div>
                </div>

                {/* Chapter Item - Issue Page */}
                <div className={classNames('chapter-item', 'issue-page-item')}>
                  {/* Item Icon */}
                  <div className={classNames('item-icon', 'issue-page-icon')}>
                    {/* Item Icon Image */}
                    <img className={classNames('item-icon-image', 'issue-page-image')} src={issueIcon} alt="" />
                  </div>
                  {/* Item Title */}
                  <div className={classNames('item-title', 'issue-page-title')}>
                    {/* Item Title Text */}
                    <p className={classNames('item-title-text', 'issue-title-text')}>Issue</p>
                  </div>
                </div>

              </div>
            </div>

            <div className={classNames('chapter', 'editors-chapter')}>
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
          </div>

          <div className={classNames('sidebar-section', 'sidebar-footer-section')}>

            <div className={classNames('icon-button', 'toggle-button')} onClick={props.onClickHandler}>
              <img className='menu-image' src={menuBarIcon} alt="" />
            </div>

          </div>



        </div>

      );
    }

    
    static Closed(props) {
      return (
        <div className={classNames('sidebar-section', 'top-section')}>
          <div className={classNames('icon-button', 'menu-button')} onClick={props.onClickHandler}>
            <img className='menu-image' src={menuBarIcon} alt="" />
          </div>
        </div>
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

const onToggleHandler = (isOpenState) => {
  SidebarActions.VISIBILITY.toggle(isOpenState);
}

function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(true);
  const isOpenState = new IsOpenState(isOpen, setIsOpen);

  const SidebarComponent = SidebarActions.TYPES.getType(isOpenState.get());

  return (
    <SidebarComponent onClickHandler={() => onToggleHandler(isOpenState)} />

  );
}

export default Sidebar;
