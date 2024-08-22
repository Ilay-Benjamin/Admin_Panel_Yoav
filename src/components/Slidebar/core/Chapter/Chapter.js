import React, { useState } from 'react';
import classNames from 'classnames';
import { appDetails } from '../../../../config/app/app.config';
import Page from '../../../../models/page';
import { Item, ItemData } from './core/Item';
import menuBarIcon from '../../../../assets/images/icons/menu-bar.png';
import searchIcon from '../../../../assets/images/icons/search.png';
import helpIcon from '../../../../assets/images/icons/help.png';
import issueIcon from '../../../../assets/images/icons/issue.png';
import clockIcon from '../../../../assets/images/icons/clock.png';
import upArrowIcon from '../../../../assets/images/icons/up-arrow.png';
import downArrowIcon from '../../../../assets/images/icons/down-arrow.png';
import leftArrowIcon from '../../../../assets/images/icons/left-arrow.png';
import rightArrowIcon from '../../../../assets/images/icons/right-arrow.png';
import adminToolIcon from '../../../../assets/images/icons/admin-tool.png';

import './../../../../assets/css/components/Slidebar/Chapter/style.Chapter.css';


export class ChapterData {
  static CHAPTER_UTILS = class {
    static CHAPTER_PROPERTIES = ['name', 'title', 'items', 'isExpanded'];
    static isComparable(obj) {
      var objKeys = Object.keys(obj);
      if (objKeys.length !== this.CHAPTER_PROPERTIES.length) {
        return null;
      }
      for (let i = 0; i < objKeys.length; i++) {
        if (objKeys[i] !== this.CHAPTER_PROPERTIES[i]) {
          return null;
        }
      }
      return true;
    }
    static fromObject(obj) {
      if (!this.isComparable(obj)) {
        return null;
      }
      var newItems = Array.from(obj.items);
      newItems = newItems.map((item) => ItemData.ITEM_UTILS.fromObject(item));
      return new ChapterData(obj.name, obj.title, newItems);
    }
    static toObject(chapterData) {
      var newItems = Array.from(chapterData.items).map((item) => ItemData.ITEM_UTILS.toObject(item));
      return {
        name: chapterData.name,
        title: chapterData.title,
        items: newItems,
        isExpanded: chapterData.isExpanded
      };
    }
  }
  constructor(name, title, items = [], isExpanded = false) {
    this._title = title;
    this._name = name;
    var newItems = Array.from(items);
    newItems = newItems.map((item) => ItemData.isItemData(item) ? item : ItemData.ITEM_UTILS.fromObject(item));
    this._items = newItems;
    this._isExpanded = isExpanded
  }
  get isExpanded() {
    return this._isExpanded;
  }
  get name() {
    return this._name;
  }
  get title() {
    return this._title;
  }
  get items() {
    return this._items;
  }
  set name(name) {
    this._name = name;
  }
  set title(title) {
    this._title = title;
  }
  set items(items) {
    var newItems = Array.from(items);
    newItems = newItems.map((item) => ItemData.isItemData(item) ? item : ItemData.ITEM_UTILS.fromObject(item));
    this._items = newItems;
  }
  set isExpanded(isExpanded) {
    this._isExpanded = isExpanded;
  }
  isEquals(chapterData) {
    var chapterKeys = Object.keys(chapterData);
    for (var key in chapterKeys) {
      if (this[key] !== chapterData[key]) {
        return false;
      }
    }
  }
  static isChapterData(expChapterData) {
    return expChapterData instanceof ChapterData;
  }
}


class IsExtendedState {
  constructor(isExtended, setIsExtended) {
    this.isExtended = isExtended;
    this.setIsExtended = setIsExtended;
  }
  get() {
    return this.isExtended;
  }
  set(isExtended) {
    this.setIsExtended(isExtended);
  }
}


class ChapterActions {
  static VISIBILITY = class {
    static toggle(isExtendedState) {
      isExtendedState.set(!isExtendedState.get());
    }

    static extend(isExtendedState) {
      isExtendedState.set(true);
    }

    static shorten(isExtendedState) {
      isExtendedState.set(false);
    }

    static isExtended(isExtendedState) {
      return isExtendedState.get();
    }
  }
}


const loadChapterData = (props, isExtendedState) => {
  const chapterData = new ChapterData(props.chapterName, props.chapterTitle, props.items, isExtendedState.get());
  return chapterData;
}

const onToggleHandler = (isExtendedState) => {
  ChapterActions.VISIBILITY.toggle(isExtendedState);
};


export function Chapter(props) {
  const [isExtended, setIsExtended] = useState(props.isExtended);
  const isExtendedState = new IsExtendedState(isExtended, setIsExtended);
  const chapterData = loadChapterData(props, isExtendedState);
  const contentClassNames = classNames('chapter-content', (isExtendedState.get() ? 'extended-chapter' : 'shortened-chapter'));
  const chapterIcon = (isExtendedState.get() ? upArrowIcon : downArrowIcon);
  const itemComponentsList = Array.from(chapterData.items);
  const onToggleCallback = () => {
   // onToggleHandler(isExtendedState);
    props.onToggle();
  }
  return (
    <div className={classNames('chapter')}>
      <div className={classNames('chapter-title')}>
        <p className={classNames("chapter-title-text")}>{ChapterData.title}</p>
        <div className={classNames('chapter-expand-button')} onClick={(target) => onToggleHandler(isExtendedState)}>
          <img className='expand-image' src={chapterIcon} alt="" />
        </div>
      </div>
      <div className={contentClassNames}>
        <ul>
            {itemComponentsList.map((itemData, index) => (
                <Item 
                  key={index} 
                  itemName={itemData.name} 
                  itemTitle={itemData.title} 
                  itemIcon={itemData.icon} 
                  currentPage={props.currentPage} 
                />
            ))}
        </ul>
      </div>
    </div>
  );
}