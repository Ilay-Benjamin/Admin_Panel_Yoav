import React, { useState } from 'react';
import classNames from 'classnames';
import { appDetails } from './../config/app/app.config.js';
import Page from './../models/page.js';
import menuBarIcon from '../assets/images/icons/menu-bar.png';
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
          <div className={classNames('sidebar-section', 'top-section')}>
            <div className={classNames('icon-button', 'menu-button')} onClick={props.onClickHandler}>
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
