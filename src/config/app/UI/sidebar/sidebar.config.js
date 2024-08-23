import sidebarConfigJSON from './sidebar.config.json';

const sidebarConfigObject = JSON.parse(JSON.stringify(sidebarConfigJSON));

// Exporting sections from the sidebar configuration
const topSection = sidebarConfigObject.sections.find(section => section.sectionName === 'top-section');
const bottomSection = sidebarConfigObject.sections.find(section => section.sectionName === 'bottom-section');
const middleSection = sidebarConfigObject.sections.find(section => section.sectionName === 'middle-section');

// Exporting chapters from the middle section
const assistanceChapter = middleSection.content.find(chapter => chapter.chapterName === 'assistance');
const editorsChapter = middleSection.content.find(chapter => chapter.chapterName === 'editors');
const otherChapter = middleSection.content.find(chapter => chapter.chapterName === 'other');

export const sidebarConfig = {
    sidebarData: sidebarConfigObject,
    getSection: (sectionName) => {
        return sidebarConfigObject.sections.find(section => section.sectionName === sectionName);
    },
    getChapter: (sectionName, chapterName) => {
        return sidebarConfigObject.sections.find(section => section.sectionName === sectionName && section.contentType === 'chapters')
            .content.find(chapter => chapter.chapterName === chapterName);
    },
    getItem: (sectionName, chapterName, itemName) => {
        return sidebarConfigObject.sections.find(section => section.sectionName === sectionName && section.contentType === 'chapters')
            .content.find(chapter => chapter.chapterName === chapterName)
            .chapterItems.find(item => item.itemName === itemName);
    },
    getItemsList: (sectionName, chapterName) => {
        return sidebarConfigObject.sections.find(section => section.sectionName === sectionName && section.contentType === 'chapters')
            .content.find(chapter => chapter.chapterName === chapterName)
            .chapterItems;
    },
    getChapterItems: (sectionName) => {
        return sidebarConfigObject.sections.find(section => section.sectionName === sectionName && section.contentType === 'chapters')
            .content;
    },
    sections: {
        top: topSection,
        buttom: bottomSection,
        middle: middleSection
    },
    chapters: {
        assistance: assistanceChapter,
        editors: editorsChapter,
        other: otherChapter
    }
};
