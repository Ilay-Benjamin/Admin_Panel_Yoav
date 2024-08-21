import appConfigJSON from './app.config.json';

export const appConfig = JSON.parse(JSON.stringify(appConfigJSON));

// הגדרת משתני הסביבה
process.env.APP_NAME = appConfig.name;
process.env.APP_VERSION = appConfig.version;
process.env.APP_PORT = appConfig.port;


// ייצוא הנתונים לשימוש בפרויקט
export const appDetails = appConfig.app.details;
export const appData = appConfig.app.data;
export const credits = appConfig.description.credits;
export const appPort = appConfig.port;
