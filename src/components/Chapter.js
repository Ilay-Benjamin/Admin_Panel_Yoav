import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { appDetails } from '../config/app/app.config.js';
import Page from '../models/page.js';
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

import './Chapter.css'; // Assuming you have styles for Sidebar



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

class ChapterFactory {
    static TYPES = {
        EXPANDED: true,
        SHORTEN: false,
    };

    static BUILDER = class {

        static GET_COMPONENT(isExpanded) {
            return isExpanded ? ChapterFactory.BUILDER.ExpandedChapter : ChapterFactory.BUILDER.ShortenChapter;
        }

        static BUILD_COMPONENT(props) {
            const isExpanded = props.isExpanded;
            const onToggle = props.onToggle;

            return (
                isExpanded ?
                    ChapterFactory.BUILDER.ExpandedChapter({
                        chapterName: props.chapterName,
                        chapterTitle: props.chapterTitle,
                        chapterItems: props.chapterItems,
                        onToggle: onToggle,
                    }) :
                    ChapterFactory.BUILDER.ShortenChapter({
                        chapterName: props.chapterName,
                        chapterTitle: props.chapterTitle,
                        chapterItems: props.chapterItems,
                        onToggle: onToggle,
                    })
            );
        }

        static ShortenChapter(props) {
            return (<><p>Shorten</p></>);
        }

        static ExpandedChapter(props) {
            const onToggleHandler = props.onToggle;

            const newItems = Array.from(props.chapterItems);
            return (
                <div className={classNames('section-chapter')}>
                    <div className={classNames('chapter-title')}>
                        <p className={classNames("chapter-title-text")}>{props._chapterTitle}</p>
                        <div className={classNames('chapter-expand-button')} onClick={(target) => onToggleHandler()}>
                            <img className='expand-image' src={downArrowIcon} alt="" />
                        </div>
                    </div>

                    <div className={classNames('chapter-content')}>
                        <ul>
                            {newItems.map((item, index) => {
                                <div key={index} className={classNames('chapter-item')}>
                                    {/* Item Icon */}
                                    <div className={classNames('item-icon')}>
                                        {/* Item Icon Image */}
                                        <img className={classNames('item-icon-image')} src={item.itemIcon} alt="" />
                                    </div>
                                    {/* Item Title */}
                                    <div className={classNames('item-title')}>
                                        {/* Item Title Text */}
                                        <p className={classNames('item-title-text')}>{item.itemTitle}</p>
                                    </div>
                                </div>
                            })}
                        </ul>
                    </div>

                </div>
            );
        }
    }

}



function Chapter(props) {
    const isChapterExpanded = props.isChapterExpanded;
    const toggleChapter = props.onToggle;

    const newItems = Array.from(props.chapterItems);

    const onToggleHandler = (target) => {
        target.preventDefault();
        toggleChapter(props.chapterName);
    }

    const chapterClasses = classNames('section-chapter', (isChapterExpanded ? 'expanded-chapter' : 'shortened-chapter'));
    const arrowIcon = isChapterExpanded ? upArrowIcon : downArrowIcon;

    return (
        <div className={chapterClasses}>
            <div className={classNames('chapter-title')}>
                <p className={classNames("chapter-title-text")}>{props.chapterTitle}</p>
                <div className={classNames('chapter-expand-button')} onClick={(target) => onToggleHandler(target)}>
                    <img className='expand-image' src={arrowIcon} alt="" />
                </div>
            </div>

            <div className={classNames('chapter-content')}>
                    {newItems.map((item, index) => (
                        <ChapterItem key={index}
                            itemName={item.itemName}
                            itemTitle={item.itemTitle}
                            itemIcon={item.itemIcon}
                        />
                    ))}
            </div>

        </div>

    )
}


function ChapterItem(props) {
    return (
        <div className={classNames('chapter-item')}>

            {/* Item Icon */}
            <div className={classNames('item-icon')}>
                {/* Item Icon Image */}
                <img className={classNames('item-icon-image')} src={getImageByPath(props.itemIcon)} alt="" />
            </div>

            {/* Item Title */}
            <div className={classNames('item-title')}>
                {/* Item Title Text */}
                <p className={classNames('item-title-text')}>{props.itemTitle}</p>
            </div>

        </div>
    );
}


export default Chapter;