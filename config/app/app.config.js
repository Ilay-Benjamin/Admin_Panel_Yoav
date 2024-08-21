import { readFile } from 'fs/promises';
import path from 'path';

// קריאת קובץ ה-JSON
const appConfigPath = path.resolve('config/app/app.config.json');
const appConfig = JSON.parse(await readFile(appConfigPath, 'utf-8'));

// הגדרת משתני הסביבה
process.env.APP_NAME = appConfig.name;
process.env.APP_VERSION = appConfig.version;
process.env.APP_PORT = appConfig.port;

// ייצוא הנתונים לשימוש בפרויקט
export const appDetails = appConfig.app.details;
export const appData = appConfig.app.data;
export const credits = appConfig.description.credits;
export const appPort = appConfig.port;
