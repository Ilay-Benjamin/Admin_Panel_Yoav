import { Chapter, ChapterData } from "./Chapter/Chapter";
import { Item, ItemData } from "./Chapter/core/Item";
import menuBarIcon from '../../../assets/images/icons/menu-bar.png';
import searchIcon from '../../../assets/images/icons/search.png';
import helpIcon from '../../../assets/images/icons/help.png';
import issueIcon from '../../../assets/images/icons/issue.png';
import clockIcon from '../../../assets/images/icons/clock.png';
import upArrowIcon from '../../../assets/images/icons/up-arrow.png';
import downArrowIcon from '../../../assets/images/icons/down-arrow.png';
import leftArrowIcon from '../../../assets/images/icons/left-arrow.png';
import rightArrowIcon from '../../../assets/images/icons/right-arrow.png';
import adminToolIcon from '../../../assets/images/icons/admin-tool.png';

export const chaptersList = [
    {
        name: 'Assistance',
        title: 'Assistance',
        items: [
            {
                name: 'Search',
                title: 'Search',
                icon: searchIcon,
                isOpened: true
            },
            {
                name: 'Help',
                title: 'Help',
                icon: helpIcon,
                isOpened: false
            },
            {
                name: 'Issue',
                title: 'Issue',
                icon: issueIcon,
                isOpened: false
            }
        ]
    },
    {
        name: 'Editors',
        title: 'Editors',
        items: [
            {
                name: 'Hours',
                title: 'Hours',
                icon: clockIcon,
                isOpened: false
            },
        ]
    },
    {
        name: 'Other',
        title: 'Other',
        items: []
    }
];