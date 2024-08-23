import sidebarConfigJSON from './sidebar.config.json';

export const sidebarConfig = JSON.parse(JSON.stringify(sidebarConfigJSON));

// הגדרת משתני הסביבה
process.env = sidebarConfig.name;
process.env.sidebar_VERSION = sidebarConfig.version;
process.env.sidebar_PORT = sidebarConfig.port;


// ייצוא הנתונים לשימוש בפרויקט
export const sidebarDetails = sidebarConfig.sidebar.details;
export const sidebarData = sidebarConfig.sidebar.data;
export const credits = sidebarConfig.description.credits;
export const sidebarPort = sidebarConfig.port;
