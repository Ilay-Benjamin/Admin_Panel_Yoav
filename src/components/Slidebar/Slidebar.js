import React, { useState } from 'react';
import classNames from 'classnames';
import { appDetails } from '../../config/app/app.config';
import Page from '../../models/page';
import { Item, ItemData } from './core/Chapter/core/Item';
import { Chapter, ChapterData } from './core/Chapter/Chapter';
import menuBarIcon from '../../assets/images/icons/menu-bar.png';
import { chaptersList } from './core/SlidebarData';

import './../../assets/css/components/Slidebar/style.Sidebar.css'; // Assuming you have styles for Sidebar


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


class ExtendedChapterState {
  constructor(extendedChapter, setExtendedChapter) {
    this.extendedChapter = extendedChapter;
    this.setExtendedChapter = setExtendedChapter;
  }
  get() {
    return this.extendedChapter;
  }
  set(extendedChapter) {
    this.setExtendedChapter(extendedChapter);
  }
  isEmpty() {
    return this.extendedChapter === null;
  }
  isEquals(chapter) {
    var chapterKeys = Object.keys(chapter);
    var extendedChapterKeys = Object.keys(this.extendedChapter);
    if (chapterKeys.length !== extendedChapterKeys.length) {
      return false;
    }
    for (let i = 0; i < chapterKeys.length; i++) {
      if (chapter[chapterKeys[i]] !== this.extendedChapter[extendedChapterKeys[i]]) {
        return false;
      }
    }
    return true;
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
}


const isProjectPage = (page) => {
  return projectPages.some((projectPage) => Page.PAGE_UTILS.isEquals(page, Page.PAGE_UTILS.fromObject(projectPage)));
}

const onToggleHandler = (isOpenState) => {
  SidebarActions.VISIBILITY.toggle(isOpenState);
}

const onToggleChapterHandler = (extendedChapterState, chapter) => {
  if (!extendedChapterState.isEmpty() && extendedChapterState.isEquals(chapter)) {
    extendedChapterState.set(null);
  } else if (!extendedChapterState.isEmpty() && !extendedChapterState.isEquals(chapter)) {
    extendedChapterState.set(chapter);
  }
  else {
    extendedChapterState.set(chapter);
  }
}


function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [extendedChapter, setExtendedChapter] = useState(null);
  const isOpenState = new IsOpenState(isOpen, setIsOpen);
  const extendedChapterState = new ExtendedChapterState(extendedChapter, setExtendedChapter);
  const currentPage = props.currentPage
  const newChapterList = Array.from(chaptersList);
  const on
  return (
    <div className={classNames('sidebar', 'open')}>

      <div className={classNames('sidebar-section', 'sidebar-top-section')}>
        <div className={classNames('section-title')}>
          <p className={classNames("section-title-text")}>Home</p>
        </div>
      </div>

      <div className={classNames('sidebar-section', 'sidebar-middle-section')}>
        <div className={classNames('section-title', 'pages-section-title')}>
          <p className={classNames("section-title-text", 'home-title-text')}>Pages</p>
        </div>
        {
          <ul>
            {newChapterList.map((chapterData, index) => (
              <Chapter
                key={index}
                chapterName={chapterData.name}
                chapterTitle={chapterData.title}
                items={chapterData.icon}
                isExtended={!extendedChapterState.isEmpty() && extendedChapterState.isEquals(chapterData)}
                currentPage={props.currentPage}
                onToggle={onToggleChapterHandler(extendedChapterState, chapterData)}
              />
            ))}
          </ul>
        }
      </div>
      <div className={classNames('sidebar-section', 'sidebar-footer-section')}>

      <div className={classNames('icon-button', 'toggle-button')} onClick={onToggleHandler(isOpenState)}>
        <img className='menu-image' src={menuBarIcon} alt=""/>
      </div>

      </div>
    </div>

  );
}

export default Sidebar;
