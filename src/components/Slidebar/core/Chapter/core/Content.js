import React, { useState } from 'react';
import classNames from 'classnames';
import { appDetails } from '../../../../../config/app/app.config';
import Page from '../../../../../models/page';
import { Item, ItemData } from './core/Chapter/core/Item';
import menuBarIcon from '../../../../../assets/images/icons/menu-bar.png';
import searchIcon from '../../../../../assets/images/icons/search.png';
import helpIcon from '../../../../../assets/images/icons/help.png';
import issueIcon from '../../../../../assets/images/icons/issue.png';
import clockIcon from '../../../../../assets/images/icons/clock.png';
import upArrowIcon from '../../../../../assets/images/icons/up-arrow.png';
import downArrowIcon from '../../../../../assets/images/icons/down-arrow.png';
import leftArrowIcon from '../../../../../assets/images/icons/left-arrow.png';
import rightArrowIcon from '../../../../../assets/images/icons/right-arrow.png';
import adminToolIcon from '../../../../../assets/images/icons/admin-tool.png';

import './../../../../../assets/css/components/Slidebar/Chapter/Item/style.Item.css'; // Assuming you have styles for Sidebar


export class ItemData {
    static ITEM_UTILS = class {
        static ITEM_PROPERTIES = ['name', 'title', 'icon', 'isOpened'];
        static isComparable(obj){
            var objKeys = Object.keys(obj);
            if (objKeys.length !== this.ITEM_PROPERTIES.length) {
                return null;
            }
            for (let i = 0; i < objKeys.length; i++) {
                if (objKeys[i] !== this.ITEM_PROPERTIES[i]) {
                    return null;
                }
            }
            return true;
        }
        static fromObject(obj) {
            if (!this.isComparable(obj)) {
                return null;
            }
            return new ItemData(obj.name, obj.title, obj.icon, obj.isOpened);
        }
        static toObject(itemData) {
            return {
                name: itemData.name,
                title: itemData.title,
                icon: itemData.icon,
                isOpened: itemData.isOpened
            };
        }
    }

    static DEFAULT_ICON = helpIcon;

    constructor(name, title, icon = ItemData.DEFAULT_ICON, isOpened = false) {
        this._name = name;
        this._title = title;
        this._icon = icon;
        this._isOpened = isOpened;
    }
    get name() {
        return this._name;
    }
    get title() {
        return this._title;
    }
    get icon() {
        return this._icon;
    }
    get isOpened() {
        return this._isOpened;
    }
    set isOpened(isOpened) {
        this._isOpened = isOpened;
    }
    set name(name) {
        this._name = name;
    }
    set title(title) {
        this._title = title;
    }
    set icon(icon) {
        this._icon = icon;
    }
    isEquals(itemData) {
        var itemKeys = Object.keys(itemData);
        for (var key in itemKeys) {
            if (this[key] !== itemData[key]) {
                return false;
            }
        }
    }
    static isItemData(expItemData) {
        return expItemData instanceof ItemData;
    }
}


const isCurrentPageOpenend = (props) => {
    return props.currentPage.name === props.itemName;
}
    
const loadItemData = (props) => {
    const itemData = new ItemData(props.itemName, props.itemTitle, props.itemIcon, isCurrentPageOpenend(props));
    return itemData;
}

const loadCurrentPage = (props) => {
    const currentPage = Page.fromObject(props.currentPage);
    return currentPage;
}

const generateItemClassNames = (itemData) => {
    return classNames('chapter-item', itemData.isOpened ? 'opened-item' : 'closed-item');
}


export function Item(props) {
    const itemData = loadItemData(props);
    const itemClassNames = generateItemClassNames(itemData);
    return (
        <div className={itemClassNames}>
            {/* Item Icon */}
            <div className={classNames('item-icon')}>
                {/* Item Icon Image */}
                <img className={classNames('item-icon-image')} src={itemData.icon} alt="" />
            </div>
            {/* Item Title */}
            <div className={classNames('item-title')}>
                {/* Item Title Text */}
                <p className={classNames('item-title-text')}>{itemData.title}</p>
            </div>
        </div>
    );
}
